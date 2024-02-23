import { TReview } from '@/data/data'
import { FeedCardImage } from './card-image'
import { FeedCardRating } from './card-rating'
import { cn } from '@/lib/utils'

export const ListAvaliações: React.FC<{ userAvaliacoes: TReview[] }> = ({
  userAvaliacoes,
}) => {
  return (
    <ul className={cn('flex w-full flex-col gap-3 pb-6')}>
      {userAvaliacoes.map((avaliacao) => (
        <li
          className={cn('bg-slate-barzim-80 overflow-hidden rounded-sm')}
          key={'avaliacao' + avaliacao.id}
        >
          {avaliacao.imagens.length > 0 && (
            <FeedCardImage avaliacao={avaliacao} />
          )}
          {avaliacao.imagens.length == 0 && (
            <FeedCardRating avaliacao={avaliacao} />
          )}
        </li>
      ))}
    </ul>
  )
}
