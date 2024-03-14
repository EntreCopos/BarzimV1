import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import { Button } from '../ui/button'

export const BrindarButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Link href={id + '/avaliar'}>
      <Button size="barzimXl" variant="barzimPrimary">
        <FaEdit size={20} />
        <span className="p-1">Avaliar</span>
      </Button>
    </Link>
  )
}
// <button className="flex items-center rounded-full bg-yellow-barzim px-3 text-sm transition-all duration-300 hover:bg-[#f4c85a] sm:px-2 sm:text-xs">
