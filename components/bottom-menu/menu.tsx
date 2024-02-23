import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
import { MdSettings } from 'react-icons/md'
import { PiBeerBottleFill } from 'react-icons/pi'
import { PiUsersFourFill } from 'react-icons/pi'

export const BottomMenu = ({ currUser }: { currUser: string }) => {
  return (
    <section
      style={{ zIndex: 20 }}
      className={cn(
        'sticky bottom-0 w-full bg-[#141414]/90 px-12 py-4 backdrop-blur-md'
      )}
    >
      <ul
        className={cn(
          'flex items-center justify-between gap-3 text-3xl text-yellow-barzim'
        )}
      >
        <li title="Meu Perfil" className="text-center">
          <Link href={'/usuarios/' + currUser}>
            <div className="flex flex-col items-center gap-1">
              <FaRegUserCircle size={32} />
              <p className="text-xs">Meu Perfil</p>
            </div>
          </Link>
        </li>
        <li title="Usuários" className="text-center">
          <Link href={'/usuarios'}>
            <div className="flex flex-col items-center gap-1">
              <PiUsersFourFill size={32} />
              <p className="text-xs">Usuários</p>
            </div>
          </Link>
        </li>
        <li title="Cervejas" className="text-center">
          <Link href={'/cervejas'}>
            <div className="flex flex-col items-center gap-1">
              <PiBeerBottleFill size={32} />
              <p className="text-xs">Cervejas</p>
            </div>
          </Link>
        </li>
        <li title="Configurações" className="text-center">
          <Link href={'/config'}>
            <div className="flex flex-col items-center gap-1">
              <MdSettings size={32} />
              <p className="text-xs">Configurações</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  )
}
