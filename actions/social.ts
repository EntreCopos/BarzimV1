'use server'

import { db } from '@/lib/db'

export const isFollowing = async (userIdA: string, userIdB: string) => {
  try {
    const res = await db.userFollowing.findFirst({
      where: {
        followerId: userIdA,
        followingId: userIdB,
      },
    })
    return res
  } catch (err) {
    return null
  }
}

export const follow = async (userIdA: string, userIdB: string) => {
  try {
    await db.userFollowing.create({
      data: {
        followerId: userIdA,
        followingId: userIdB,
        createdAt: new Date(),
      },
    })
    console.log(userIdA, 'agora segue ', userIdB)
  } catch (err) {
    return null
  }
}

export const unfollow = async (userIdA: string, userIdB: string) => {
  try {
    await db.userFollowing.deleteMany({
      where: {
        followerId: userIdA,
        followingId: userIdB,
      },
    })
    console.log(userIdA, 'parou de seguir ', userIdB)
  } catch (err) {
    throw err
  }
}

export const handleRelationship = async (userIdA: string, userIdB: string) => {
  try {
    const _isFollowing = await db.userFollowing.findFirst({
      where: {
        followerId: userIdA,
        followingId: userIdB,
      },
    })

    if (!!_isFollowing) {
      await db.userFollowing.deleteMany({
        where: {
          followerId: userIdA,
          followingId: userIdB,
        },
      })
      console.log(userIdA, 'parou de seguir ', userIdB)
    } else {
      await db.userFollowing.create({
        data: {
          followerId: userIdA,
          followingId: userIdB,
          createdAt: new Date(),
        },
      })
    }
  } catch (err) {
    return null
  }
}
