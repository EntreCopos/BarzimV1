import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { PiBeerBottleFill } from 'react-icons/pi'

import styles from './menu.module.css'
import { MdSettings } from 'react-icons/md'
import { Button } from '../ui/button'

export const SideMenu = ({ currUser }: { currUser: string }) => {
  return (
    <section className={cn('', styles.desktopMenu)}>
      <ul className={cn('flex flex-col gap-4 py-6 text-lg')}>
        <li title="Meu Perfil" className="text-center">
          <Link href={'/usuarios/' + currUser}>
            <Button
              className="flex w-full justify-start gap-4 text-left"
              variant={'ghost'}
            >
              <FaUserCircle size={24} />
              <p>Meu Perfil</p>
            </Button>
          </Link>
        </li>
        <li title="Usuários" className="text-center">
          <Link href={'/usuarios'}>
            <Button
              className="flex w-full justify-start gap-4 text-left"
              variant={'ghost'}
            >
              <FaUsers size={24} />
              <p>Usuários</p>
            </Button>
          </Link>
        </li>
        <li title="Cervejas" className="text-center">
          <Link href={'/cervejas'}>
            <Button
              className="flex w-full justify-start gap-4 text-left"
              variant={'ghost'}
            >
              <PiBeerBottleFill size={24} />
              <p>Cervejas</p>
            </Button>
          </Link>
        </li>
        <li title="Configurações" className="text-center">
          <Link href={'/config'}>
            <Button
              className="flex w-full justify-start gap-4 text-left"
              variant={'ghost'}
            >
              <MdSettings size={24} />
              <p>Configurações</p>
            </Button>
          </Link>
        </li>
      </ul>
    </section>
  )
}
