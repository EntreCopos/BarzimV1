import { db } from '@/lib/db'

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })

    return user
  } catch {
    return null
  }
}

export const getUserById = async (id: string | undefined) => {
  if (typeof id == undefined) return null
  try {
    const user = await db.user.findUnique({ where: { id } })

    return user
  } catch {
    return null
  }
}

export const getUserByUsername = async (username: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        name: true,
        image: true,
        username: true,
        followers: true,
      },
    })
    return user
  } catch (err) {
    return null
  }
}
