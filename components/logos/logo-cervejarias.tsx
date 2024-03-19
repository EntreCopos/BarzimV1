import Image from 'next/image'

export const LogoCervejaria: React.FC<{ src: string | null; alt?: string }> = ({
  src,
  alt = 'Cervejaria',
}) => {
  if (src) {
    return (
      <Image
        src={src}
        width={80}
        height={80}
        alt={alt + ' no Barzim'}
        className="object-cover [filter:_var(--logo-filter)]"
      ></Image>
    )
  } else return ''
}
