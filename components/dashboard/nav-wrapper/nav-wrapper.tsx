'use client'
import styles from './nav-wrapper.module.css'
import Link from 'next/link'

import { Logo } from '@/components/logos/logo-barzim'
import Notifications from '@/components/notifications/notifications'

const NavWrapper: React.FC<{ userId: string }> = ({ userId }) => {
  return (
    <div className={styles.navWrapper}>
      <Link href={'/dashboard'}>
        <Logo width={120} />
      </Link>
      <div className={styles.icons}>
        <Notifications userId={userId} />
      </div>
    </div>
  )
}

export default NavWrapper
