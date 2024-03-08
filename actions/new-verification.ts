'use server'

import { db } from '@/lib/db'
import { getUserByEmail } from '@/data/user'
import { getVerificationTokenByToken } from '@/data/verificiation-token'

/**
 * Marca o email de um usuário como verificado com base em um token de verificação.
 * @param {string} token - O token de verificação.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto indicando o resultado da operação.
 * Se o email for verificado com sucesso, retorna um objeto de sucesso.
 * Se ocorrer algum erro durante o processo, retorna um objeto de erro com uma mensagem correspondente.
 */
export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return { error: 'Token não existe' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token expirou' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Usuário não existe' }
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  })

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  })

  return { success: 'Email verificado' }
}
