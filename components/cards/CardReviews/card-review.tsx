import StarReviewsMini from "@/components/stars/startsMini/stars-mini";
import { BeerName } from "@/components/titles/beer-name";
import { BeerImage } from "@/components/wrappers/beer-image-wrapper";
import ArrowImage from "../../assets/icons/arrow-right.png";
import Image, { type StaticImageData } from "next/image";
import styles from './card-review.module.css';

interface CardReviewsProps {
  evaluation: {
    nota: number;
    caminhoImage: string | StaticImageData | null;
    tipoCerveja: string;
    nomeCerveja: string;
    id: string;
  };
}

const CardReviews: React.FC<CardReviewsProps> = ({ evaluation }) => {
  const { nota, caminhoImage, tipoCerveja, nomeCerveja, id } = evaluation;

  return (
    <div className={styles.cardReviewsContainer}>
      <div className={styles.imageContainer}>
        {caminhoImage ? (
          <BeerImage src={caminhoImage} width={100} />
        ) : (
          <span className={styles.placeholderText}>{nomeCerveja}</span>
        )}
      </div>
      <div className={styles.textContainer}>
        <StarReviewsMini nota={nota} />
        <BeerName variant="dark-mode" cerveja={{ nomeCerveja, tipoCerveja }} />
      </div>
      <Image src={ArrowImage} alt={""} className={styles.arrowIcon} />
    </div>
  );
};

export default CardReviews;
