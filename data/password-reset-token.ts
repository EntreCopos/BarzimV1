import { db } from '@/lib/db'

/**
 * Obtém um token de redefinição de senha com base no próprio token.
 * @param {string} token - O token de redefinição de senha.
 * @returns {Promise<object | null>} Uma Promise que resolve para um objeto representando o token de redefinição de senha ou null se não for encontrado.
 */
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    })

    return passwordResetToken
  } catch {
    return null
  }
}

/**
 * Obtém um token de redefinição de senha com base no endereço de e-mail associado.
 * @param {string} email - O endereço de e-mail associado ao token de redefinição de senha.
 * @returns {Promise<object | null>} Uma Promise que resolve para um objeto representando o token de redefinição de senha ou null se não for encontrado.
 */
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    })

    return passwordResetToken
  } catch {
    return null
  }
}
