import Link from 'next/link'

interface ReviewHeaderProps {
  userName: string
  beerName: string
  beerId?: number | boolean
}

const ReviewHeader: React.FC<ReviewHeaderProps> = ({
  userName,
  beerName,
  beerId = false,
}) => {
  return (
    <div className="font-bold">
      <p>
        <Link href={`/usuarios/${userName}`}>
          <span className="text-yellow-barzim">{`@${userName}`}</span>
        </Link>
        {/* <span className="font-normal text-secondary-foreground/60">
          {' '}
          avaliou{' '}
        </span>
        {beerId && (
          <Link href={`/cervejas/${beerId}`}>
            <span className="text-yellow-barzim">{beerName}</span>
          </Link>
        )}
        {!beerId && <span>{beerName}</span>} */}
      </p>
    </div>
  )
}

export default ReviewHeader
