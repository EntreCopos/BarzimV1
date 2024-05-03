'use client'

import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/auth/login')}
      className="cursor-pointer"
    >
      {children}
    </button>
  )
}
