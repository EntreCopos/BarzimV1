// import beerData from '@/data/cervejas-mock.json'
// import { JsonObject } from "@prisma/client/runtime/library"
import Image from 'next/image'
import { BeerName } from '../titles/beer-name'
import { haMenosDeDuasSemanas } from '@/lib/utils'
import { Novidade } from '../badges/card-badges/novidade'

interface CardVertCervejaProps {
  children: React.ReactNode
  imagem: string
  nomeCerveja: string
  createdAt: Date
}
export const CardVertCerveja: React.FC<CardVertCervejaProps> = ({
  imagem,
  nomeCerveja,
  children,
  createdAt,
}) => {
  const novidade = haMenosDeDuasSemanas(createdAt)

  return (
    <div
      style={{ height: '100%' }}
      className="cursor-pointer rounded-b-xl rounded-t-xl border-[1px] border-stroke-cervejas transition-all duration-200"
    >
      <div className="relative flex w-full flex-col items-center rounded-t-lg bg-stroke-cervejas p-2">
        {novidade && <Novidade />}
        <div
          style={{
            position: 'relative',
            width: '150px',
            aspectRatio: '1/1',
            objectFit: 'cover',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 0,
          }}
        >
          <Image
            style={{ objectFit: 'contain', padding: '.6rem' }}
            src={imagem}
            fill={true}
            alt={nomeCerveja}
          />
        </div>
      </div>
      <div style={{ padding: '1rem', zIndex: 0 }}>{children}</div>
    </div>
  )
}
