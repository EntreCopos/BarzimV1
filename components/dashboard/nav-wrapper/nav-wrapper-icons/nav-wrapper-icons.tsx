import Image, { type StaticImageData } from 'next/image';
import styles from './nav-wrapper-icons.module.css';

interface NavWrapperIconProps {
  iconSrc: string | StaticImageData;
  altText: string;
}

const NavWrapperIcon: React.FC<NavWrapperIconProps> = ({ iconSrc, altText }) => {
  return (
    <span className={styles.icon}>
      <Image src={iconSrc} alt={altText} />
    </span>
  );
};

export default NavWrapperIcon;
