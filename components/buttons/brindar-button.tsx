import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'

export const BrindarButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Link style={{ display: 'contents' }} href={id + '/avaliar'}>
      <button className="flex items-center rounded-full bg-yellow-barzim px-3 text-sm font-medium text-[#141414] transition-all duration-300 hover:bg-[#f4c85a] sm:px-2 sm:text-xs">
        <FaEdit size={20} />
        <span className="p-1">Avaliar</span>
      </button>
    </Link>
  )
}
