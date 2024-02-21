import { db } from '@/lib/db'
import { getUserIdByUsername } from './social'

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({ where: { email } })
  } catch {
    return null
  }
}

export const getUserById = async (id: string | undefined) => {
  if (typeof id == undefined) return null
  try {
    return await db.user.findUnique({ where: { id } })
  } catch {
    return null
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    return await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        name: true,
        image: true,
        bio: true,
        link: true,
        username: true,
        followers: true,
        following: true,
      },
    })
  } catch (err) {
    return null
  }
}

export const getManyUsersNotPrivate = async (excludeId: string | undefined) => {
  try {
    return await db.user.findMany({
      where: {
        isPrivate: false,
        NOT: {
          id: excludeId ?? 'null',
        },
      },
      select: {
        id: true,
        name: true,
        image: true,
        username: true,
      },
    })
  } catch (err) {
    return null
  }
}

export const getUserReviewPics = async (username: string) => {
  try {
    const userId = await getUserIdByUsername(username)

    const reviewsWithPics = await db.userCerveja.findMany({
      where: {
        usuarioId: userId,
        imagens: { isEmpty: false },
      },
      select: {
        imagens: true,
      },
    })
    return reviewsWithPics.flatMap((reviewPic) =>
      reviewPic.imagens.map((imageString) => JSON.parse(imageString))
    )
  } catch (err) {
    return null
  }
}
