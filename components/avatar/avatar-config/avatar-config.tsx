import styles from './avatar-config.module.css'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { FaTrash, FaImage } from 'react-icons/fa';

interface AvatarConfigProps {
  avatarSrc: string | StaticImageData
  width?: number
  height?: number
}

const AvatarConfig: React.FC<AvatarConfigProps> = ({
  avatarSrc,
  width = 100,
  height = 100,
}) => {
  if (!!avatarSrc) {
    return (
      <div className={styles.container}>
        <div className={styles.buttonsContainer}>
          <button className={styles.imageButton}>
            <FaImage />
          </button>
        </div>
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

        <div className={styles.buttonsContainer}>
          <button className={styles.deleteButton}>
            <FaTrash />
          </button>
        </div>
      </div>
    )
  } else
    return (
      <div style={{ width: width, height: height, borderRadius: '50%', backgroundColor: '#fec435' }} ></div>
    )
}

export default AvatarConfig
