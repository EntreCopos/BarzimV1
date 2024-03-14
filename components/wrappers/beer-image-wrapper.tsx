import Image, { type StaticImageData } from 'next/image'
import styles from './beer-image-wrapper.module.css'

interface ImageProps {
  src: string | StaticImageData
  alt?: string
}

export const BeerImage: React.FC<ImageProps> = ({
  src,
  alt = 'Imagem Cerveja',
}) => {
  return (
    <div className={styles.beerImageWrapper} title={alt + ' no Barzim'}>
      <Image
        style={{ objectFit: 'contain', marginRight: '-20px' }}
        src={src}
        fill={true}
        alt={alt + 'no Barzim'}
      />
    </div>
  )
}
