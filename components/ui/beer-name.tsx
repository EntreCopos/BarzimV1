import { Roboto } from 'next/font/google'
const font = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
})

interface BeerProps {
    cerveja: {
        nomeCerveja: string;
        tipoCerveja: string;
    }
}

const normalizeTitleCase = (beer: string) => {
    return beer.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
        return match.toUpperCase()
    })
}

export const BeerName: React.FC<BeerProps> = ({ cerveja }) => {
    const { nomeCerveja, tipoCerveja } = cerveja

    const nomeCervejaNormalizado = normalizeTitleCase(nomeCerveja)
    const tipoCervejaNormalizado = normalizeTitleCase(tipoCerveja)

    return (
        <div className={`text-marfim-barzim ${font.className}`}>
            <p className="text-[12px] opacity-60">{tipoCervejaNormalizado}</p>
            <p className='font-medium'>{nomeCervejaNormalizado}</p>
        </div>
    )
}