import Image, { type StaticImageData } from "next/image"

interface ImageProps {
    src: string | StaticImageData
    width?: number
}

export const BeerImage: React.FC<ImageProps> = ({ src, width = 150 }) => {
    return (
        <Image src={src} width={width} height={170} alt="{Cerveja.nome} - Barzim" className="object-cover"></Image>
    )
}