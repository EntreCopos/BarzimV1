import { db } from '@/lib/db'
import { getUserIdByUsername } from './social'

/**
 * Obtém um usuário pelo endereço de e-mail.
 * @param {string} email - O endereço de e-mail do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para o usuário ou null se não for encontrado.
 */
export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findUnique({ where: { email } })
  } catch {
    return null
  }
}

/**
 * Atualiza a foto de perfil do usuário.
 * @param {string} userId - O ID do usuário.
 * @param {string} pictureUrl - A URL da nova foto de perfil.
 * @returns {Promise<void>} Uma Promise vazia.
 */
export const updateUserProfilePic = async (
  userId: string,
  pictureUrl: string
) => {
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      image: pictureUrl,
    },
  })
}

/**
 * Remove a foto de perfil do usuário.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<number>} Uma Promise que resolve para 1 após a remoção da foto de perfil.
 */
export const removeUserProfilePic = async (userId: string) => {
  await db.user.update({
    where: {
      id: userId,
    },
    data: {
      image: null,
    },
  })
  return 1
}

/**
 * Obtém um usuário pelo ID.
 * @param {string} id - O ID do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para o usuário ou null se não for encontrado.
 */
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

/**
 * Obtém um usuário pelo ID, selecionando apenas informações seguras.
 * @param {string} id - O ID do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para o usuário ou null se não for encontrado.
 */
export const safeGetUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        username: true,
        image: true,
        bio: true,
        link: true,
        role: true,
        genero: true,
      },
    })
    return user
  } catch (err) {
    return null
  }
}

/**
 * Obtém o nome de usuário pelo ID.
 * @param {string} id - O ID do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para o nome de usuário ou null se não for encontrado.
 */
export const getUsernameById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      select: {
        username: true,
      },
    })
    return user
  } catch (err) {
    return null
  }
}

/**
 * Obtém um usuário pelo nome de usuário.
 * @param {string} username - O nome de usuário do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para o usuário ou null se não for encontrado.
 */
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
        role: true,
      },
    })
  } catch (err) {
    return null
  }
}

/**
 * Obtém uma lista de usuários que não são privados, excluindo um ID específico.
 * @param {string} excludeId - O ID do usuário a ser excluído da lista.
 * @returns {Promise<object[] | null>} Uma Promise que resolve para a lista de usuários ou null se ocorrer um erro.
 */
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
        bio: true,
        link: true,
        role: true,
      },
    })
  } catch (err) {
    return null
  }
}

/**
 * Obtém as imagens das avaliações do usuário.
 * @param {string} username - O nome de usuário do usuário.
 * @returns {Promise<string[] | null>} Uma Promise que resolve para a lista de URLs das imagens das avaliações do usuário ou null se ocorrer um erro.
 */
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
