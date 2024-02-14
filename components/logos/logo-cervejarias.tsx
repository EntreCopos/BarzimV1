import Image from "next/image"

interface LogoProps {
    src: string
    width: number
    height: number
}

export const LogoCervejaria: React.FC<LogoProps> = ({ src, width, height }) => {
    return (
        <Image src={src} width={width} height={height} alt="Logo cervejaria - Barzim"></Image>
    )
}