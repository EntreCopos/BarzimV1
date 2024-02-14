
import styles from './review-header.module.css';

interface ReviewHeaderProps {
  userName: string;
  beerName: string;
}

const ReviewHeader: React.FC<ReviewHeaderProps> = ({ userName, beerName }) => {
  return (
    <div className={styles.reviewHeader}>
      <p>
        <span className={styles.userName}>{`@${userName}`}</span>
        <span className={styles.avaliedText}> avaliou </span>
        <span className={styles.beerName}>{beerName}</span>
      </p>
    </div>
  );
};

export default ReviewHeader;
