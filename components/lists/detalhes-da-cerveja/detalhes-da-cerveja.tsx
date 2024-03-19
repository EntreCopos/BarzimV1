import { type TypeObjectCerveja, type CervejaDetails } from '@/data/data'
import SectionTitle from '@/components/dashboard/title-sections/title-section'

const DetalhesCerveja: React.FC<{ cerveja: TypeObjectCerveja }> = ({
  cerveja,
}) => {
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
      <div className="flex flex-col gap-2">
        {Object.entries(cervejaDetails).map(
          ([_, { key: attrKey, value }]): JSX.Element | null => {
            return value ? (
              <div key={attrKey} className="flex w-full justify-between">
                <span>{attrKey}</span>
                <span className="font-bold text-yellow-barzim">{value}</span>
              </div>
            ) : (
              <></>
            )
          }
        )}
      </div>
    </div>
  )
}

export default DetalhesCerveja
