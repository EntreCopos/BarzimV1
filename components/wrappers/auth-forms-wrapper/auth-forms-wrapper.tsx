import { cn } from '@/lib/utils'

import styles from './auth-forms-wrapper.module.css'

export const AuthFormsWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="overflow-y-auto">
      <div
        className={cn(
          'grid w-full items-center gap-6',
          styles.authFormsWrapper
        )}
      >
        {children}
      </div>
    </div>
  )
}
