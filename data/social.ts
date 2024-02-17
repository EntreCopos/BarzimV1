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
  return userId?.id as string
}

export const countUserFollowers = async (userId: string) => {
  const userFollowersNumber = await db.userFollowing.count({
    where: {
      followingId: {
        equals: userId
      },
    },
  })
  return userFollowersNumber
}

export const countUserFollowing = async (userId: string) => {
  const userFollowingsNumber = await db.userFollowing.count({
    where: {
      followerId: {
        equals: userId
      },
    },
  })
  return userFollowingsNumber
}

export const countUserAvaliacoes = async (userId: string) => {
  return await db.userCerveja.count({
    where: {
      usuarioId: userId,
      AND :{
        nota: { not: null}
      }
    }
  })
  
}

export const getUserMetrics = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)  
  const userFollowingsCount = await countUserFollowing(userId)
  const userFollowersCount = await countUserFollowers(userId)
  const avaliacaoUserCount = await countUserAvaliacoes(userId)
  
  return {
    avaliacaoUserCount, 
    userFollowingsCount, 
    userFollowersCount
  }
}

export const getUserFollowersList = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)
  return await db.user.findUnique({
    where: {
      id: userId
    },
    select: {
      followers: {
        select: {
          follower :{
            select: {
              name: true,
              id: true,
              username: true,
              image: true
            }
          }
        }
      }
    }
  })
}

export const getUsersFollowingList = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  return await db.user.findUnique({
    where: {
      id: userId
    },
    select: {
      following: {
        select: {
          following :{
            select: {
              name: true,
              username: true,
              image: true
            }
          }
        }
      }
    }
  })
}
