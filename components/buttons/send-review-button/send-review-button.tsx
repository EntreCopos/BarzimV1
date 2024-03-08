import styles from './send-review-button.module.css';

const SendReviewButton: React.FC<({isSubmitting: boolean, onClick: () => Promise<void>})> = ({isSubmitting, onClick}) => {
  return (
    <div className={styles.buttonContainer}>
      <button disabled={isSubmitting} onClick={onClick} className={styles.button}>
        {isSubmitting ? 'Enviando...' : 'Avaliar'}
      </button>
    </div>
  );
};

export default SendReviewButton;
