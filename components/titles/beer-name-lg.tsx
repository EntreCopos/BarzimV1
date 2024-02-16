import { getThemeByVariant, normalizeTitleCase, type BeerProps } from "./beer-name"

export const BeerNameLarge: React.FC<BeerProps> = ({ cerveja, variant }) => {
    const { nomeCerveja, tipoCerveja } = cerveja

    const nomeCervejaNormalizado = normalizeTitleCase(nomeCerveja)
    const tipoCervejaNormalizado = normalizeTitleCase(tipoCerveja)

    return (
        <div className={`${getThemeByVariant(variant)} text-marfim-barzim text-left p-2`}>
            <p className="text-base opacity-60">{tipoCervejaNormalizado}</p>
            <p className='font-semibold text-3xl'>{nomeCervejaNormalizado}</p>
        </div>
    )
}