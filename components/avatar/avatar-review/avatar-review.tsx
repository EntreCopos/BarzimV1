
import styles from './avatar-review.module.css';
import Image, { type StaticImageData } from 'next/image';

interface AvatarReviewProps {
  avatarSrc: string | StaticImageData;
  width?: number;
  height?: number;
}

const AvatarReview: React.FC<AvatarReviewProps> = ({ avatarSrc, width = 35, height = 35 }) => {
  return (
    <div className={styles.avatarContainer}>
      <Image
        src={avatarSrc}
        alt="User Avatar"
        className={styles.avatarImage}
        width={width}
        height={height}
      />
    </div>
  );
};

export default AvatarReview;
