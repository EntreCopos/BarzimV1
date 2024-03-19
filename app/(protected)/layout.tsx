import { auth } from '@/auth'
import { BottomMenu } from '@/components/menu/bottom-menu'
import Nav from '@/components/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'
import { getUsernameById } from '@/data/user'
import { notifications } from '@/lib/notifications'
import { SideMenu } from '@/components/menu/side-menu'
import { Suspense } from 'react'
import Loading from '@/app/loading'

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
      <div className="mt-[70px] grid w-full grid-cols-[100%] [grid-template-areas:_'main'] md:mx-auto md:min-h-[calc(100svh-70px)] md:max-w-screen-lg md:grid-cols-[1fr_3fr] md:[grid-template-areas:'menu_main_main_main']">
        <div className="hidden md:relative md:block md:px-6 md:[grid-area:menu]">
          <SideMenu currUser={user?.username as string} />
        </div>
        <div className="w-full max-w-[100vw] border-x-gray-cards [grid-area:main] md:border-x">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
      <BottomMenu currUser={user?.username as string} />
      <Toaster />
    </div>
  )
}
