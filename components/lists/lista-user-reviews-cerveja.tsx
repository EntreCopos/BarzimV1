import NinguemAvaliou from '../cards/ninguem-avaliou/ninguem-avaliou'
import SectionTitle from '../dashboard/title-sections/title-section'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ReviewHeader from '@/components/review/review-header/review-header'
import { ReviewWrapper } from '../wrappers/review-wrapper'
import { SelectSeparator } from '../ui/select'
import { StarReviews } from '../stars/stars-reviews'
import { ReviewText } from '../wrappers/review-text'
import { firstTwoLetters } from '@/lib/utils'
import { type TReview, type TypeObjectCerveja } from '@/data/data'
import { getAvaliacoesByCerveja } from '@/data/avaliacao'
import { ReviewInteraction } from '../buttons/review-interaction-bar'
import { BrindarReviewButton } from '../buttons/brindar-review-button'

export const ListUserReviews: React.FC<{
  cerveja: TypeObjectCerveja
}> = async ({ cerveja }) => {
  const avaliacoesCerveja = await getAvaliacoesByCerveja(cerveja.id)

  if (avaliacoesCerveja && avaliacoesCerveja.length == 0) {
    return <NinguemAvaliou cervejaId={cerveja.id} />
  } else
    return (
      <>
        <SectionTitle
          className="px-8"
          variant={'small'}
          title="Avaliações no Barzim"
        />
        <ul>
          {avaliacoesCerveja.map((avaliacao: TReview, index: number) => {
            return (
              <li
                className="space-y-2"
                key={avaliacao.usuario.username + '_' + index}
              >
                <ReviewWrapper>
                  <Avatar>
                    <AvatarImage
                      src={avaliacao.usuario.image ?? 'undefined'}
                      className="aspect-square"
                    />
                    <AvatarFallback className="bg-yellow-barzim text-black">
                      {firstTwoLetters(avaliacao.usuario.username)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex w-full justify-between">
                    <ReviewHeader
                      userName={avaliacao.usuario.username as string}
                      beerName={cerveja.nomeCerveja}
                    />
                    <StarReviews
                      size="sm"
                      variant="copo"
                      nota={avaliacao.nota as number}
                    />
                  </div>
                  <ReviewText description={avaliacao.reviewTexto as string} />
                </ReviewWrapper>
                {avaliacao.reviewTexto && (
                  <ReviewInteraction>
                    <BrindarReviewButton id={avaliacao.id} />
                  </ReviewInteraction>
                )}
                {!isLastItem(index, avaliacoesCerveja) && (
                  <SelectSeparator className="mx-0" />
                )}
              </li>
            )
          })}
        </ul>
      </>
    )
}

function isLastItem(index: number, list: any[]) {
  return !(index + 1 < list.length)
}
