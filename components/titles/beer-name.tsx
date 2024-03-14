import { cn, normalizeTitleCase } from '@/lib/utils'

export interface BeerProps {
  cerveja: {
    nomeCerveja: string
    tipoCerveja: string
  }
  variant?: 'light-mode' | 'dark-mode' | null
  large?: boolean
}

export const getThemeByVariant = (variant: BeerProps['variant']) => {
  if (!variant) return
  switch (variant) {
    case 'light-mode':
      return 'text-black'
    case 'dark-mode':
      return 'text-marfim-barzim'
  }
}

export const BeerName: React.FC<BeerProps> = ({
  cerveja,
  variant,
  large = false,
}) => {
  const { nomeCerveja, tipoCerveja } = cerveja

  return (
    <div
      className={cn(
        'text-left text-secondary-foreground',
        getThemeByVariant(variant)
      )}
    >
      <p className={cn('text-sm opacity-60', large && 'text-md')}>
        {normalizeTitleCase(tipoCerveja)}
      </p>
      <p
        className={cn('text-xl font-medium', large && 'text-2xl font-semibold')}
      >
        {normalizeTitleCase(nomeCerveja)}
      </p>
    </div>
  )
}
