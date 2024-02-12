'use server'
import { createFollow, deleteFollow, findRelationship } from '@/data/social'

export const isFollowing = async (userIdA: string, userIdB: string) => {
  try {
    const res = await findRelationship(userIdA, userIdB)
    return res
  } catch (err) {
    return null
  }
}

export const follow = async (userIdA: string, userIdB: string) => {
  try {
    await createFollow(userIdA, userIdB)

    console.log(userIdA, 'agora segue ', userIdB)
  } catch (err) {
    return null
  }
}

export const unfollow = async (userIdA: string, userIdB: string) => {
  try {
    await deleteFollow(userIdA, userIdB)
    console.log(userIdA, 'parou de seguir ', userIdB)
  } catch (err) {
    throw err
  }
}

export const handleRelationship = async (userIdA: string, userIdB: string) => {
  try {
    const _isFollowing = await findRelationship(userIdA, userIdB)

    if (!!_isFollowing) {
      await deleteFollow(userIdA, userIdB)

      console.log(userIdA, 'parou de seguir ', userIdB)
    } else {
      await createFollow(userIdA, userIdB)
    }
  } catch (err) {
    return null
  }
}
