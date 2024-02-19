import { getUserIdByUsername } from './social'
import { db } from '@/lib/db'

export const relUserCerv = async (userId: string, cervejaId: string) => {
  return await db.userCerveja.count({
    where: {
      cervejaId: +cervejaId,
      AND: {
        usuarioId: userId,
      },
    },
  })
}


export const createAvaliacao = async (
  userId: string,
  cervejaId: string,
  moreData: object
) => {
  const newRel = await db.userCerveja.createMany({
    data: [
      {
        usuarioId: userId,
        cervejaId: +cervejaId,
        ...moreData,
      },
    ],
  })
  return newRel
}

export const createRelationUserCerveja = async () => {

}

// export const getUserCervejasAvaliadas = async (username: string) => {
//   const userId = await getUserIdByUsername(username)

//   const interactions = await db.userCerveja.findMany({
//     where: {
//       usuarioId: {
//         equals: userId as unknown as string
//       },
//     }
//   })

//   return interactions
// }

export const getCervejaAvaliacoes = async () => {
  const avaliacoes = await db.userCerveja.findMany({
    include: {
      usuario: {
        select: {
          username: true,
          image: true
        }
      }
    }
  })
  return avaliacoes
}


export const getUserCervejaFavoritas = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  const favoritas = await db.userCerveja.findMany({
    where: {
      usuarioId: userId,
      favorita: true
    }
  })
  return favoritas
}

export const getUserCerverjasQueroBeber = async (username: string) => {
  const userId = await getUserIdByUsername(username)
  const queroBeber = await db.userCerveja.findMany({
    where: {
      usuarioId: userId,
      queroBeber: true
    }
  })
  return queroBeber
}