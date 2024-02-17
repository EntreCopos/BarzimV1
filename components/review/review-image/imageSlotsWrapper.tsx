import { ImageSlot } from "./imageSlot"

interface ImageSlotsWrapperProps {
    imageUrls?: string[]
}



const ImageSlotsWrapper: React.FC<ImageSlotsWrapperProps> = ({ imageUrls = [] }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleDelete = (index: number) => {
        // lidar com a exclusao
        console.log(`Excluindo imagem na posição ${index}`)
    }

    const filledImageUrls = [...imageUrls]
    while (filledImageUrls.length < 5) {
        filledImageUrls.push('')
    }

    return (
        <div className="flex flex-wrap">
            {filledImageUrls.map((url, index) => (

                <div key={index} className="m-[2px]">
                    <ImageSlot imageUrl={url} />
                </div>
            ))}
        </div>
    )
}

export default ImageSlotsWrapper