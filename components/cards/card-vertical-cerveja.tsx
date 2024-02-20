// import beerData from '@/data/cervejas-mock.json'
// import { JsonObject } from "@prisma/client/runtime/library"
import Image from 'next/image'
import { BeerName } from '../titles/beer-name'

interface CardVertCervejaProps {
  children: React.ReactNode
  imagem: string
  nomeCerveja: string
}

export const CardVertCerveja: React.FC<CardVertCervejaProps> = ({
  imagem,
  nomeCerveja,
  children,
}) => {
  const novidade = true

  return (
    <div style={{height: '100%'}} className="cursor-pointer rounded-b-xl rounded-t-xl border-[1px] border-stroke-cervejas transition-all duration-200 hover:scale-101">
      <div style={{minHeight: '60px'}} className="relative flex w-full flex-col items-center rounded-t-lg bg-stroke-cervejas p-2">
        {novidade && (
          <span className="text-black-500 absolute left-0 top-0 rounded-ee-lg rounded-tl-lg bg-yellow-barzim p-1 text-xs font-medium">
            Novidade
          </span>
        )}
        <Image
          src={imagem}
          width={60}
          height={60}
          alt={nomeCerveja}
          // className="pb-1"
        />
      </div>
      <div style={{padding: '1rem .5rem'}}>
        {children}
      </div>
    </div>
  )
}
