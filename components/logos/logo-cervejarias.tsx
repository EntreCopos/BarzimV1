import Image from 'next/image'

interface LogoProps {
  src: string | null
}

export const LogoCervejaria: React.FC<LogoProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        style={{ filter: 'var(--logo-filter)' }}
        src={src}
        width={80}
        height={80}
        alt="Logo cervejaria - Barzim"
        className="object-cover"
      ></Image>
    )
  }
}
