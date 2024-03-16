import { type ReactNode } from 'react'

export const ButtonsWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className="mt-4 flex gap-2">{children}</div>
}
