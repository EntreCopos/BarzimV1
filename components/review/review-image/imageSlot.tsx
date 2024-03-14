import Image from 'next/image'
import { FaCamera } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

interface ImageSlotProps {
  imageUrl: string
  key: number
  // onDelete: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ImageSlot: React.FC<ImageSlotProps> = ({ imageUrl, key }) => {
  return (
    <div key={'pic_' + key} className="contents">
      {imageUrl ? (
        <div className="relative grid h-24 w-full max-w-[25%] basis-1/4 items-center justify-center overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            fill={true}
            alt="Imagem da avaliação"
            className="h-full object-cover"
          />
          {/* <button className="absolute top-1 right-1 bg-red-500 p-[2px] rounded-full text-white">
                <IoMdClose />
              </button> 
            */}
        </div>
      ) : (
        <div className="flex h-24 basis-1/4 items-center justify-center rounded-lg border-2 border-secondary-foreground p-6 text-secondary-foreground opacity-60 ">
          <FaCamera size={24} />
        </div>
      )}
    </div>
  )
}
