import { LogoCervejaria } from '@/components/logos/logo-cervejarias'
import { BeerNameLarge } from '@/components/titles/beer-name-lg'
import { BeerDescription } from '@/components/wrappers/beer-description-wrapper'
import { BeerImage } from '@/components/wrappers/beer-image-wrapper'
import { getCervejaById } from '@/data/cervejas'
import Link from 'next/link'

import { Breadcrumbs } from '@/components/tags/breadcrumbs'
import StarReviews from '@/components/stars/stars-reviews'
import { ButtonsWrapper } from '@/components/wrappers/buttons-wrapper'
import { BrindarButton } from '@/components/buttons/brindar-button'
import { AddtoListButton } from '@/components/buttons/add-to-list-button'
import DetalhesCerveja from '@/components/lists/detalhes-da-cerveja/detalhes-da-cerveja'

interface Cervejaria {
  nome: string
  path: number
}

interface CervejaBreadcrumbs {
  cervejaria: Cervejaria
  nome: string
}

interface CervejaDetails {
  teorAlcoolico: { key: string; value: number | null }
  tempIdeal: { key: string; value: string | null }
  valorIBU: { key: string; value: number | null }
  corpo: { key: string; value: string | null }
}

// const cerveja = {
//   id: 18,
//   mainImage:
//     'https://res.cloudinary.com/dvprux49g/image/upload/v1707497535/z9kqfbfykazjnuso6w5r.png',
//   nomeCerveja: 'Berrió do Piauí',
//   descriCerveja:
//     'Produzida e vendida somente no Piauí, ideal para aliviar o B-R-O-BRÓ sem fim do estado. Leva na receita caju plantado e colhido por pequenos produtores do estado, adquirido sem intermédios gerando renda para as regiões menos favorecidas e diminuindo o desperdício do insumo.',
//   teorAlcoolico: 4.4,
//   tempIdeal: '0-4 °C',
//   valorIBU: 7,
//   corpo: '(1)',
//   cervejariaId: 1,
//   tipoCervejaId: 1,
//   notaMedia: 3,
//   ingredientes: ['Lúpulo', 'Água', 'Malte', 'Milho', 'Suco de caju'],
//   harmonizacoes: ['Paçoca', 'Arroz', 'Capote frito'],
//   createdAt: null,
//   tipoCerveja: {
//     id: 1,
//     nome: 'Premium American Lager',
//     descricao: 'Estilo de cerveja de baixa fermentação e sabor refrescante.',
//     createdAt: null,
//   },
//   cervejaria: {
//     id: 1,
//     nome: 'Ambev',
//     createdAt: '2024-02-17T08:47:03.771Z',
//     logo: 'https://res.cloudinary.com/barzimbeerapp/image/upload/v1708159138/logos_cervejarias/tlz1ifyzcbh5sbf7vmvw.png',
//   },
// }

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

          <div
            style={{ maxHeight: 280 }}
            className="flex items-center justify-center gap-4"
          >
            <BeerImage alt={cerveja.nomeCerveja} src={cerveja.mainImage} />

            <div className="flex flex-col gap-2">
              <LogoCervejaria src={cerveja?.cervejaria.logo} />
              <BeerNameLarge variant="dark-mode" cerveja={cervejaHeading} />

              {cerveja.notaMedia && <StarReviews nota={cerveja.notaMedia} />}

              <ButtonsWrapper>
                <BrindarButton />
                <AddtoListButton />
              </ButtonsWrapper>
            </div>
          </div>
        </section>
        {cerveja.descriCerveja && (
          <BeerDescription description={cerveja.descriCerveja} />
        )}
        <DetalhesCerveja cervejaDetails={cervejaDetails}/>
        {/* <div>
          {Object.entries(cervejaDetails).map(
            ([key, { key: attrKey, value }]) => {
              console.log(value)
              
              //eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return (
                value && (
                  <div
                    key={key}
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <h3>{attrKey}</h3>
                    <p>{value}</p>
                  </div>
                )
              )
            }
          )}
        </div> */}
        {/* 
      <ButtonsWrapper>
        <BrindarButton />
        <AddtoListButton />
      </ButtonsWrapper>

      <div className=" flex gap-2">
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

      <AddImageButton />

      <ImageSlotsWrapper />
      <ImageSlotsWrapper imageUrls={urlsImagens} /> */}
      </div>
    </>
  )
}
