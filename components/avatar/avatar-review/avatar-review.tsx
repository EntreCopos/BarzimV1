import Image, { type StaticImageData } from 'next/image'

interface AvatarReviewProps {
  avatarSrc: string | StaticImageData
  width?: number
  height?: number
}

const AvatarReview: React.FC<AvatarReviewProps> = ({
  avatarSrc,
  width = 35,
  height = 35,
}) => {
  if (!!avatarSrc) {
    return (
      <div
        style={{ width: `${width}px` }}
        className="relative aspect-square overflow-hidden rounded-full border-2 border-yellow-barzim object-cover"
      >
        <Image
          src={avatarSrc}
          alt="User Avatar"
          className="transition-200 h-full w-full object-cover transition-all hover:scale-105"
          sizes="100px"
          fill={true}
        />
      </div>
    )
  } else
    return (
      <div
        style={{
          width: width,
          height: height,
        }}
        className="rounded-full bg-yellow-barzim"
      ></div>
    )
}

export default AvatarReview
