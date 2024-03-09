'use server'

import type * as z from 'zod'
import bcrypt from 'bcryptjs'
import { cookies as c } from 'next/headers'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { generateFromEmail } from 'unique-username-generator'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'

/**
 * Registra um novo usuário com os dados fornecidos.
 * @param {object} values - Os valores fornecidos para o registro.
 * @param {string} values.email - O endereço de email do usuário.
 * @param {string} values.password - A senha do usuário.
 * @param {string} values.name - O nome do usuário.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto indicando o resultado do processo de registro.
 * Se o registro for bem-sucedido, retorna um objeto de sucesso.
 * Se ocorrer algum erro durante o processo, retorna um objeto de erro com uma mensagem correspondente.
 */
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingEmail = await getUserByEmail(email)

  if (existingEmail) {
    return { error: 'esse email já foi usado :((((' }
  }
  // Obtenção da data de nascimento do cabeçalho dos cookies
  const dateOfBirth = c().get('dateOfBirth')

  await db.user.create({
    data: {
      name,
      username: generateFromEmail(email, 4),
      email,
      password: hashedPassword,
      dateOfBirth: dateOfBirth?.value,
    },
  })

  const verificationToken = await generateVerificationToken(email)
  await sendVerificationEmail(verificationToken.email, verificationToken.token)

  return { success: 'Email de confirmação enviado!' }
}
