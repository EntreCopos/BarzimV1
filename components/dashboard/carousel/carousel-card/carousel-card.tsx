import styles from './carousel-card.module.css'
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
      <Card className={styles.card} title={altText}>
        {imageSrc && (
          <Image
            className={styles.image}
            fill
            src={imageSrc as string}
            alt={altText}
          />
        )}
        {(!imageSrc || forceShowtext) && (
          <div className={styles.text}>{title}</div>
        )}
      </Card>
    )
  } else
    return (
      <Card title={altText} className={styles.card}>
        <Link href={`/cervejarias/${link}`}>
          {imageSrc && (
            <Image
              className={styles.image}
              width={150}
              height={80}
              src={imageSrc}
              alt={altText}
            />
          )}
          {(!imageSrc || forceShowtext) && (
            <div className={styles.text}>{title}</div>
          )}
        </Link>
      </Card>
    )
}

export default CarouselCard
