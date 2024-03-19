import { type TReview } from '@/data/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import RelativeDate from '../titles/relative-date/relative-date'
import { StarReviews } from '../stars/stars-reviews'

export const FeedCardRating: React.FC<{ avaliacao: TReview }> = ({
  avaliacao,
}) => {
  return (
    <>
      <div className={cn('flex items-center justify-between gap-2 px-4 py-2')}>
        <div>
          <RelativeDate
            className="text-accent-foreground"
            date={avaliacao.createdAt as Date}
          />
          <span>Avaliou </span>
          <span className="text-yellow-barzim">
            <Link href={`/cervejas/${avaliacao.cerveja.id}`}>
              {avaliacao.cerveja.nomeCerveja}
            </Link>
          </span>
        </div>
        <StarReviews variant="copo" size="sm" nota={avaliacao.nota ?? 1} />
      </div>
      {avaliacao.reviewTexto && (
        <div className={cn('mb-4 p-2 px-4 text-sm text-accent-foreground')}>
          <p className="text-accent-foreground">{avaliacao.reviewTexto}</p>
        </div>
      )}
    </>
  )
}
