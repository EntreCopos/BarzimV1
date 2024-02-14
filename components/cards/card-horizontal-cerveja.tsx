import beerData from '@/data/cervejas-mock.json'
import { JsonObject } from '@prisma/client/runtime/library'
import Image from 'next/image'
import { BeerName } from '../titles/beer-name'

interface CardHorizontalCervejaProps {
  children: React.ReactNode
  imagem: string
  nomeCerveja: string
}

export const CardHorizontalCerveja: React.FC<CardHorizontalCervejaProps> = ({
  children,
  nomeCerveja,
  imagem,
}) => {
  const novidade = true

  return (
    <div className="cursor-pointer rounded-lg border-[1px] overflow-hidden border-stroke-cervejas transition-all duration-200 hover:scale-[1.02]">
      <div className="h-30 relative m-0 flex w-96 items-center gap-3 p-0">
        <div className="flex w-5/12 items-center justify-center bg-gray-cards">
          {novidade && (
            <span className="text-black-500 absolute left-0 top-0 rounded-ee-lg bg-yellow-barzim p-1 text-xs font-medium">
              Novidade
            </span>
          )}
          <Image
            src={imagem}
            width={50}
            height={50}
            alt={nomeCerveja}
            className="pb-1"
          />
        </div>
        {children}
      </div>
    </div>
  )
}
