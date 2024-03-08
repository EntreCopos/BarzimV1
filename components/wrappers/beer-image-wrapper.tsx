import Image, { type StaticImageData } from 'next/image'

interface ImageProps {
  src: string | StaticImageData
  alt?: string
  width?: number
}

export const BeerImage: React.FC<ImageProps> = ({
  src,
  width = 130,
  alt = 'Imagem Cerveja',
}) => {
  return (
    <div style={{zIndex: 10, position: 'relative', height: '250px', width: '200px', margin: -5 }} title={alt + ' no Barzim'} className='min-w-32 p-4 max-h-[320px] object-cover object-top'>
      <Image
        style={{objectFit: 'contain', padding: '.8rem'}}
        src={src}
        fill={true}
        alt={alt + 'no Barzim'}
      />
    </div>
  )
}
