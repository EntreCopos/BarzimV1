import Image, { type StaticImageData } from 'next/image'

interface ImageProps {
  src: string | StaticImageData
  alt?: string
  width?: number
}

export const BeerImage: React.FC<ImageProps> = ({
  src,
  width = 150,
  alt = 'Imagem Cerveja',
}) => {
  return (
    <div title={alt + ' no Barzim'} className='min-w-32 p-4 max-h-[320px] object-cover object-top'>
      <Image
        style={{marginTop: -50, scale: ".9"}}
        src={src}
        width={width}
        height={120}
        alt={alt + 'no Barzim'}
        className="object-cover"
      />
    </div>
  )
}
