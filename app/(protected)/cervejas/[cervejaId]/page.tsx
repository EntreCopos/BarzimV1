import { type CervejaBreadcrumbs } from '@/data/data'
import { auth } from '@/auth'
import { LogoCervejaria } from '@/components/logos/logo-cervejarias'
import { BeerDescription } from '@/components/wrappers/beer-description-wrapper'
import { BeerImage } from '@/components/wrappers/beer-image-wrapper'
import { getCervejaById } from '@/data/cervejas'
import { BreadcrumbsCerveja } from '@/components/breadcrumbs/breadcrumbs-cerveja'
import { ButtonsWrapper } from '@/components/wrappers/buttons-wrapper'
import { BrindarButton } from '@/components/buttons/brindar-button'
import { AddtoListButton } from '@/components/buttons/add-to-list-button'
import { getAvaliacoesByCerveja, relUserCerv } from '@/data/avaliacao'
import { ReviewWrapper } from '@/components/wrappers/review-wrapper'
import { ReviewDescription } from '@/components/wrappers/review-description-wrapper'
import DetalhesCerveja from '@/components/lists/detalhes-da-cerveja/detalhes-da-cerveja'
import { StarReviews } from '@/components/stars/stars-reviews'
import ReviewHeader from '@/components/review/review-header/review-header'
import NinguemAvaliou from '@/components/cards/ninguem-avaliou/ninguem-avaliou'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import { firstTwoLetters } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BeerName } from '@/components/titles/beer-name'
import { SelectSeparator } from '@/components/ui/select'
import { BrindarReviewButton } from '@/components/buttons/brindar-review-button'
import { Badge } from '@/components/ui/badge'

export default async function Cerveja({
  params,
}: {
  params: { cervejaId: string }
}) {
  const cerveja = await getCervejaById(params.cervejaId)

  if (!cerveja) return

  const session = await auth()

  const userRelCerveja = await relUserCerv(
    session?.user.id as string,
    cerveja.id + ''
  )

  const cervejaHeading = {
    nomeCerveja: cerveja?.nomeCerveja,
    tipoCerveja: cerveja?.tipoCerveja.nome,
  }

  const cervejaBreadcrumbs: CervejaBreadcrumbs = {
    cervejaria: {
      nome: cerveja?.cervejaria.nome,
      path: cerveja?.cervejaria.id,
    },
    nome: cerveja?.nomeCerveja,
  }

  const avaliacoesCerveja = await getAvaliacoesByCerveja(params.cervejaId)

  return (
    <>
      <section className="bg-beer-header-gradient overflow-hidden bg-secondary/60 object-cover p-1 text-secondary-foreground md:p-2">
        <BreadcrumbsCerveja cerveja={cervejaBreadcrumbs} />

        <div
          style={{ justifyContent: 'space-evenly' }}
          className="mx-6 flex items-center gap-1 md:gap-4"
        >
          <BeerImage alt={cerveja.nomeCerveja} src={cerveja.mainImage} />

          <div className="flex flex-col gap-2">
            <LogoCervejaria src={cerveja?.cervejaria.logo} />
            <BeerName large cerveja={cervejaHeading} />

            {cerveja.notaMedia && (
              <StarReviews size="xl" variant="copo" nota={cerveja.notaMedia} />
            )}

            <ButtonsWrapper>
              <BrindarButton id={params.cervejaId} />
              <AddtoListButton
                id={params.cervejaId}
                usuario={session?.user.id as string}
                userReltoCerveja={userRelCerveja}
              />
            </ButtonsWrapper>
          </div>
        </div>
      </section>
      {cerveja.descriCerveja && (
        <BeerDescription description={cerveja.descriCerveja} />
      )}
      <DetalhesCerveja cerveja={cerveja} />

      <div className="grid w-full gap-4 px-8 py-4 md:grid-cols-2">
        {cerveja?.ingredientesCerveja && (
          <div className="space-y-2">
            <SectionTitle variant={'small'} title="Ingredientes" />
            {cerveja.ingredientesCerveja.map((ingrediente) => (
              <Badge
                variant="default"
                className="mr-2 border-none px-2 py-1 hover:bg-accent-foreground hover:text-accent"
                key={ingrediente}
              >
                {ingrediente.toUpperCase()}
              </Badge>
            ))}
          </div>
        )}
        {cerveja?.harmonizacoesCerveja && (
          <div className="space-y-2">
            <SectionTitle variant="small" title="Harmonizações" />
            {cerveja.harmonizacoesCerveja.map((harmonizacao) => (
              <Badge
                variant="default"
                className="mr-2 border-none px-2 py-1 hover:bg-accent-foreground hover:text-accent"
                key={harmonizacao}
              >
                {harmonizacao.toUpperCase()}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="px-8">
        {!!avaliacoesCerveja && (
          <SectionTitle variant={'small'} title="Avaliações no Barzim" />
        )}
        {!!avaliacoesCerveja &&
          avaliacoesCerveja.map((avaliacao, index) => {
            return (
              <div
                key={
                  avaliacao.usuario.username + '_' + index + '_' + cerveja.id
                }
              >
                <ReviewWrapper>
                  <Avatar>
                    <AvatarImage
                      src={avaliacao.usuario.image ?? 'undefined'}
                      className="aspect-square"
                    />
                    <AvatarFallback className="bg-yellow-barzim">
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
                  <ReviewDescription
                    description={avaliacao.reviewTexto as string}
                  />
                  {/* <BrindarReviewButton /> */}
                </ReviewWrapper>
                <SelectSeparator />
              </div>
            )
          })}
        {avaliacoesCerveja && avaliacoesCerveja.length == 0 && (
          <NinguemAvaliou cervejaId={cerveja.id + ''} />
        )}
      </div>
    </>
  )
}
