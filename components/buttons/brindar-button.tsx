import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'
import { Button } from '../ui/button'

export const BrindarButton: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Link href={id + '/avaliar'}>
      <Button variant="barzimPrimary">
        <FaEdit size={20} />
        Avaliar
      </Button>
    </Link>
  )
}
