import { db } from '@/lib/db'
import { getUserIdByUsername } from './social'

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({ where: { email } })
  } catch {
    return null
  }
}

//esse getter não é seguro no momento, esta vazando o hash da senha do usuario
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    })
    return user
  } catch (err) {
    return null
  }
}

export const getUsernameById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        username: true
      }
    })
    return user
  } catch (err) {
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
function exclude(
  user: {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    bio: string
    link: string | null
    password: string | null
    role: import('@prisma/client').$Enums.UserRole
    isTwoFactorEnabled: boolean
    dateOfBirth: Date | null
    username: string | null
    isPrivate: boolean
    genero: import('@prisma/client').$Enums.Genero | null
    cep: string | null
    createdAt: Date
  } | null,
  arg1: string[]
) {
  throw new Error('Function not implemented.')
}
