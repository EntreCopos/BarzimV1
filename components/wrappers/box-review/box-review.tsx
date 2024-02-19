import ReviewTitle from "@/components/titles/review-title/review-title";
import WrapperReviewImage from "../wrapper-review-image/wrapper-review-image";
import ImageSlotsWrapper from "@/components/review/review-image/imageSlotsWrapper";
import WrapperDescricaoReviewBotaoReview from "../wrapper-descricao-review-botao-review/wrapper-descricao-review-botao-review";
import styles from './box-review.module.css'

interface BoxReviewProps {
  beerName: string;
  urlsImagens: string[];
}

const BoxReview: React.FC<BoxReviewProps> = ({ beerName, urlsImagens }) => {
  return (
    <div className={styles.boxReviewContainer}>
      <div className={styles.dragBar}></div>
      <ReviewTitle beerName={beerName} />
      <WrapperReviewImage />
      <ImageSlotsWrapper imageUrls={urlsImagens} />
      <WrapperDescricaoReviewBotaoReview />
    </div>
  );
};

export default BoxReview;