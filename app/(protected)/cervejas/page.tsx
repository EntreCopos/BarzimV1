//import { cn } from '@/lib/utils'
import { getAllCervejas, getCervejarias } from '@/data/cervejas'
import ListaDeCervejas from '@/components/lists/lista-cervjas'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'
import { CarouselItem } from '@/components/ui/carousel'
import { StaticImageData } from 'next/image'

export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  const cervejarias = await getCervejarias()
  const cervejariasDuplicada = cervejarias?.concat(cervejarias)
    
  if (!!listaDeCervejas?.length)
    return (
      <>
        <SectionTitle title='Por Cervejaria' />
        <CarouselWrapper>
          {cervejariasDuplicada?.map((cervejaria: { id: string | number; nome: string; logo: string | StaticImageData | null }, index: number) => {
            return (
              <CarouselItem key={index} className='basis-1/3'>
                <CarouselCard link={cervejaria.id} altText={cervejaria.nome} title={cervejaria.nome} imageSrc={cervejaria.logo}/>
              </CarouselItem>
            )
          })}

        </CarouselWrapper>
        <ListaDeCervejas cervejas={listaDeCervejas} />
      </>
    )
  else throw new Error('faltou cerveja')
}

