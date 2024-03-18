import { db } from '@/lib/db'

/**
 * Encontra a relação de seguimento entre dois usuários.
 * @param {string} meuId - O ID do usuário que está seguindo.
 * @param {string} followingId - O ID do usuário que está sendo seguido.
 * @returns {Promise<object | null>} Uma Promise que resolve para um objeto representando a relação de seguimento ou null se não for encontrada.
 */
export const findRelationship = async (meuId: string, followingId: string) => {
  return await db.userFollowing.findFirst({
    where: {
      followerId: meuId,
      followingId,
    },
  })
}

/**
 * Cria uma relação de seguimento entre dois usuários.
 * @param {string} followerId - O ID do usuário que está seguindo.
 * @param {string} followingId - O ID do usuário que está sendo seguido.
 * @returns {Promise<object>} Uma Promise que resolve para o objeto representando a nova relação de seguimento.
 */
export const createFollow = async (followerId: string, followingId: string) => {
  return await db.userFollowing.create({
    data: {
      followerId,
      followingId,
      createdAt: new Date(),
    },
  })
}

/**
 * Exclui uma relação de seguimento entre dois usuários.
 * @param {string} followerId - O ID do usuário que está seguindo.
 * @param {string} followingId - O ID do usuário que está sendo seguido.
 * @returns {Promise<object>} Uma Promise que resolve para o objeto representando a relação de seguimento excluída.
 */
export const deleteFollow = async (followerId: string, followingId: string) => {
  return await db.userFollowing.deleteMany({
    where: {
      followerId,
      followingId,
    },
  })
}

/**
 * Obtém o ID de usuário com base no nome de usuário.
 * @param {string} username - O nome de usuário do usuário.
 * @returns {Promise<string | null>} Uma Promise que resolve para o ID de usuário ou null se não for encontrado.
 */
export const getUserIdByUsername = async (username: string) => {
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

/**
 * Conta o número de seguidores de um usuário.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<number>} Uma Promise que resolve para o número de seguidores do usuário.
 */
export const countUserFollowers = async (userId: string) => {
  const userFollowersNumber = await db.userFollowing.count({
    where: {
      followingId: {
        equals: userId,
      },
    },
  })
  return userFollowersNumber
}

/**
 * Conta o número de usuários que um usuário está seguindo.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<number>} Uma Promise que resolve para o número de usuários que o usuário está seguindo.
 */
export const countUserFollowing = async (userId: string) => {
  const userFollowingsNumber = await db.userFollowing.count({
    where: {
      followerId: {
        equals: userId,
      },
    },
  })
  return userFollowingsNumber
}

/**
 * Conta o número de avaliações que um usuário fez.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<number>} Uma Promise que resolve para o número de avaliações que o usuário fez.
 */
export const countUserAvaliacoes = async (userId: string) => {
  return await db.userCerveja.count({
    where: {
      usuarioId: userId,
      AND: {
        nota: { not: null },
      },
    },
  })
}

/**
 * Obtém as métricas de um usuário, incluindo o número de avaliações, seguidores e usuários seguidos.
 * @param {string} userName - O nome de usuário do usuário.
 * @returns {Promise<object>} Uma Promise que resolve para um objeto contendo as métricas do usuário.
 */
export const getUserMetrics = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)
  const userFollowingsCount = await countUserFollowing(userId)
  const userFollowersCount = await countUserFollowers(userId)
  const avaliacaoUserCount = await countUserAvaliacoes(userId)

  return {
    avaliacaoUserCount,
    userFollowingsCount,
    userFollowersCount,
  }
}

/**
 * Obtém a lista de seguidores de um usuário.
 * @param {string} userName - O nome de usuário do usuário.
 * @returns {Promise<object>} Uma Promise que resolve para um objeto representando a lista de seguidores do usuário.
 */
export const getUserFollowersList = async (userName: string) => {
  const userId = await getUserIdByUsername(userName)
  return await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      followers: {
        select: {
          follower: {
            select: {
              name: true,
              id: true,
              username: true,
              image: true,
              bio: true,
            },
          },
        },
      },
    },
  })
}

/**
 * Obtém a lista de usuários que um usuário está seguindo.
 * @param {string} username - O nome de usuário do usuário.
 * @returns {Promise<object>} Uma Promise que resolve para um objeto representando a lista de usuários que o usuário está seguindo.
 */
export const getUsersFollowingList = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  return await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      following: {
        select: {
          following: {
            select: {
              name: true,
              username: true,
              image: true,
              bio: true,
            },
          },
        },
      },
    },
  })
}
