import Image, { type StaticImageData } from 'next/image';
import styles from './beer-card.module.css';

interface BeerCardProps {
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
}

const BeerCard: React.FC<BeerCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.beerCard}>
      <Image src={imageUrl} alt="Beer Image" className={styles.beerImage} />
      <div className={styles.beerTexts}>
        <h2 className={styles.beerTitle}>{title}</h2>
        <p className={styles.beerDescription}>{description}</p>
        <div className={styles.emojis}>
          <span>❤️</span>
          <span>➕</span>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
