import React, { type ReactNode } from 'react'

interface ReviewWrapperProps {
  children: ReactNode
}

export const ReviewWrapper: React.FC<ReviewWrapperProps> = ({ children }) => {
  const [avatar, ...rest] = React.Children.toArray(children)

  return (
    <div className="flex gap-2 px-6 py-4 md:gap-4">
      <div className="flex-none">{avatar}</div>
      <div className="flex flex-1 flex-col space-y-2">{rest}</div>
    </div>
  )
}
