'use server'
import { addToUserCerveja } from '@/data/userCerveja' // Atualize com o caminho para a função addToUserCerveja
import { getCurrentUserId } from '@/lib/auth'
import { db } from '@/lib/db'
import { brindou_Activity, undoBrindou_Activity } from './activities/brindar'

/**
 * Adiciona uma cerveja à lista de um usuário.
 * @param {number} idCerveja - O ID da cerveja que será adicionada à lista.
 * @param {string} tipoLista - O tipo de lista à qual a cerveja será adicionada (por exemplo, "favoritos", "desejados", etc.).
 * @param {string} usuarioId - O ID do usuário ao qual a cerveja será adicionada à lista.
 * @returns {Promise<void | null>} Uma promessa que resolve quando a cerveja é adicionada com sucesso à lista do usuário.
 * Se ocorrer algum erro durante o processo, a promessa é rejeitada e retorna nulo.
 */
export const addCervejaToList = async (
  idCerveja: number,
  tipoLista: string,
  usuarioId: string
) => {
  try {
    await addToUserCerveja(idCerveja, tipoLista, usuarioId)

    console.log(
      `Cerveja ${idCerveja} adicionada à lista ${tipoLista} do usuário ${usuarioId}`
    )
  } catch (err) {
    console.error('Erro ao adicionar cerveja à lista:', err)
    return null
  }
}

export const likeUserCerveja = async (likedId: number) => {
  const userId = await getCurrentUserId()
  try {
    await db.userLikedUserCerveja.create({
      data: {
        userId,
        likedId,
      },
    })
    await brindou_Activity(likedId)
  } catch (err) {
    console.error(err)
  }
}

export const undoLikeUserCerveja = async (likedId: number) => {
  const userId = await getCurrentUserId()
  try {
    await db.userLikedUserCerveja.deleteMany({
      where: {
        userId,
        likedId,
      },
    })
    await undoBrindou_Activity(likedId)
  } catch (err) {
    console.error(err)
  }
}

export const getUsersLikedUserCerveja = async (id: number) => {
  try {
    const usersLiked = await db.userCerveja.findFirst({
      where: {
        id,
      },
      select: {
        _count: {
          select: {
            UsersLiked: true,
          },
        },
        UsersLiked: true,
      },
    })
    return usersLiked
  } catch (err) {
    console.error(err)
    return null
  }
}
