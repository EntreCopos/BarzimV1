import { getUserIdByUsername } from './social'
import { db } from '@/lib/db'

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

export const getAvaliacoesByCerveja = async (id: string) => {
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
      reviewTexto: true,
      reviewLikes: true,
      nota: true,
      usuario: {
        select: {
          name: true,
          username: true,
          image: true,
        },
      },
    },
  })
  return avaliacoes
}

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
