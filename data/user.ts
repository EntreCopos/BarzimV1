import { db } from '@/lib/db'

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
