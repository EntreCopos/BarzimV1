import styles from './carousel-card.module.css'
import { Card } from '@/components/ui/card'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

interface CarouselCardProps {
  title: string
  imageSrc: string | StaticImageData | null
  altText: string
  link: number | string
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  imageSrc,
  altText,
  link
}) => {
  return (
    <Card className={styles.card}>
      <Link href={`/cervejarias/${link}`}>
      {imageSrc && (
        <Image className={styles.image} src={imageSrc} alt={altText} />
      )}

      <div className={styles.text}>{title}</div>
      </Link>
    </Card>
  )
}

export default CarouselCard
