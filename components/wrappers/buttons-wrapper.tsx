import { type ReactNode } from 'react'

interface ButtonsWrapperProps {
    children: ReactNode
}

export const ButtonsWrapper: React.FC<ButtonsWrapperProps> = ({ children }) => {
    return <div className="flex gap-2">{children}</div>
}