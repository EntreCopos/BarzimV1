import React, { type ReactNode } from 'react'

interface ReviewWrapperProps {
  children: ReactNode
}

export const ReviewWrapper: React.FC<ReviewWrapperProps> = ({ children }) => {
  const [avatar, ...rest] = React.Children.toArray(children)

  return (
    <div className="mt-6 flex gap-5 pb-4">
      <div className="flex-none">{avatar}</div>
      <div className="flex flex-1 flex-col">{rest}</div>
    </div>
  )
}
