import { ImageSlot } from './imageSlot'

interface ImageSlotsWrapperProps {
  imageUrls?: string[]
  //delete?: DeleteImageFromState
}

const ImageSlotsWrapper: React.FC<ImageSlotsWrapperProps> = ({
  imageUrls = [],
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleDelete = (index: number) => {
  //   delete(index)
  //   console.log(`Excluindo imagem na posição ${index}`)
  // }

  const filledImageUrls = [...imageUrls]
  while (filledImageUrls.length < 3) {
    filledImageUrls.push('')
  }

  return (
    <div style={{justifyContent: 'space-evenly'}} className="flex flex-wrap gap-1">
      {filledImageUrls.map((url, index) => (
        <div key={index} className='overflow-hidden space-x-2 gap-1'>
          <ImageSlot imageUrl={url} />
        </div>
      ))}
    </div>
  )
}

export default ImageSlotsWrapper
