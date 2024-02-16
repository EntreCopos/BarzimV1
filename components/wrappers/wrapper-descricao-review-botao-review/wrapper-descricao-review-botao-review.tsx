
import { TextareaReview } from '@/components/ui/textareaReview';
import styles from './wrapper-descricao-review-botao-review.module.css'; // Certifique-se de criar o arquivo de módulo CSS
import SendReviewButton from '@/components/buttons/send-review-button/send-review-button';

const WrapperDescricaoReviewBotaoReview: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <TextareaReview/>
      <SendReviewButton />
    </div>
  );
};

export default WrapperDescricaoReviewBotaoReview;
