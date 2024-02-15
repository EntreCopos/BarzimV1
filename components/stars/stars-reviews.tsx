
import styles from './stars-review.module.css';

interface StarReviewsProps {
  nota: number;
}

const StarReviews: React.FC<StarReviewsProps> = ({ nota }) => {
  return (
    <div>
      <p className={styles.textBarzim}>Nota no Barzim</p>
      <div className={styles.starsContainer}>
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
  );
};

export default StarReviews;
