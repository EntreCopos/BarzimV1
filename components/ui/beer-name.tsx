import { Roboto } from 'next/font/google'
const font = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
})

interface BeerProps {
    cerveja: {
        nomeCerveja: string;
        tipoCerveja: string;
    };
}

export const BeerName: React.FC<BeerProps> = ({ cerveja }) => {
    const { nomeCerveja, tipoCerveja } = cerveja

    return (
        <div className={`my-8 text-marfim-barzim ${font.className}`}>
            <p className="text-[12px] opacity-60">{cerveja.nomeCerveja}</p>
            <p className='font-medium'>{cerveja.tipoCerveja}</p>
        </div>
    )
}