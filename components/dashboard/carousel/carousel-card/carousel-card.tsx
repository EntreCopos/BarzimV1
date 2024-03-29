import { Card } from '@/components/ui/card'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface CarouselCardProps {
  title: string
  imageSrc?: string | null
  altText: string
  link?: number | string | boolean
  forceShowtext?: boolean
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  imageSrc,
  altText,
  link = false,
  forceShowtext = false,
}) => {
  if (!link) {
    return (
      <Card
        className="relative flex max-h-[100px] min-h-[100px] flex-col items-center justify-center rounded-2xl border border-stroke-cervejas bg-gray-cards p-4 shadow-sutil-shadow"
        title={altText}
      >
        {imageSrc && (
          <Image
            className="w-full object-contain p-4"
            fill
            sizes="100px"
            src={imageSrc as string}
            alt={altText}
          />
        )}
        {(!imageSrc || forceShowtext) && (
          <div className="mt-2 text-center text-[14px] tracking-wider text-marfim-barzim">
            {title}
          </div>
        )}
      </Card>
    )
  } else
    return (
      <Card
        title={altText}
        className="relative flex max-h-[100px] min-h-[100px] flex-col items-center justify-center rounded-2xl border border-stroke-cervejas bg-gray-cards shadow-sutil-shadow"
      >
        <Link href={`/cervejarias/${link}`}>
          {imageSrc && (
            <Image
              className="w-full object-contain p-4"
              fill
              sizes="100px"
              src={imageSrc}
              alt={altText}
            />
          )}
          {(!imageSrc || forceShowtext) && (
            <div className="mt-2 text-center text-[14px] tracking-wider text-marfim-barzim">
              {title}
            </div>
          )}
        </Link>
      </Card>
    )
}

export default CarouselCard
