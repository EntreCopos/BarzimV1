'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'

import { db } from '@/lib/db'
import { signIn } from '@/auth'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/lib/mail'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { generateVerificationToken, generateTwoFactorToken } from '@/lib/tokens'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'

/**
 * Efetua o processo de login de um usuário.
 * @param {object} values - Os valores fornecidos para o login.
 * @param {string} values.email - O endereço de email do usuário.
 * @param {string} values.password - A senha do usuário.
 * @param {string} values.code - O código de autenticação de dois fatores, se aplicável.
 * @returns {Promise<{success: string} | {error: string} | {twoFactor: boolean}>} Um objeto indicando o resultado do processo de login.
 * Se o login for bem-sucedido, retorna um objeto de sucesso.
 * Se houver um erro durante o processo de login, retorna um objeto de erro com uma mensagem correspondente.
 * Se a autenticação de dois fatores for necessária, retorna um objeto indicando a necessidade de autenticação de dois fatores.
 */
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const { email, password, code } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email não existe' }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    )

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )

    return { success: 'Email de confirmação enviado' }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)

      if (!twoFactorToken) {
        return { error: 'Código inválido' }
      }

      if (twoFactorToken.token !== code) {
        return { error: 'Código inválido' }
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date()

      if (hasExpired) {
        return { error: 'Código expirado' }
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      })

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      )

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        })
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      })
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token)

      return { twoFactor: true }
    }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Credenciais inválidas' }
        default:
          return { error: 'Algo deu errado' }
      }
    }

    throw error
  }
}
