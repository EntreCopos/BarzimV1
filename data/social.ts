import { db } from '@/lib/db'

export const findRelationship = async (
  followerId: string,
  followingId: string
) => {
  return await db.userFollowing.findFirst({
    where: {
      followerId,
      followingId,
    },
  })
}

export const createFollow = async (followerId: string, followingId: string) => {
  return await db.userFollowing.create({
    data: {
      followerId,
      followingId,
      createdAt: new Date(),
    },
  })
}

export const deleteFollow = async (followerId: string, followingId: string) => {
  return await db.userFollowing.deleteMany({
    where: {
      followerId,
      followingId,
    },
  })
}

export const getUserIdByUsername = async (username: string) =>{
  const userId = await db.user.findFirst({
    where: {
      username,
    },
    select: {
      id: true,
    },
  })
  return userId
}

export const countUserFollowers = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)  
  const userFollowersNumber = await db.userFollowing.count({
    where: {
      followingId: {
        equals: userId?.id as unknown as string
      },
    },
  })
  return userFollowersNumber
}

export const countUserFollowing = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)  
  const userFollowingsNumber = await db.userFollowing.count({
    where: {
      followerId: {
        equals: userId?.id as unknown as string
      },
    },
  })
  return userFollowingsNumber
}

export const getUserMetrics = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)  
  const userFollowingsNumber = await countUserFollowing(userId?.id as unknown as string)
  const userFollowersNumber = await countUserFollowers(userId?.id as unknown as string)
  
  return { userFollowersNumber, userFollowingsNumber}
}
