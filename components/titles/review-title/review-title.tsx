import { cn } from '@/lib/utils'

interface ReviewTitleProps {
  beerName: string
  className?: string
}

const ReviewTitle: React.FC<ReviewTitleProps> = ({ beerName, className }) => {
  return (
    <div>
      <h2 className={cn('text-2xl text-secondary-foreground', className)}>
        Você está avaliando
        <span className="font-semibold text-yellow-barzim">{beerName}</span>
      </h2>
    </div>
  )
}

export default ReviewTitle
