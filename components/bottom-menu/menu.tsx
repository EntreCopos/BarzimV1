import { cn } from '@/lib/utils'
import Link from 'next/link'
import { BiSolidFridge } from 'react-icons/bi'
import { MdSettings } from 'react-icons/md'

import { PiBeerBottleFill } from 'react-icons/pi'
import { PiUsersFourFill } from 'react-icons/pi'

export const BottomMenu = ({ currUser }: { currUser: string }) => {
  return (
    <section
      style={{ zIndex: 20 }}
      className={cn(
        'sticky bottom-0 w-full bg-zinc-800/90 px-12 py-4 backdrop-blur-md'
      )}
    >
      <ul
        className={cn(
          'flex items-center justify-between gap-3 pb-4 text-3xl text-yellow-barzim'
        )}
      >
        <li
          title="Minha Geladeira"
          className={cn('flex items-center justify-center')}
        >
          <Link href={'/usuarios/' + currUser}>
            <BiSolidFridge />
            <span className="text-xs">Minha Geladeira</span>
          </Link>
        </li>
        <li title="Usuários" className={cn('flex items-center justify-center')}>
          <Link href={'/usuarios'}>
            <PiUsersFourFill />
            <span className={cn('text-[0.8rem]')}>Barzeiros</span>
          </Link>
        </li>
        <li title="Cervejas" className={cn('flex items-center justify-center')}>
          <Link href={'/cervejas'}>
            <PiBeerBottleFill />
            <span className={cn('text-[0.8rem]')}>Cervejas</span>
          </Link>
        </li>
        <li title="Configurações" className={cn('flex justify-center')}>
          <Link href={'/config'}>
            <MdSettings />
            <span className={cn('text-[0.8rem]')}>Configurações</span>
          </Link>
        </li>
      </ul>
    </section>
  )
}
