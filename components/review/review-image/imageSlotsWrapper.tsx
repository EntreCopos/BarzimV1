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
  while (filledImageUrls.length < 4) {
    filledImageUrls.push('')
  }

  return (
    <div className="flex gap-4">
      {filledImageUrls.map((url, index) => (
        <ImageSlot key={index} imageUrl={url} />
      ))}
    </div>
  )
}

export default ImageSlotsWrapper
