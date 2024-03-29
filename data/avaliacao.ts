import { getUserIdByUsername } from './social'
import { db } from '@/lib/db'

/**
 * Retorna a relação entre um usuário e uma cerveja.
 * @param {string} userId - O ID do usuário.
 * @param {string} cervejaId - O ID da cerveja.
 * @returns {Promise<any>} A relação entre o usuário e a cerveja.
 */
export const relUserCerv = async (userId: string, cervejaId: string) => {
  return await db.userCerveja.findFirst({
    where: {
      cervejaId: +cervejaId,
      usuarioId: userId,
    },
    select: {
      favorita: true,
      queroBeber: true,
      jaBebida: true,
      reviewTexto: true,
    },
  })
}

/**
 * Cria ou atualiza uma avaliação de uma cerveja por um usuário.
 * @param {string} userId - O ID do usuário.
 * @param {string} cervejaId - O ID da cerveja.
 * @param {object} moreData - Outros dados da avaliação.
 * @returns {Promise<any>} A nova relação entre o usuário e a cerveja.
 */
export const createAvaliacao = async (
  userId: string,
  cervejaId: string,
  moreData: { [key: string]: any } // Definindo moreData como um objeto genérico
) => {
  const newRel = await db.userCerveja.upsert({
    where: {
      usuarioId_cervejaId: {
        usuarioId: userId,
        cervejaId: +cervejaId,
      },
    },
    update: {
      queroBeber: false, // assumindo que se fez o review, ja bebeu
      jaBebida: true, // assumindo que se fez o review, ja bebeu
      ...moreData,
    },
    create: {
      usuarioId: userId,
      cervejaId: +cervejaId,
      jaBebida: true, // assumindo que se fez o review, ja bebeu
      ...moreData,
    },
  })

  return newRel
}

/**
 * Retorna as avaliações de uma cerveja.
 * @param {string} id - O ID da cerveja.
 * @returns {Promise<any[]>} As avaliações da cerveja.
 */
export const getAvaliacoesByCerveja = async (id: string | number) => {
  const avaliacoes = await db.userCerveja.findMany({
    where: {
      cervejaId: +id,
      AND: {
        reviewTexto: {
          not: null,
        },
      },
    },
    select: {
      id: true,
      reviewTexto: true,
      reviewLikes: true,
      nota: true,
      createdAt: true,
      usuario: {
        select: {
          name: true,
          username: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  })
  return avaliacoes
}

/**
 * Retorna as avaliações de um usuário.
 * @param {string} username - O nome de usuário.
 * @param {number} [size=10] - O tamanho da lista de avaliações.
 * @returns {Promise<any[]>} As avaliações do usuário.
 */
export const getAvaliacoesByUser = async (
  username: string,
  size: number = 10
) => {
  const id = await getUserIdByUsername(username)
  const avaliacoes = await db.userCerveja.findMany({
    take: size,
    where: {
      usuarioId: id,
      AND: {
        reviewTexto: { not: null },
        OR: [{ nota: { not: null } }],
      },
    },
    select: {
      id: true,
      reviewTexto: true,
      reviewLikes: true,
      nota: true,
      createdAt: true,
      imagens: true,
      cerveja: {
        select: {
          nomeCerveja: true,
          id: true,
        },
      },
      usuario: {
        select: {
          name: true,
          username: true,
          image: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return avaliacoes
}

/**
 * Verifica se um usuário já avaliou uma cerveja pelo ID.
 * @param {string} cerverjaId - O ID da cerveja.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<any>} A avaliação se existir, caso contrário, null.
 */
export const userHasReviewedCervejaById = async (
  cerverjaId: string,
  userId: string
) => {
  const result = await db.userCerveja.findFirst({
    where: {
      cervejaId: +cerverjaId,
      usuarioId: userId,
      reviewTexto: { not: null },
      OR: [{ nota: { not: null } }],
    },
  })
  return result
}

/**
 * Retorna todas as avaliações de cervejas.
 * @param {number} size - O tamanho da lista de avaliações.
 * @returns {Promise<any[]>} As avaliações de cervejas.
 */
export const getAllCervejaAvaliacoes = async (size: number) => {
  const avaliacoes = await db.userCerveja.findMany({
    where: {
      reviewTexto: {
        not: null,
      },
    },
    take: size,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      cerveja: {
        select: {
          nomeCerveja: true,
          id: true,
        },
      },
      usuario: {
        select: {
          username: true,
          image: true,
        },
      },
    },
  })
  return avaliacoes
}

/**
 * Retorna todas as cervejas marcadas como 'Quero Beber'.
 * @param {number} size - O tamanho da lista de cervejas.
 * @returns {Promise<any[]>} As cervejas marcadas como 'Quero Beber'.
 */
export const getAllCervejaQuerBeber = async (size: number) => {
  const avaliacoes = await db.userCerveja.findMany({
    where: {
      queroBeber: true,
    },
    take: size,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      cerveja: {
        select: {
          nomeCerveja: true,
          id: true,
        },
      },
      usuario: {
        select: {
          username: true,
          image: true,
        },
      },
    },
  })
  return avaliacoes
}

/**
 * Retorna as cervejas favoritas de um usuário.
 * @param {string} username - O nome de usuário.
 * @returns {Promise<any[]>} As cervejas favoritas do usuário.
 */
export const getUserCervejaFavoritas = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  const favoritas = await db.userCerveja.findMany({
    where: {
      usuarioId: userId,
      favorita: true,
    },
  })
  return favoritas
}

/**
 * Retorna as cervejas já bebidas por um usuário.
 * @param {string} username - O nome de usuário.
 * @returns {Promise<any[]>} As cervejas já bebidas pelo usuário.
 */
export const getUserCervejasJaBebidas = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  const jaBebidas = await db.userCerveja.findMany({
    where: {
      usuarioId: userId,
      jaBebida: true,
    },
    select: {
      cerveja: {
        include: {
          tipoCerveja: true,
          cervejaria: true,
        },
      },
    },
  })

  const cervejasJaBebidas = jaBebidas.map((item) => item.cerveja)
  return cervejasJaBebidas
}

/**
 * Retorna as cervejas que um usuário quer beber.
 * @param {string} username - O nome de usuário.
 * @returns {Promise<any[]>} As cervejas que o usuário quer beber.
 */
export const getUserCerverjasQueroBeber = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  const queroBeber = await db.userCerveja.findMany({
    where: {
      usuarioId: userId,
      queroBeber: true,
    },
    select: {
      cerveja: {
        include: {
          tipoCerveja: true,
          cervejaria: true,
        },
      },
    },
  })

  const cervejasQueroBeber = queroBeber.map((item) => item.cerveja)
  return cervejasQueroBeber
}
