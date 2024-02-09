import NextAuth from 'next-auth'
import { cookies } from 'next/headers'

import authConfig from '@/auth.config'
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  //console.log('REQ Auth Passando pelo Middleware contem session ::::', req.auth)

  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isAgeCheckRoute = nextUrl.pathname == '/age-verification'

  const dob = cookies().get('dateOfBirth')
  const isDob = !!dob

  if (isApiAuthRoute) {
    return null
  }

  if ((!isDob && isAgeCheckRoute) || (!isDob && isLoggedIn)) {
    return null
  }

  if (!isDob && !isLoggedIn) {
    return Response.redirect(new URL('/age-verification', nextUrl))
  }

  if (isAgeCheckRoute && isDob) {
    return Response.redirect(new URL('/', nextUrl))
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return null
})

// opcionalmente não chama o middleware nesses caminhos abaixo
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
