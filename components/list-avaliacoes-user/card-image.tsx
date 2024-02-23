import { TReview } from '@/data/data'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import StarReviewsMini from '../stars/startsMini/stars-mini'
import RelativeDate from '../titles/relative-date/relative-date'

export const FeedCardImage: React.FC<{ avaliacao: TReview }> = ({
  avaliacao,
}) => {
  const image = JSON.parse(avaliacao.imagens[0])

  return (
    <>
      <div className={cn('relative aspect-square w-full')}>
        <Image
          style={{ objectFit: 'cover' }}
          src={image.secure_url}
          fill={true}
          alt={'Avaliação de ' + avaliacao.usuario.name}
        />
      </div>
      <div className={cn('flex items-center justify-between gap-2 px-4 py-3')}>
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
      {avaliacao.reviewTexto && (
        <div className={cn('mb-4 p-2 px-4 text-sm text-muted')}>
          <p>{avaliacao.reviewTexto}</p>
        </div>
      )}
    </>
  )
}
