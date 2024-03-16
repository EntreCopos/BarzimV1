import { cn } from '@/lib/utils'

export const WrapperDefaultPadding: React.FC<{
  children?: React.ReactNode | React.ReactNode[]
  style?: React.CSSProperties
  className?: string
}> = ({ children, style, className }) => {
  return (
    <div
      style={{ ...style }}
      className={cn('flex flex-col justify-between px-6 py-2', className)}
    >
      {children}
    </div>
  )
}
