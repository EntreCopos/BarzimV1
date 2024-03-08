import { normalizeTitleCase } from '@/lib/utils'
import { getThemeByVariant, type BeerProps } from './beer-name'

export const BeerNameLarge: React.FC<BeerProps> = ({ cerveja, variant }) => {
  const { nomeCerveja, tipoCerveja } = cerveja

  const nomeCervejaNormalizado = normalizeTitleCase(nomeCerveja)
  const tipoCervejaNormalizado = normalizeTitleCase(tipoCerveja)

  return (
    <div
      className={`${getThemeByVariant(variant)} text-left text-marfim-barzim`}
    >
      <p className="text-base opacity-60">{tipoCervejaNormalizado}</p>
      <p className="text-2xl font-semibold">{nomeCervejaNormalizado}</p>
    </div>
  )
}
