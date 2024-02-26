'use server'
import type * as z from 'zod'
import { ResetSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { sendPasswordResetEmail } from '@/lib/mail'
import { generatePasswordResetToken } from '@/lib/tokens'

/**
 * Envia um email para redefinição de senha para o usuário com o email fornecido.
 * @param {object} values - Os valores fornecidos para a redefinição de senha.
 * @param {string} values.email - O endereço de email do usuário para redefinição de senha.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto indicando o resultado do processo de redefinição de senha.
 * Se o email for encontrado e o email de redefinição de senha for enviado com sucesso, retorna um objeto de sucesso.
 * Se ocorrer algum erro durante o processo ou se o email não for encontrado, retorna um objeto de erro com uma mensagem correspondente.
 */
export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Email inválido!' }
  }

  const { email } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email não encontrado!' }
  }

  const passwordResetToken = await generatePasswordResetToken(email)
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )

  return { success: 'Email para resetar sua Senha foi enviado!' }
}
