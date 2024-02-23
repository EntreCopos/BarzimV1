import { type CervejaBreadcrumbs, type CervejaDetails } from '@/data/data'
import { auth } from '@/auth'
import { LogoCervejaria } from '@/components/logos/logo-cervejarias'
import { BeerNameLarge } from '@/components/titles/beer-name-lg'
import { BeerDescription } from '@/components/wrappers/beer-description-wrapper'
import { BeerImage } from '@/components/wrappers/beer-image-wrapper'
import { getCervejaById } from '@/data/cervejas'
import { Breadcrumbs } from '@/components/tags/breadcrumbs'
import { ButtonsWrapper } from '@/components/wrappers/buttons-wrapper'
import { BrindarButton } from '@/components/buttons/brindar-button'
import { AddtoListButton } from '@/components/buttons/add-to-list-button'
import { getAvaliacoesByCerveja, relUserCerv } from '@/data/avaliacao'
import { ReviewWrapper } from '@/components/wrappers/review-wrapper'
import { ReviewDescription } from '@/components/wrappers/review-description-wrapper'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
// import { BrindarReviewButton } from '@/components/buttons/brindar-review-button'
import DetalhesCerveja from '@/components/lists/detalhes-da-cerveja/detalhes-da-cerveja'
import StarReviews from '@/components/stars/stars-reviews'
import AvatarReview from '@/components/avatar/avatar-review/avatar-review'
import ReviewHeader from '@/components/review/review-header/review-header'
import StarReviewsMini from '@/components/stars/startsMini/stars-mini'
import NinguemAvaliou from '@/components/cards/ninguem-avaliou/ninguem-avaliou'
import SectionTitle from '@/components/dashboard/title-sections/title-section'

export default async function Cerveja({
  params,
}: {
  params: { cervejaId: string }
}) {
  const cerveja = await getCervejaById(params.cervejaId)
  if (!cerveja) throw new Error('sem cerveja')

  const session = await auth()

  const userRelCerveja = await relUserCerv(
    session?.user.id as string,
    cerveja.id + ''
  ) //a conversao pra string mais linda q vc ja viu, admita

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

  const cervejaDetails: CervejaDetails = {
    teorAlcoolico: {
      key: 'Teor Alcoólico',
      value: cerveja.teorAlcoolico,
    },
    tempIdeal: {
      key: 'Temperatura Ideal',
      value: cerveja.tempIdeal,
    },
    valorIBU: {
      key: 'Valor IBU',
      value: cerveja.valorIBU,
    },
    corpo: {
      key: 'Corpo',
      value: cerveja.corpo,
    },
  }

  const avaliacoesCerveja = await getAvaliacoesByCerveja(params.cervejaId)

  return (
    <div className="flex flex-col gap-2" style={{ paddingBlockEnd: '2rem' }}>
      <section className="overflow-hidden bg-deep-black object-cover">
        <Breadcrumbs cerveja={cervejaBreadcrumbs} />

        <div className=" z-10 flex items-center justify-start gap-4">
          <BeerImage alt={cerveja.nomeCerveja} src={cerveja.mainImage} />

          <div className="flex flex-col gap-2">
            <LogoCervejaria src={cerveja?.cervejaria.logo} />
            <BeerNameLarge variant="dark-mode" cerveja={cervejaHeading} />

            {cerveja.notaMedia && <StarReviews nota={cerveja.notaMedia} />}

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
      <DetalhesCerveja cervejaDetails={cervejaDetails} />
      <WrapperDefaultPadding>
        <SectionTitle variant={'small'} title="Avaliações dos Barzinhers" />
        {!!avaliacoesCerveja &&
          avaliacoesCerveja.map((avaliacao) => {
            return (
              <div
                style={{ display: 'contents' }}
                key={avaliacao.usuario.name + '_' + cerveja.nomeCerveja}
              >
                <ReviewWrapper>
                  <AvatarReview avatarSrc={avaliacao.usuario.image as string} />
                  <ReviewHeader
                    userName={avaliacao.usuario.username as string}
                    beerName={cerveja.nomeCerveja}
                  />
                  <StarReviewsMini nota={avaliacao.nota as number} />
                  <ReviewDescription
                    description={avaliacao.reviewTexto as string}
                  />
                  {/* <BrindarReviewButton /> */}
                </ReviewWrapper>
              </div>
            )
          })}
        {avaliacoesCerveja && avaliacoesCerveja.length == 0 && (
          <NinguemAvaliou cervejaId={cerveja.id + ''} />
        )}
      </WrapperDefaultPadding>
    </div>
  )
}
