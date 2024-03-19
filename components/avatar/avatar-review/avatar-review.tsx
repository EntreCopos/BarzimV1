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
        className="aspect-square overflow-hidden rounded-full border-2 border-yellow-barzim"
      >
        <Image
          src={avatarSrc}
          alt="User Avatar"
          className="h-full w-full object-cover"
          width={width}
          height={height}
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
