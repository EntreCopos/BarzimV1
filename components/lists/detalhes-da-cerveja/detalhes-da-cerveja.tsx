
import styles from './detalhes-cervejas.module.css';

interface DetalhesCervejaProps {
  id: number;
}

interface BeerDetails {
  valorIBU: number;
  teorAlcoolico: string;
  corpo: string;
  temperaturaIdeal: string;
}

const detalhesCervejaFicticia: Record<number, BeerDetails> = {
  1: {
    valorIBU: 30,
    teorAlcoolico: '5%',
    corpo: 'Médio',
    temperaturaIdeal: '8-10°C',
  }
};

const DetalhesCerveja: React.FC<DetalhesCervejaProps> = ({ id }) => {
  const detalhes = detalhesCervejaFicticia[id];

  if (!detalhes) {
    return <div>Cerveja não encontrada</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detalhes da Cerveja</h2>
      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span>Valor IBU:</span>
          <span className={styles.data}>{detalhes.valorIBU}</span>
        </div>
        <div className={styles.detailRow}>
          <span>Teor Alcoólico:</span>
          <span className={styles.data}>{detalhes.teorAlcoolico}</span>
        </div>
        <div className={styles.detailRow}>
          <span>Corpo:</span>
          <span className={styles.data}>{detalhes.corpo}</span>
        </div>
        <div className={styles.detailRow}>
          <span>Temperatura Ideal:</span>
          <span className={styles.data}>{detalhes.temperaturaIdeal}</span>
        </div>
      </div>
    </div>
  );
};

export default DetalhesCerveja;
