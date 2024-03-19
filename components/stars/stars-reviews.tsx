import { cn } from '@/lib/utils'
import { TbBeer, TbBeerFilled } from 'react-icons/tb'

interface StarReviewsProps {
  nota: number
  icon?: string | React.ReactNode
  variant?: 'estrela' | 'copo'
  size?: 'sm' | 'default' | 'xl'
}

export const StarReviews: React.FC<StarReviewsProps> = ({
  nota,
  icon = '★',
  variant,
  size,
}) => {
  const refNota = Math.floor(nota)
  return (
    <div title={'Nota ' + nota} className="min-w-[10ch]">
      {[...Array(5)].map((_, index) => (
        <span
          key={'point' + index + 1}
          className={cn(
            'mr-1 inline-flex cursor-default text-lg text-accent-foreground md:text-xl',
            index < refNota && 'text-yellow-barzim',
            size === 'xl' && 'text-xl md:text-3xl',
            size === 'sm' && 'text-xs'
          )}
        >
          {variant !== 'copo' ? (
            icon
          ) : index < refNota ? (
            <TbBeerFilled />
          ) : (
            <TbBeer />
          )}
        </span>
      ))}
    </div>
  )
}
