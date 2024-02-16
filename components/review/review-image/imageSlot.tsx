import Image from "next/image"
import { FaCamera } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"


interface ImageSlotProps {
    imageUrl: string
    // onDelete: () => void
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ImageSlot: React.FC<ImageSlotProps> = ({ imageUrl }) => {
    return (
        <div className="flex items-center">
            {imageUrl ? (
                <div className="w-24 h-24 relative rounded overflow-hidden grid items-center justify-center">
                    <Image src={imageUrl} width={40} height={40} alt="Imagem da avaliação" className="object-cover " />
                    <button className="absolute top-1 right-1 bg-red-500 p-[2px] rounded-full text-white">
                        <IoMdClose />
                    </button>
                </div>

            ) : (
                <div className="w-24 h-24 flex items-center justify-center border border-dashed rounded-lg border-[#787878]  m-[2px] text-white text-opacity-30">
                    <FaCamera size={40} />
                </div>
            )}
        </div>
    )
}