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
    <div
      className={cn(
        'overflow-x-hidden px-6 pb-4 pt-0',
        logoCarousel && '[filter:_var(--logo-filter)]'
      )}
    >
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
