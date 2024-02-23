import { TReview } from '@/data/data'
import { cn } from '@/lib/utils'
import StarReviewsMini from '../stars/startsMini/stars-mini'
import ReviewTitle from '../titles/review-title/review-title'
import Link from 'next/link'
import RelativeDate from '../titles/relative-date/relative-date'

export const FeedCardRating: React.FC<{ avaliacao: TReview }> = ({
  avaliacao,
}) => {
  return (
    <>
      <div className={cn('flex items-center justify-between gap-2 px-4 py-2')}>
        <div>
          <RelativeDate date={avaliacao.createdAt as Date} />
          <span>Avaliou </span>
          <span className="text-yellow-barzim">
            <Link href={`/cervejas/${avaliacao.cerveja.id}`}>
              {avaliacao.cerveja.nomeCerveja}
            </Link>
          </span>
        </div>
        <StarReviewsMini nota={avaliacao.nota ?? 1} />
      </div>
    </>
  )
}
