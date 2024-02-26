'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { NewPasswordSchema } from '@/schemas'
import { getPasswordResetTokenByToken } from '@/data/password-reset-token'
import { getUserByEmail } from '@/data/user'
import { db } from '@/lib/db'

/**
 * Define uma nova senha para um usuário com base em um token de redefinição de senha.
 * @param {object} values - Os valores fornecidos para a nova senha.
 * @param {string} values.password - A nova senha do usuário.
 * @param {string | null} token - O token de redefinição de senha.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto indicando o resultado da operação.
 * Se a senha for alterada com sucesso, retorna um objeto de sucesso.
 * Se ocorrer algum erro durante o processo, retorna um objeto de erro com uma mensagem correspondente.
 */
export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Faltando token' }
  }

  const validatedFields = NewPasswordSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campo inválido' }
  }

  const { password } = validatedFields.data

  const existingToken = await getPasswordResetTokenByToken(token)

  if (!existingToken) {
    return { error: 'Token inválido' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token expirou' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Email não existe' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  })

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  })

  return { success: 'Senha alterada com sucesso' }
}
