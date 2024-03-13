import { auth } from '@/auth'
import { BottomMenu } from '@/components/bottom-menu/menu'
import Nav from '@/components/dashboard/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'
import { getUsernameById } from '@/data/user'
import { notifications } from '@/lib/notifications'
import { cn } from '@/lib/utils'

import styles from './layout.module.css'

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

  // await notifications.notify('notificacao-teste', {
  //   recipients: [session!.user.id as string],
  // })

  return (
    <div
      className={cn(
        'grid min-h-screen w-full content-around',
        styles.container
      )}
    >
      <Nav
        username={user?.username as string}
        userId={session?.user.id as string}
      />
      <div className={cn('flex flex-1 flex-col overflow-y-auto', styles.main)}>
        <div className="flex-1">{children}</div>
      </div>
      <div className={styles.menu}>
        <BottomMenu currUser={user?.username as string} />
      </div>
      <Toaster />
    </div>
  )
}
