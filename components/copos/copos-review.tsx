import Image from 'next/image';
import styles from './copos-review.module.css'; 
import imgBeerFull from '../assets/icons/beer-full.png'
import imgBeerEmpty from '../assets/icons/beer-empty.png'

interface ImageReviewsProps {
  nota: number;
}

const CoposReviews: React.FC<ImageReviewsProps> = ({ nota }) => {
  return (
    <div>
      <p className={styles.textNota}>Sua Nota</p>
      <div className={styles.imagesContainer}>
        {[...Array(5)].map((_, index) => (
          <Image
            key={index}
            src={index < nota ? imgBeerFull : imgBeerEmpty}
            alt="nota da cerveja"
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoposReviews;
