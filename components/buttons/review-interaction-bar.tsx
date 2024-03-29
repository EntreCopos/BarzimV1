import { MdIosShare } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
import { ReviewOptionsDropdown } from '../dropdowns/review-options'
import { ReviewShareDropdown } from '../dropdowns/review-share'

export const ReviewInteraction: React.FC<{
  children?: React.ReactNode
}> = ({ children }) => {
  return (
    <div className="relative flex w-full flex-row-reverse items-center justify-between gap-2 px-6">
      <ReviewOptionsDropdown />
      <ReviewShareDropdown />
      {children}
    </div>
  )
}
