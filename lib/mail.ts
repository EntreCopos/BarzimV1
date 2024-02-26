import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

/**
 * Envia um email com o token de autenticação de dois fatores para o endereço de email especificado.
 * @param {string} email - O endereço de email do destinatário.
 * @param {string} token - O token de autenticação de dois fatores.
 * @returns {Promise<void>} Uma promise que é resolvida quando o email é enviado com sucesso.
 */
export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2FA Code',
    html: `<p>Seu código 2FA: ${token}</p>`,
  })
}

/**
 * Envia um email de redefinição de senha para o endereço de email especificado.
 * @param {string} email - O endereço de email do destinatário.
 * @param {string} token - O token de redefinição de senha.
 * @returns {Promise<void>} Uma promise que é resolvida quando o email é enviado com sucesso.
 */
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Resetar sua senha',
    html: `<p>Clique <a href="${resetLink}">aqui</a> para resetar a senha.</p>`,
  })
}

/**
 * Envia um email de verificação de email para o endereço de email especificado.
 * @param {string} email - O endereço de email do destinatário.
 * @param {string} token - O token de verificação de email.
 * @returns {Promise<void>} Uma promise que é resolvida quando o email é enviado com sucesso.
 */
export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Confirme seu email',
    html: `<p>Clique <a href="${confirmLink}">aqui</a> para confirmar o email.</p>`,
  })
}
