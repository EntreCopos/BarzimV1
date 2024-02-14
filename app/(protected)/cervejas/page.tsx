import { cn } from '@/lib/utils'
import { getAllCervejas, getCervejarias } from '@/data/cervejas'
import { BeerName } from '@/components/titles/beer-name'
import { CardHorizontalCerveja } from '@/components/cards/card-horizontal-cerveja'
import Link from 'next/link'

import SectionTitle from '@/components/dashboard/title-sections/title-section'

import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'

export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  const cervejarias = await getCervejarias()
  if (!!listaDeCervejas?.length)
    return (
      <>
        <SectionTitle title='Por Cervejaria' />
        <CarouselWrapper>
          {cervejarias?.map(cervejaria => {
            return (
              <CarouselCard altText={cervejaria.nome} key={cervejaria.id} title={cervejaria.nome} imageSrc={cervejaria.logo}/>
            )
          })}
        </CarouselWrapper>
        <ListaDeCervejas cervejas={listaDeCervejas} />
      </>
    )
  else throw new Error('faltou cerveja')
}

import { type TypeListaDeCervejas } from '@/data/cervejas'

function ListaDeCervejas({ cervejas }: { cervejas: TypeListaDeCervejas }) {
  return (
    <ul className="flex flex-col gap-4">
      {/* //@ts-ignore */}
      {cervejas.map(
        ({
          id,
          nomeCerveja,
          mainImage,
          tipoCerveja: { nome: tipoCerveja },
        }) => (
          <li style={{ display: 'contents' }} key={id}>
            <Link href={`/cervejas/${id}`}>
              <CardHorizontalCerveja
                nomeCerveja={nomeCerveja}
                imagem={mainImage}
              >
                <BeerName
                  variant="dark-mode"
                  cerveja={{ nomeCerveja, tipoCerveja }}
                />
              </CardHorizontalCerveja>
            </Link>
          </li>
        )
      )}
    </ul>
  )
}
