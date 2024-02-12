import styles from './nav-wrapper.module.css';
import logoImage from '../../assets/img-logos-barzim/000 BLACK (1).png';
import iconPlus from "../../assets/icons/plus.png";
import iconNotification from "../../assets/icons/notification.png";
import LogoBarzimNavWrapper from './nav-wrapper-logo-barzim/nav-wrapper-logo-barzim';
import NavWrapperIcon from './nav-wrapper-icons/nav-wrapper-icons';

const NavWrapper: React.FC = () => {
  return (
    <div className={styles.navWrapper}>
      <LogoBarzimNavWrapper
        logoSrc={logoImage}
        logoAlt="Logo Barzim" />
      <div className={styles.icons}>
        <NavWrapperIcon
          iconSrc={iconPlus}
          altText="Plus Icon"
        />
        <NavWrapperIcon
          iconSrc={iconNotification}
          altText="Notification Icon"
        />
      </div>
    </div>
  );
};

export default NavWrapper;
