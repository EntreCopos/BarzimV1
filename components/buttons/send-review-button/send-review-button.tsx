
import styles from './send-review-button.module.css';

const SendReviewButton: React.FC = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button}>
        Avaliar
      </button>
    </div>
  );
};

export default SendReviewButton;
