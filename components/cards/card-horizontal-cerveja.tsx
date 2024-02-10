import beerData from '@/data/cervejas-mock.json'
import { JsonObject } from "@prisma/client/runtime/library"
import Image from 'next/image'
import { BeerName } from "../titles/beer-name"
interface CardVertCervejaProps {
    nomeCerveja: string;
    novidade: boolean;
}

const imagemPadrao = 'https://res.cloudinary.com/dvprux49g/image/upload/v1707506581/yvfngsc2qlgddxqyzhhq.png'

export const CardHorizontalCerveja: React.FC<CardVertCervejaProps> = ({ nomeCerveja, novidade }) => {
    const cerveja = beerData.find((cerveja: JsonObject) => cerveja.nomeCerveja === nomeCerveja)

    if (!cerveja) {
        return <div className='text-white'>Cerveja não encontrada 🙁</div>
    }

    const imagem: string = cerveja.imagensProduto[0] || imagemPadrao

    return <div className='border-[1px] border-stroke-cervejas rounded-md hover:scale-105 transition-all duration-200 cursor-pointer'>
        <div className='w-96 h-30 p-0 m-0 flex items-center relative gap-3'>
            <div className="bg-stroke-cervejas w-5/12 flex justify-center items-center rounded-sm  ">
                {novidade && (
                    <span className="text-xs font-medium text-black-500 bg-yellow-barzim p-1 rounded-ee-lg rounded-tl-sm absolute top-0 left-0">Novidade</span>
                )}
                <Image
                    src={imagem}
                    width={48}
                    height={48}
                    alt={cerveja.nomeCerveja}
                    className='pb-1'
                />
            </div>
            <BeerName cerveja={cerveja} />
        </div>
    </div>
}