//import { cn } from '@/lib/utils'
import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import ListaDeCervejas from '@/components/lists/lista-cervejas'
import { getAllCervejas, getCervejarias } from '@/data/cervejas'
import Link from 'next/link'

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
              <span key={cervejaria.id}>

                <Link href={`/cervejarias/${cervejaria.id}`}>
                  <CarouselCard altText={cervejaria.nome} title={cervejaria.nome} imageSrc={cervejaria.logo} />
                </Link>
              </span>
            )
          })}
        </CarouselWrapper>
        <ListaDeCervejas cervejas={listaDeCervejas} />
      </>
    )
  else throw new Error('faltou cerveja')
}

