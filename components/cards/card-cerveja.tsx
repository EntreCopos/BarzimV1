import { cn, haMenosDeDuasSemanas } from '@/lib/utils'
import Image from 'next/image'
import { Novidade } from '../badges/card-badges/novidade'

interface TCardCervejaProps {
  children: React.ReactNode
  imagem: string
  nomeCerveja: string
  createdAt: Date
  variant?: 'vertical' | 'horizontal'
}

export const CardCerveja: React.FC<TCardCervejaProps> = ({
  children,
  nomeCerveja,
  imagem,
  createdAt,
  variant = 'horizontal',
}) => {
  const novidade = haMenosDeDuasSemanas(createdAt)

  return (
    <div className="group h-full cursor-pointer overflow-hidden rounded-lg border-[1px] border-stroke-cervejas">
      <div
        className={cn(
          'h-30 relative m-0 flex w-full items-center gap-2 p-0',
          variant === 'vertical' && 'h-full flex-col'
        )}
      >
        <div
          className={cn(
            'group-hover:bg-beer-card-bg-gradient flex items-center justify-center bg-gray-cards transition-all',
            variant === 'vertical' && 'w-full flex-col justify-start'
          )}
        >
          {novidade && <Novidade />}
          <div
            className={cn(
              'relative flex aspect-square w-[150px] items-center justify-center overflow-hidden object-cover',
              variant === 'vertical' && 'min-h-[200px] p-2'
            )}
          >
            <Image
              className="object-contain p-3 transition-all group-hover:scale-[1.05]"
              src={imagem}
              fill={true}
              alt={nomeCerveja}
            />
          </div>
        </div>
        <div
          className={cn(
            'break-word px-2 py-4',
            variant === 'vertical' &&
              'w-full items-start justify-start break-normal px-4 pb-4 pt-2'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
