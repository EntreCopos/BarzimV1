import { auth } from '@/auth'
import { BottomMenu } from '@/components/bottom-menu/menu'
import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'
import { getUsernameById } from '@/data/user'
import { notifications } from '@/lib/notifications'
import { cn } from '@/lib/utils'

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
        'flex min-h-screen w-full flex-col bg-black-radial-gradient md:mx-auto md:max-w-[422px]'
      )}
    >
      <NavWrapper userId={session?.user.id as string} />
      <div className={cn('flex flex-1 flex-col overflow-y-auto')}>
        <div className="flex-1">{children}</div>
      </div>
      <BottomMenu currUser={user?.username as string} />
      <Toaster />
    </div>
  )
}
