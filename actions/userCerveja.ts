'use server'
import { addToUserCerveja } from '@/data/userCerveja' // Atualize com o caminho para a função addToUserCerveja

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
