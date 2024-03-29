import { getAllCervejas, getCervejarias } from '@/data/cervejas'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'
import { CarouselItem } from '@/components/ui/carousel'

import { BeerFilter } from '@/components/filters/beer-filter'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'

export const dynamic = 'force-dynamic'

export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  const cervejarias = await getCervejarias()
  const cervejariasDuplicada = cervejarias?.concat(cervejarias)

  if (!!listaDeCervejas?.length)
    return (
      <>
        <WrapperDefaultPadding>
          <SectionTitle title="Por Cervejaria" />
        </WrapperDefaultPadding>
        <CarouselWrapper logoCarousel>
          {cervejariasDuplicada?.map((cervejaria, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
                <CarouselCard
                  link={cervejaria.id}
                  altText={cervejaria.nome}
                  title={cervejaria.nome}
                  imageSrc={cervejaria.logo}
                />
              </CarouselItem>
            )
          })}
        </CarouselWrapper>
        <BeerFilter cervejas={listaDeCervejas} />
      </>
    )
  else throw new Error('faltou cerveja')
}
