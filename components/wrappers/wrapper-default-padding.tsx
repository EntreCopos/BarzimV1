import { cn } from '@/lib/utils'

export const WrapperDefaultPadding: React.FC<{
  children?: React.ReactNode | React.ReactNode[]
  style?: React.CSSProperties
}> = ({ children, style }) => {
  return (
    <div
      style={{ ...style }}
      className={cn('flex flex-col justify-between py-2 px-6')}
    >
      {children}
    </div>
  )
}
