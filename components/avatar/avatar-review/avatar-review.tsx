import styles from './avatar-review.module.css'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

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
  if (!!avatarSrc){
    return (
      <div
        style={{ width: `${width}px` }}
        className={cn(`aspect-square`, styles.avatarContainer)}
      >
        <Image
          src={avatarSrc}
          alt="User Avatar"
          className={styles.avatarImage}
          width={width}
          height={height}
        />
      </div>
    )
  } else
  return (
    <div style={{width: width, height: height, borderRadius: '50%', backgroundColor: '#fec435'}} ></div>
  )
}

export default AvatarReview
