import { db } from '@/lib/db'

/**
 * Obtém a confirmação de autenticação em duas etapas por ID de usuário.
 * @param {string} userId - O ID do usuário.
 * @returns {Promise<object | null>} Uma Promise que resolve para a confirmação de autenticação em duas etapas ou null se não for encontrada.
 */
export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    })

    return twoFactorConfirmation
  } catch {
    return null
  }
}
