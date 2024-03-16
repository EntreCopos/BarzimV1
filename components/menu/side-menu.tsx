import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { PiBeerBottleFill } from 'react-icons/pi'
import { ImLab } from 'react-icons/im'
import { RiAdminFill } from 'react-icons/ri'

import styles from './menu.module.css'
import { MdSettings } from 'react-icons/md'
import { Button } from '../ui/button'
import { currentRole } from '@/lib/auth'

export const SideMenu = async ({ currUser }: { currUser: string }) => {
  const role = await currentRole()

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
        {role === 'ADMIN' && (
          <>
            <li title="Lab" className="text-center">
              <Link href={'/lab'}>
                <Button
                  className="flex w-full justify-start gap-4 text-left"
                  variant={'ghost'}
                >
                  <ImLab size={24} />
                  <p>Lab</p>
                </Button>
              </Link>
            </li>
            <li title="Admin" className="text-center">
              <Link href={'/admin'}>
                <Button
                  className="flex w-full justify-start gap-4 text-left"
                  variant={'ghost'}
                >
                  <RiAdminFill size={24} />
                  <p>Admin</p>
                </Button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </section>
  )
}
