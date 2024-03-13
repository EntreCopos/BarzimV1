import Link from 'next/link'
import styles from './review-header.module.css'

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
    <div className={styles.reviewHeader}>
      <p>
        <Link href={`/usuarios/${userName}`}>
          <span className={styles.userName}>{`@${userName}`}</span>
        </Link>
        <span className="text-secondary-foreground opacity-60"> avaliou </span>
        {beerId && (
          <Link href={`/cervejas/${beerId}`}>
            <span className={styles.beerName}>{beerName}</span>
          </Link>
        )}
        {!beerId && <span className={styles.beerName}>{beerName}</span>}
      </p>
    </div>
  )
}

export default ReviewHeader
