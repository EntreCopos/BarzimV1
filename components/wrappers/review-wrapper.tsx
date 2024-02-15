import React, { type ReactNode } from 'react'

interface ReviewWrapperProps {
    children: ReactNode
}

export const ReviewWrapper: React.FC<ReviewWrapperProps> = ({ children }) => {

    const [avatar, ...rest] = React.Children.toArray(children)

    return (
        <div className="flex gap-5">
            <div className="flex-none">{avatar}</div>
            <div className="flex-1 flex flex-col">{rest}</div>
        </div>
    )
}
