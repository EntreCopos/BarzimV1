'use client'

import Link from 'next/link'
import { HiDotsVertical } from 'react-icons/hi'

import { Logo } from '@/components/logos/logo-barzim'
import Notifications from '@/components/notifications/notifications'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { SignOut } from '@/actions/sign-out'
import { useTheme } from 'next-themes'

const Nav: React.FC<{ userId: string; username: string }> = ({
  userId,
  username,
}) => {
  const router = useRouter()
  const { setTheme } = useTheme()

  return (
    <div className="fixed z-50 h-[70px] w-full max-w-[100vw] border-b-2 border-black/20 bg-yellow-barzim px-6 py-4 text-deep-black shadow-sutil-shadow ">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between">
        <Link href={'/dashboard'}>
          <Logo width={120} />
        </Link>
        <div className="flex items-end justify-between">
          <Notifications userId={userId} />
          <DropdownMenu>
            <DropdownMenuTrigger className="ring:ring-0 focus:ring-0 active:ring-0">
              <HiDotsVertical size={24} />
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{ zIndex: 99 }}>
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push('/usuarios/' + username)}
              >
                Meu Perfil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/config')}>
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem disabled>Listas (em breve)</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Tema Claro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Tema Escuro
              </DropdownMenuItem>
              {/* <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem> */}
              <DropdownMenuItem onClick={() => SignOut()}>
                Sair do Barzim
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

export default Nav
