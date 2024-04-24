import NextAuth from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'

import authConfig from '@/auth.config'
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from '@/routes'

const { auth } = NextAuth(authConfig)

type ReqWithAuth = NextRequest & {
  auth: unknown
}
export default auth((req: ReqWithAuth) => {
  //console.log('REQ Auth Passando pelo Middleware contem session ::::', req.auth)

  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isAgeCheckRoute = nextUrl.pathname == '/auth/age-verification'
  const isRestricaoRoute = nextUrl.pathname == '/restricao-idade'
  const isOBarzimRedirect = nextUrl.pathname == '/obarzim'

  const hasDoB = cookies().has('dateOfBirth')

  if (isApiAuthRoute) {
    return null
  }

  if (isOBarzimRedirect) {
    return Response.redirect('https://dev.barzim.tech/')
  }

  if (
    (!hasDoB && isAgeCheckRoute) ||
    (!hasDoB && isRestricaoRoute) ||
    (!hasDoB && isLoggedIn)
  ) {
    return null
  }

  if (!hasDoB && !isLoggedIn) {
    const response = NextResponse.redirect(
      new URL('/auth/age-verification', nextUrl)
    )
    if (nextUrl.pathname !== '/' && !isAuthRoute) {
      response.cookies.set('TARGET_LOGIN_REDIRECT', nextUrl.basePath, {
        value: nextUrl.pathname,
        expires: Date.now() + 10 * 60 * 1000,
      })
    }
    return response
  }

  if (isAgeCheckRoute && hasDoB) {
    return Response.redirect(new URL('/', nextUrl))
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      const target = cookies().get('TARGET_LOGIN_REDIRECT')?.value

      const redirect = target ?? DEFAULT_LOGIN_REDIRECT
      return Response.redirect(new URL(redirect, nextUrl))
    }
    return null
  }

  if (!isLoggedIn && !isPublicRoute) {
    const response = NextResponse.redirect(new URL('/auth/login', nextUrl))

    if (nextUrl.pathname !== DEFAULT_LOGIN_REDIRECT) {
      response.cookies.set('TARGET_LOGIN_REDIRECT', nextUrl.basePath, {
        value: nextUrl.pathname,
        expires: Date.now() + 10 * 60 * 1000,
      })
    }

    return response
  }

  return null
})

// opcionalmente não chama o middleware nesses caminhos abaixo
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
