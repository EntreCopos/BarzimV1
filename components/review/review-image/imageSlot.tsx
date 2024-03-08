import Image from 'next/image'
import { FaCamera } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

interface ImageSlotProps {
  imageUrl: string
  // onDelete: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ImageSlot: React.FC<ImageSlotProps> = ({ imageUrl }) => {
  return (
    <div className="flex items-center space-x-1">
      {imageUrl ? (
        <div className="relative grid h-24 aspect-square items-center justify-center overflow-hidden rounded">
          <Image
            src={imageUrl}
            width={100}
            height={100}
            alt="Imagem da avaliação"
            className="h-full object-cover"
          />
          {/* <button className="absolute top-1 right-1 bg-red-500 p-[2px] rounded-full text-white">
                <IoMdClose />
              </button> 
            */}
        </div>
      ) : (
        <div className="m-[2px] flex h-24 aspect-square items-center justify-center rounded-lg border border-dashed  border-[#787878] text-white text-opacity-30">
          <FaCamera size={40} />
        </div>
      )}
    </div>
  )
}
