import styles from './stars-mini.module.css'

interface StarReviewsProps {
  nota: number
}

const StarReviewsMini: React.FC<StarReviewsProps> = ({ nota }) => {
  return (
    <div>
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`${styles.star} ${index < nota ? styles.gold : ''}`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  )
}

export default StarReviewsMini
