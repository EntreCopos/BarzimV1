export interface BeerProps {
    cerveja: {
        nomeCerveja: string
        tipoCerveja: string
    }
    variant: 'light-mode' | 'dark-mode'
}

export const getThemeByVariant = (variant: BeerProps['variant']) => {
    switch (variant) {
        case 'light-mode':
            return 'text-black'
        case 'dark-mode':
            return 'text-marfim-barzim'
    }
}

export const normalizeTitleCase = (beer: string) => {
    return beer.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
        return match.toUpperCase()
    })
}

export const BeerName: React.FC<BeerProps> = ({ cerveja, variant }) => {
    const { nomeCerveja, tipoCerveja } = cerveja

    const nomeCervejaNormalizado = normalizeTitleCase(nomeCerveja)
    const tipoCervejaNormalizado = normalizeTitleCase(tipoCerveja)

    return (
        <div className={`${getThemeByVariant(variant)} text-left`}>
            <p className="text-[12px] opacity-60">{tipoCervejaNormalizado}</p>
            <p className='font-medium text-[20px]'>{nomeCervejaNormalizado}</p>
        </div>
    )
}