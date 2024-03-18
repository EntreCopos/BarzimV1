import { type CervejaDetails } from '@/data/data'
import styles from './detalhes-cervejas.module.css'
import { cn } from '@/lib/utils'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import { type Cerveja } from '@prisma/client'

const DetalhesCerveja: React.FC<{ cerveja: Cerveja }> = ({ cerveja }) => {
  const cervejaDetails: CervejaDetails = {
    teorAlcoolico: {
      key: 'Teor Alcoólico',
      value: cerveja?.teorAlcoolico,
    },
    tempIdeal: {
      key: 'Temperatura Ideal',
      value: cerveja?.tempIdeal,
    },
    valorIBU: {
      key: 'Valor IBU',
      value: cerveja?.valorIBU,
    },
    corpo: {
      key: 'Corpo',
      value: cerveja?.corpo,
    },
  }
  return (
    <div className="px-8 text-sm text-secondary-foreground">
      <SectionTitle variant="small" title="Detalhes" />
      <div className={styles.details}>
        {Object.entries(cervejaDetails).map(
          ([_, { key: attrKey, value }]): JSX.Element | null => {
            return value ? (
              <div key={attrKey} className={styles.detailRow}>
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
