import Image from "next/image"

interface LogoProps {
    src: string
}

export const LogoCervejaria: React.FC<LogoProps> = ({ src }) => {
    return (
        <Image src={src} width={70} height={70} alt="Logo cervejaria - Barzim" className="object-cover"></Image>
    )
}