import { LogoCervejaria } from '@/components/logos/logo-cervejarias'
import { BeerNameLarge } from '@/components/titles/beer-name-lg'
import { BeerDescription } from '@/components/wrappers/beer-description-wrapper'
import { BeerImage } from '@/components/wrappers/beer-image-wrapper'
import { getCervejaById } from '@/data/cervejas'
import { Breadcrumbs } from '@/components/tags/breadcrumbs'
import StarReviews from '@/components/stars/stars-reviews'
import { ButtonsWrapper } from '@/components/wrappers/buttons-wrapper'
import { BrindarButton } from '@/components/buttons/brindar-button'
import { AddtoListButton } from '@/components/buttons/add-to-list-button'
import DetalhesCerveja from '@/components/lists/detalhes-da-cerveja/detalhes-da-cerveja'
import { type CervejaBreadcrumbs, type CervejaDetails } from '@/data/data'

export default async function Cerveja({
  params,
}: {
  params: { cervejaId: string }
}) {
  const cerveja = await getCervejaById(params.cervejaId)
  if (!cerveja) throw new Error('sem cerveja')

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

  return (
    <>
      <div className="flex flex-col gap-4">
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
                {/* <AddtoListButton id={params.cervejaId} /> */}
              </ButtonsWrapper>
            </div>
          </div>
        </section>
        {cerveja.descriCerveja && (
          <BeerDescription description={cerveja.descriCerveja} />
        )}
        <DetalhesCerveja cervejaDetails={cervejaDetails} />
        
        {/*
      <div className="flex gap-2">
        <IngredientsTag label="Água" />
        <IngredientsTag label="Malte" />
        <IngredientsTag label="Lúpulo" />
      </div>

      <ReviewWrapper>
        <AvatarReview avatarSrc={'https://res.cloudinary.com/dvprux49g/image/upload/v1708016390/pirk4g0flwwfgytrd669.png'} />
        <ReviewHeader userName="irina" beerName="Budweiser" />
        <StarReviewsMini nota={2} />
        <ReviewDescription description="esperava mais. Não que seja ruim, mas o sabor não me cativou. Faltou algo, sabe? Por isso, dou nota 2. Há espaço para evolução." />
        <BrindarReviewButton />
      </ReviewWrapper>
       */}
      </div>
    </>
  )
}
