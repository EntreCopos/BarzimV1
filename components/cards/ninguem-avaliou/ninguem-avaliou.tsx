
import Image from 'next/image';
import styles from './ninguem-avaliou.module.css';
import imagemNinguemAvaliou from '../../assets/icons/wrapper icon.png'

interface NinguemAvaliouProps {
  cervejaId: string;
}

const NinguemAvaliou: React.FC<NinguemAvaliouProps> = ({ cervejaId }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imagemNinguemAvaliou}
        alt="Imagem da Cerveja"
        className={`${styles.image} mx-auto`}
      />

      <p className={styles.text}>
        Parece que ninguém avaliou essa cerveja ainda.
      </p>

      <button
        className={styles.button}
      >
        Seja o Primeiro
      </button>
    </div>
  );
};

export default NinguemAvaliou;
