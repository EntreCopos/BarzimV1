import { type CervejaDetails } from '@/data/data'
import styles from './detalhes-cervejas.module.css'

const DetalhesCerveja: React.FC<{ cervejaDetails: CervejaDetails }> = ({
  cervejaDetails,
}) => {
  if (!cervejaDetails) {
    return <div>Detalhes não Encontrados</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detalhes da Cerveja</h2>
      <div className={styles.details}>
        {Object.entries(cervejaDetails).map(
          ([_, { key: attrKey, value }]): JSX.Element | null => {
            return value ? (
              <div className={styles.detailRow}>
                <span>{attrKey}</span>
                <span className={styles.data}>{value}</span>
              </div>
            ) : null //aqui talvez criar algo para caso o objeto details venha, mas venha vazio
          }
        )}
      </div>
    </div>
  )
}

export default DetalhesCerveja
