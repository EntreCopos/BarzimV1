'use client'

import { signIn } from 'next-auth/react'
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const Social = () => {
  const onClick = (provider: 'google' | 'github' | 'discord' | 'apple') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full rounded-2xl bg-[#FFFEEF] bg-opacity-60 border-none"
        variant="outline"
        onClick={() => onClick('google')}
      >
        <FaGoogle className="h-5 w-5 text-[#474747]" />
      </Button>
      <Button
        size="lg"
        className="w-full rounded-2xl bg-[#FFFEEF] bg-opacity-60 border-none"
        variant="outline"
        onClick={() => onClick('discord')}
      >
        <FaDiscord className="h-5 w-5 text-[#474747]" />
      </Button>
      <Button
        size="lg"
        className="w-full rounded-2xl bg-[#FFFEEF] bg-opacity-60 border-none"
        variant="outline"
        onClick={() => onClick('github')}
      >
        <FaGithub className="h-5 w-5 text-[#474747]" />
      </Button>
    </div>
  )
}
