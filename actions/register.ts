'use server'

import type * as z from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
//import { sendVerificationEmail } from '@/lib/mail'
//import { generateVerificationToken } from '@/lib/tokens'

import { generateFromEmail } from 'unique-username-generator'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, dateOfBirth, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingEmail = await getUserByEmail(email)

  if (existingEmail) {
    return { error: 'esse email já foi usado :((((' }
  }

  await db.user.create({
    data: {
      name,
      username: generateFromEmail(email, 4),
      email,
      password: hashedPassword,
      dateOfBirth: new Date(dateOfBirth),
      emailVerified: new Date(), // PROVISÓRIO. enquanto n temos o dominio p enviar o email de verif. validamos o email ja no cadastro
    },
  })

  // PROVISÓRIO. enquanto n temos o dominio p enviar o email de verif. pulamos a etapa de gerar e enviar o codigo de verif
  // const verificationToken = await generateVerificationToken(email)
  // await sendVerificationEmail(verificationToken.email, verificationToken.token)

  // return { success: 'Email de confirmação enviado!' }

  return { success: 'Usuário criado e validado!' }
}
