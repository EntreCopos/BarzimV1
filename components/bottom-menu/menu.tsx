import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
import { MdSettings } from 'react-icons/md'
import { PiUsersFourFill } from 'react-icons/pi'
import { RiBeerFill } from "react-icons/ri";

export const BottomMenu = ({ currUser }: { currUser: string }) => {
  const textSize = { fontSize: '10px' };

  return (
    <section
      style={{ zIndex: 20, padding: '0.5rem' }}
      className={cn(
        'sticky bottom-0 w-full bg-[#141414]/90 backdrop-blur-md flex items-center justify-center'
      )}
    >
      <ul
        className={cn(
          'flex items-center justify-around gap-6 text-yellow-barzim'
        )}
      >
        <li title="Meu Perfil" className="text-center">
          <Link href={'/usuarios/' + currUser}>
            <div className="flex flex-col items-center gap-1">
              <FaRegUserCircle size={24} />
              <p style={textSize}>Meu Perfil</p>
            </div>
          </Link>
        </li>
        <li title="Usuários" className="text-center">
          <Link href={'/usuarios'}>
            <div className="flex flex-col items-center gap-1">
              <PiUsersFourFill size={24} />
              <p style={textSize}>Usuários</p>
            </div>
          </Link>
        </li>
        <li title="Cervejas" className="text-center">
          <Link href={'/cervejas'}>
            <div className="flex flex-col items-center gap-1">
              <RiBeerFill size={24} />
              <p style={textSize}>Cervejas</p>
            </div>
          </Link>
        </li>
        <li title="Configurações" className="text-center">
          <Link href={'/config'}>
            <div className="flex flex-col items-center gap-1">
              <MdSettings size={24} />
              <p style={textSize}>Configurações</p>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};
