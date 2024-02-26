import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

import { db } from '@/lib/db'
import { getVerificationTokenByEmail } from '@/data/verificiation-token'
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'

/**
 * Gera um token de autenticação de dois fatores para o usuário com o email fornecido.
 * @param {string} email - O email do usuário para o qual o token está sendo gerado.
 * @returns {Promise<object>} Uma promessa que resolve com o objeto do token de autenticação de dois fatores gerado.
 */
export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getTwoFactorTokenByEmail(email)

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return twoFactorToken
}

/**
 * Gera um token de redefinição de senha para o usuário com o email fornecido.
 * @param {string} email - O email do usuário para o qual o token está sendo gerado.
 * @returns {Promise<object>} Uma promessa que resolve com o objeto do token de redefinição de senha gerado.
 */
export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id },
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return passwordResetToken
}

/**
 * Gera um token de verificação de email para o usuário com o email fornecido.
 * @param {string} email - O email do usuário para o qual o token está sendo gerado.
 * @returns {Promise<object>} Uma promessa que resolve com o objeto do token de verificação de email gerado.
 */
export const generateVerificationToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const verficationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return verficationToken
}
