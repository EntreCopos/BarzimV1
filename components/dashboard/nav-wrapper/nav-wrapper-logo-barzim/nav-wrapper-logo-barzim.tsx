import Image, { type StaticImageData } from 'next/image';
import styles from './nav-wrapper-logo-barzim.module.css';

interface LogoBarzimNavWrapperProps {
  logoSrc: string | StaticImageData;
  logoAlt: string;
}

const LogoBarzimNavWrapper: React.FC<LogoBarzimNavWrapperProps> = ({ logoSrc, logoAlt }) => {
  return (
    <div className={styles.logo}>
      <Image
        src={logoSrc}
        alt={logoAlt}
        className={styles.logoImage}
      />
    </div>
  );
};

export default LogoBarzimNavWrapper;
