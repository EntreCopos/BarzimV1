import { db } from '@/lib/db'

/**
 * Obtém um token de verificação com base no token.
 * @param {string} token - O token de verificação.
 * @returns {Promise<object>} Uma Promise que resolve para o token de verificação encontrado ou null se não encontrado.
 */
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    })

    return verificationToken
  } catch {
    return null
  }
}

/**
 * Obtém um token de verificação com base no email.
 * @param {string} email - O email associado ao token de verificação.
 * @returns {Promise<object>} Uma Promise que resolve para o token de verificação encontrado ou null se não encontrado.
 */
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    })

    return verificationToken
  } catch {
    return null
  }
}
