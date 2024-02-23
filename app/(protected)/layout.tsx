import { auth } from '@/auth'
import { BottomMenu } from '@/components/bottom-menu/menu'
import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'
import { getUserById, getUsernameById } from '@/data/user'
import { cn } from '@/lib/utils'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  const user = await getUsernameById(session?.user.id as string)
  console.log('user é::', user)

  return (
    <section
      className={cn(
        'no-scrollbar relative flex min-h-screen w-full flex-col justify-between overflow-y-auto bg-black-radial-gradient md:mx-auto md:max-w-[422px]'
      )}
    >
      <NavWrapper />
      {children}
      <BottomMenu currUser={user?.username as string} />
      <Toaster />
    </section>
  )
}
