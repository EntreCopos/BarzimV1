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
        'sticky bottom-0 w-full bg-[#3b3b3b]/90 px-10 py-6 backdrop-blur-md'
      )}
    >
      <ul
        className={cn(
          'flex items-center justify-between gap-4 pb-2 text-4xl text-yellow-barzim'
        )}
      >
        <li title="Minha Geladeira">
          <Link href={'/usuarios/' + currUser}>
            <BiSolidFridge />
          </Link>
        </li>
        <li title="Usuários">
          <Link href={'/usuarios'}>
            <PiUsersFourFill />
          </Link>
        </li>
        <li title="Cervejas">
          <Link href={'/cervejas'}>
            <PiBeerBottleFill />
          </Link>
        </li>
        <li title="Configurações">
          <Link href={'/config'}>
            <MdSettings />
          </Link>
        </li>
      </ul>
    </section>
  )
}
