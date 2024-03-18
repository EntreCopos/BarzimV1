import { auth } from '@/auth'
import { BottomMenu } from '@/components/menu/bottom-menu'
import Nav from '@/components/dashboard/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'
import { getUsernameById } from '@/data/user'
import { notifications } from '@/lib/notifications'
import { cn } from '@/lib/utils'

import styles from './layout.module.css'
import { SideMenu } from '@/components/menu/side-menu'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  const user = await getUsernameById(session?.user.id as string)

  await notifications.users.identify(session?.user.id as string, {
    name: session?.user.name || (user?.username as string),
    email: session?.user.email as string,
    avatar: session?.user.image,
    properties: {
      username: user?.username,
    },
  })

  return (
    <div className="relative flex min-h-screen flex-col justify-between">
      <Nav
        username={user?.username as string}
        userId={session?.user.id as string}
      />
      <div className={styles.container}>
        <div className={styles.menu}>
          <SideMenu currUser={user?.username as string} />
        </div>
        <div className={cn(styles.main, 'w-full')}>{children}</div>
      </div>
      <BottomMenu currUser={user?.username as string} />
      <Toaster />
    </div>
  )
}
