'use client'
import '@knocklabs/react/dist/index.css'

import './feed-overrides.css'

import {
  KnockProvider,
  KnockFeedProvider,
  NotificationIconButton,
  NotificationFeedPopover,
} from '@knocklabs/react'

import { useState, useRef } from 'react'

const Notifications: React.FC<{ userId: string }> = ({ userId }) => {
  const [isVisible, setIsVisible] = useState(false)
  const notifButtonRef = useRef(null)

  return (
    <div
      style={{
        alignSelf: 'flex-end',
        marginBottom: '-4px',
      }}
    >
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
  )
}

export default Notifications
