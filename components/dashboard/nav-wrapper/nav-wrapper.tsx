'use client'
import styles from './nav-wrapper.module.css'
import '@knocklabs/react/dist/index.css'
import { IoNotifications } from 'react-icons/io5'

import {
  KnockProvider,
  KnockFeedProvider,
  NotificationIconButton,
  NotificationFeedPopover,
} from '@knocklabs/react'

import Link from 'next/link'

import { Logo } from '@/components/logos/logo-barzim'
import { useState, useRef } from 'react'

const NavWrapper: React.FC<{ userId: string }> = ({ userId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const notifButtonRef = useRef(null)

  return (
    <div className={styles.navWrapper}>
      <Link href={'/dashboard'}>
        <Logo width={120} />
      </Link>
      <div className={styles.icons}>
        <KnockProvider
          apiKey={process.env.NEXT_PUBLIC_KNOCK_PUBLIC_KEY as string}
          userId={userId}
        >
          <KnockFeedProvider
            feedId={process.env.NEXT_PUBLIC_KNOCK_FEED_ID as string}
          >
            <div>
              <NotificationIconButton
                ref={notifButtonRef}
                onClick={(e) => setIsVisible(!isVisible)}
              />
              <NotificationFeedPopover
                buttonRef={notifButtonRef}
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
              />
            </div>
          </KnockFeedProvider>
        </KnockProvider>
      </div>
    </div>
  )
}

export default NavWrapper
