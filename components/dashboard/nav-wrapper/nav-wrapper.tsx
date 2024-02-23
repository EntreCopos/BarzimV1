import styles from './nav-wrapper.module.css'
// import logoImage from '../../assets/img-logos-barzim/000 BLACK (1).png';
// import iconPlus from "../../assets/icons/plus.png";
// import iconNotification from "../../assets/icons/notification.png";
// import LogoBarzimNavWrapper from './nav-wrapper-logo-barzim/nav-wrapper-logo-barzim';
// import NavWrapperIcon from './nav-wrapper-icons/nav-wrapper-icons';
import { IoNotifications } from "react-icons/io5";

import Link from 'next/link'

import { Logo } from '@/components/logos/logo-barzim'

const NavWrapper: React.FC = () => {
  return (
    <div className={styles.navWrapper}>
      <Link href={'/dashboard'}>
        <Logo width={120} />
      </Link>
      <div className={styles.icons}>
        <IoNotifications className="text-2xl" />
      </div>
    </div>
  )
}

export default NavWrapper
