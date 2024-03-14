import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { PiBeerBottleFill } from 'react-icons/pi'

import styles from './menu.module.css'
import { MdSettings } from 'react-icons/md'
import { Button } from '../ui/button'

export const BottomMenu = ({ currUser }: { currUser: string }) => {
  const textSize = { fontSize: '10px' }

  return (
    <>
      <section
        className={cn(
          styles.mobileMenu,
          'sticky bottom-0 flex w-full items-center justify-center bg-[#141414]/90 backdrop-blur-md md:hidden'
        )}
      >
        <ul
          className={cn(
            'flex w-full items-center justify-around text-yellow-barzim'
          )}
        >
          <li title="Meu Perfil" className="text-center">
            <Link href={'/usuarios/' + currUser}>
              <div className="flex flex-col items-center gap-1">
                <FaUserCircle size={24} />
                <p style={textSize}>Meu Perfil</p>
              </div>
            </Link>
          </li>
          <li title="Usuários" className="text-center">
            <Link href={'/usuarios'}>
              <div className="flex flex-col items-center gap-1">
                <FaUsers size={24} />
                <p style={textSize}>Usuários</p>
              </div>
            </Link>
          </li>
          <li title="Cervejas" className="text-center">
            <Link href={'/cervejas'}>
              <div className="flex flex-col items-center gap-1">
                <PiBeerBottleFill size={24} />
                <p style={textSize}>Cervejas</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
      <section className={cn('justify-center pl-10 pt-10', styles.desktopMenu)}>
        <ul className={cn('flex flex-col gap-6 py-8 text-lg')}>
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
    </>
  )
}
