'use client'

import { signIn } from 'next-auth/react'
import { FaDiscord, FaGithub, FaGoogle } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const signInWith = (provider: 'google' | 'github' | 'discord' | 'apple') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="pt-4 text-center text-sm text-[#FFFEEF]/60">
        <p>ou entre com um desses serviços</p>
      </div>

      <div className="flex w-full items-center justify-center gap-x-2 px-6">
        <Button
          className="w-full border border-b-4 border-stone-600 bg-stone-300 p-6 text-stone-900 hover:border-b hover:bg-stone-400"
          onClick={() => signInWith('google')}
        >
          <FaGoogle className="h-5 w-5" />
        </Button>
        <Button
          className="w-full border border-b-4 border-stone-600 bg-stone-300 p-6 text-stone-900 hover:border-b hover:bg-stone-400"
          onClick={() => signInWith('discord')}
        >
          <FaDiscord className="h-5 w-5" />
        </Button>
        <Button
          className="w-full border border-b-4 border-stone-600 bg-stone-300 p-6 text-stone-900 hover:border-b hover:bg-stone-400"
          onClick={() => signInWith('github')}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
