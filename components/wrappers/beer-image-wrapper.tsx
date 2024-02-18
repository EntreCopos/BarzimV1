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
    <div title={alt + ' no Barzim'} className='min-w-32 p-4 max-h-[320px] object-cover object-top'>
      <Image
        style={{marginTop: -40, scale: ".85"}}
        src={src}
        width={width}
        height={100}
        alt={alt + 'no Barzim'}
        className="object-cover"
      />
    </div>
  )
}
