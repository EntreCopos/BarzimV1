// SectionTitle component
import React, { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: ReactNode
  button?: ReactNode
  variant?: 'large' | 'small'
  className?: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  button,
  variant = 'large',
  className,
}) => {
  return (
    <div
      className={cn('flex items-center justify-between  pb-2 pt-4', className)}
    >
      <h2
        className={cn(
          variant !== 'large'
            ? 'mb-2 text-xs text-accent-foreground/60'
            : 'font-medium tracking-wider text-yellow-barzim'
        )}
      >
        {title}
      </h2>
      {button && <>{button}</>}
    </div>
  )
}

export default SectionTitle
