import Image from "next/image"

interface ImageProps {
    src: string
}

export const BeerImage: React.FC<ImageProps> = ({ src }) => {
    return (
        <Image src={src} width={150} height={170} alt="{Cerveja.nome} - Barzim" className="object-cover"></Image>
    )
}