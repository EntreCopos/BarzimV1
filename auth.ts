import NextAuth from 'next-auth'
import { type UserRole } from '@prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { cookies as c } from 'next/headers'

import { db } from '@/lib/db'
import authConfig from '@/auth.config'
import { getUserById } from '@/data/user'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'
import { generateFromEmail, generateUsername } from 'unique-username-generator'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  events: {
    async linkAccount({ user }) {
      console.log('LINKING ACCOUNT HERE::')
      const dateOfBirth = c().get('dateOfBirth')
      const email = user?.email
      const username = !!email
        ? generateFromEmail(email, 3)
        : generateUsername('_', 3)

      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
          username,
          dateOfBirth: dateOfBirth?.value,
        },
      })
    },
    async createUser({ user }) {
      console.log('HERE IS THE USER BEING CRATED BY THE ADAPTER', user)
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // deixa o login via oauth passar sem verificação
      if (account?.provider !== 'credentials') return true

      const existingUser = await getUserById(user.id)

      // não deixa usuario logar sem verificar o email
      if (!existingUser?.emailVerified) return false

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        )

        if (!twoFactorConfirmation) return false

        // deleta o 2fa para o proximo login
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        })
      }

      return true
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      token.role = existingUser.role

      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
  adapter: PrismaAdapter(db),
  ...authConfig,
})
