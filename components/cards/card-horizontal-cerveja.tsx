import { haMenosDeDuasSemanas } from '@/lib/utils'
import Image from 'next/image'
import { Novidade } from '../badges/card-badges/novidade'

interface CardHorizontalCervejaProps {
  children: React.ReactNode
  imagem: string
  nomeCerveja: string
  createdAt: Date
}

export const CardHorizontalCerveja: React.FC<CardHorizontalCervejaProps> = ({
  children,
  nomeCerveja,
  imagem,
  createdAt,
}) => {
  const novidade = haMenosDeDuasSemanas(createdAt)

  return (
    <div className="group cursor-pointer overflow-hidden rounded-lg border-[1px] border-stroke-cervejas ">
      <div className="h-30 relative m-0 flex w-full items-center gap-3 p-0">
        <div className="group-hover:bg-beer-card-bg-gradient 200ms flex items-center justify-center bg-gray-cards transition-all ">
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
        <div style={{ padding: '1rem .5rem', overflowWrap: 'break-word' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
