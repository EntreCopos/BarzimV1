import styles from './carousel.module.css'
import { type ReactNode } from 'react'
import {
  Carousel,
  CarouselContent,
} from '@/components/ui/carousel'

type Props = {
  children: ReactNode
}

const CarouselWrapper = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.carousel}>
      <Carousel opts={{align: 'start', loop: true, dragFree: true}} className='w-full'>
        <CarouselContent className='-ml-2 md:-ml-4'>
          {children}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselWrapper