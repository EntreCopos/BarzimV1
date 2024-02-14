import styles from './carousel-card.module.css'
import { Card } from '@/components/ui/card'
import Image, { type StaticImageData } from 'next/image'

interface CarouselCardProps {
  title: string
  imageSrc: string | StaticImageData | null
  altText: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({
  title,
  imageSrc,
  altText,
}) => {
  return (
    <Card className={styles.card}>
      {imageSrc && (
        <Image className={styles.image} src={imageSrc} alt={altText} />
      )}

      <div className={styles.text}>{title}</div>
    </Card>
  )
}

export default CarouselCard
