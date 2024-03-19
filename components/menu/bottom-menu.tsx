import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa6'
import { PiBeerBottleFill } from 'react-icons/pi'

export const BottomMenu = ({ currUser }: { currUser: string }) => {
  const textSize = { fontSize: '10px' }

  return (
    <section className="sticky bottom-0 z-10 flex w-full items-center justify-center bg-[#141414]/90 p-2 backdrop-blur-md md:hidden">
      <ul className="flex w-full items-center justify-around text-yellow-barzim">
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
  )
}
