import { db } from '@/lib/db'

/**
 * Adiciona uma cerveja à lista de um usuário.
 * @param {number} idCerveja - O ID da cerveja a ser adicionada.
 * @param {string} tipoLista - O tipo de lista (Favoritar, Quero Beber, Já Bebi).
 * @param {string} usuarioId - O ID do usuário.
 * @returns {Promise<object>} Uma Promise que resolve para a entrada atualizada ou recém-criada na lista do usuário.
 */
export const addToUserCerveja = async (
  idCerveja: number,
  tipoLista: string,
  usuarioId: string
) => {
  // Primeiro, tente encontrar a entrada existente
  const existingEntry = await db.userCerveja.findUnique({
    where: {
      usuarioId_cervejaId: { usuarioId: usuarioId, cervejaId: idCerveja },
    },
  })

  // Se a entrada existir, atualize apenas o campo correspondente ao tipoLista
  if (existingEntry) {
    const updatedEntry = await db.userCerveja.update({
      where: {
        usuarioId_cervejaId: { usuarioId: usuarioId, cervejaId: idCerveja },
      },
      data: {
        ...existingEntry,
        favorita:
          tipoLista === 'Favoritar'
            ? !existingEntry.favorita
            : existingEntry.favorita,
        queroBeber:
          tipoLista === 'Quero Beber'
            ? !existingEntry.queroBeber
            : existingEntry.queroBeber,
        jaBebida:
          tipoLista === 'Já Bebi'
            ? !existingEntry.jaBebida
            : existingEntry.jaBebida,
      },
    })

    return updatedEntry
  }

  // Se a entrada não existir, crie uma nova com o campo correspondente ao tipoLista definido como true
  const newEntry = await db.userCerveja.create({
    data: {
      usuarioId: usuarioId,
      cervejaId: idCerveja,
      favorita: tipoLista === 'Favoritar',
      queroBeber: tipoLista === 'Quero Beber',
      jaBebida: tipoLista === 'Já Bebi',
    },
  })

  return newEntry
}
