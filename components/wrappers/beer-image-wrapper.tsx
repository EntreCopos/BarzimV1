import Image from 'next/image'

export const BeerImage: React.FC<{
  src: string
  alt?: string
}> = ({ src, alt = 'Imagem Cerveja' }) => {
  return (
    <div
      className="relative h-[250px] w-[200px] p-4 md:m-4 md:h-[420px] md:w-[240px] "
      title={alt + ' no Barzim'}
    >
      <Image
        style={{ objectFit: 'contain', marginRight: '-20px' }}
        src={src}
        fill={true}
        alt={alt + 'no Barzim'}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 35vw, (max-width: 2560px) 20vw"
      />
    </div>
  )
}
