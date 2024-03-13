import styles from './carousel.module.css'
import { type ReactNode } from 'react'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  logoCarousel?: boolean
}

const CarouselWrapper = ({
  children,
  logoCarousel = false,
}: Props): JSX.Element => {
  return (
    <div className={cn(styles.carousel, logoCarousel && styles.logoCarousel)}>
      <Carousel
        opts={{ align: 'start', loop: true, dragFree: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">{children}</CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselWrapper
