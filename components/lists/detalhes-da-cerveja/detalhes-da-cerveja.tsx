import styles from './detalhes-cervejas.module.css'

interface DetalhesCervejaProps {
  id: number
}

interface BeerDetails {
  valorIBU: number
  teorAlcoolico: string
  corpo: string
  temperaturaIdeal: string
}

interface CervejaDetails {
  teorAlcoolico: { key: string; value: number | null }
  tempIdeal: { key: string; value: string | null }
  valorIBU: { key: string; value: number | null }
  corpo: { key: string; value: string | null }
}

const DetalhesCerveja: React.FC<{cervejaDetails: CervejaDetails}> = ({ cervejaDetails }) => {
  if (!cervejaDetails) {
    return <div>Cerveja não encontrada</div>
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Detalhes da Cerveja</h2>
      <div className={styles.details}>
        {Object.entries(cervejaDetails).map(
          ([key, { key: attrKey, value }]) => {
            console.log(key, value)

            //eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return (
              value && (
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                  className={styles.detailRow}
                >
                  <span>{attrKey}</span>
                  <span className={styles.data}>{value}</span>
                </div>
              )
            )
          }
        )}
      </div>
    </div>
  )
}

export default DetalhesCerveja
