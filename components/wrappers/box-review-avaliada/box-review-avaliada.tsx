import CoposReviews from '@/components/copos/copos-review';
import styles from './box-review-avaliada.module.css'
import Image, { type StaticImageData } from 'next/image';

interface BoxReviewAvaliadaProps {
    imageUrl: string | StaticImageData;
    beerName: string
}

const BoxReviewAvaliada: React.FC<BoxReviewAvaliadaProps> = ({ imageUrl, beerName }) => {
    return (
        <div className={styles.boxReviewAvaliadaContainer}>
            <div className={styles.dragBar}></div>
            <Image src={imageUrl} alt="Imagem" className={styles.image} width={140} height={100} />
            <h2 className={styles.title}>Parabéns</h2>
            <p className={styles.avaliouText}>Você avaliou <span className={styles.cervejaText}> {beerName}</span></p>
            <CoposReviews nota={2} />
            <p className={styles.finalText}>
                Agora o mundo todo sabe como você se sente. Está feliz agora, hein?
            </p>
        </div>
    );
};

export default BoxReviewAvaliada;
