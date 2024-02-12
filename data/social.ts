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
