import { haMenosDeDuasSemanas } from '@/lib/utils'
import Image from 'next/image'

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
    <div className="cursor-pointer overflow-hidden rounded-lg border-[1px] border-stroke-cervejas transition-all duration-200 hover:scale-[1.02]">
      <div className="h-30 relative m-0 flex w-full items-center gap-3 p-0 md:w-96">
        <div className="flex w-5/12 items-center justify-center bg-gray-cards">
          {novidade && (
            <span
              style={{ zIndex: 10 }}
              className="text-black-500 absolute left-0 top-0 rounded-ee-lg bg-yellow-barzim p-1 text-xs font-medium"
            >
              Novidade
            </span>
          )}
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
