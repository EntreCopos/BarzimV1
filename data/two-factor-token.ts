import { db } from '@/lib/db'

/**
 * Obtém o token de autenticação em duas etapas pelo token.
 * @param {string} token - O token de autenticação em duas etapas.
 * @returns {Promise<object | null>} Uma Promise que resolve para o token de autenticação em duas etapas ou null se não for encontrado.
 */
export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: { token },
    })

    return twoFactorToken
  } catch {
    return null
  }
}

/**
 * Obtém o token de autenticação em duas etapas pelo e-mail.
 * @param {string} email - O e-mail associado ao token de autenticação em duas etapas.
 * @returns {Promise<object | null>} Uma Promise que resolve para o token de autenticação em duas etapas ou null se não for encontrado.
 */
export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    })

    return twoFactorToken
  } catch {
    return null
  }
}
