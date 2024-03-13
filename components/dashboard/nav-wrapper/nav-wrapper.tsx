'use client'
import styles from './nav-wrapper.module.css'
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
import { signOut } from '@/auth'
import { SignOut } from '@/actions/sign-out'

const NavWrapper: React.FC<{ userId: string; username: string }> = ({
  userId,
  username,
}) => {
  const router = useRouter()
  return (
    <div className={styles.navWrapper}>
      <Link href={'/dashboard'}>
        <Logo width={120} />
      </Link>
      <div className={styles.icons}>
        <Notifications userId={userId} />
        <DropdownMenu>
          <DropdownMenuTrigger className="ring:ring-0 focus:ring-0 active:ring-0">
            <HiDotsVertical size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ zIndex: 9999 }}>
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
            <DropdownMenuItem onClick={() => SignOut()}>
              Sair do Barzim
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default NavWrapper
