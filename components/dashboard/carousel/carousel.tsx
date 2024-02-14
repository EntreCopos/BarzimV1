import styles from './carousel.module.css'
import { FC, ReactNode } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import CarouselCard from './carousel-card/carousel-card'
import imgIconCardAmigos from '../../assets/icons/frame (1).png'
import imgIconCardRecomendacoes from '../../assets/icons/frame (2).png'
import imgIconCardRecentes from '../../assets/icons/frame.png'
import SectionTitle from '../title-sections/title-section'

type Props = {
  children: ReactNode
}

const CarouselWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.carousel}>
      <Carousel>
        <CarouselContent className="flex">
          <CarouselItem className="flex space-x-1">{children}</CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselWrapper

{
  /* <CarouselCard
    title="Mais Recentes"
    imageSrc={imgIconCardRecentes}
    altText="Imagem Redonda"
/>
<CarouselCard
    title="Recomendações"
    imageSrc={imgIconCardRecomendacoes}
    altText="Imagem Redonda"
/> */
}
