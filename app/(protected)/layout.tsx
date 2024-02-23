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
    <div className="flex flex-col min-h-screen bg-black-radial-gradient md:mx-auto md:max-w-[422px]">
      <NavWrapper /> {/* Move NavWrapper to the top */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <main className="flex-1">{children}</main>
      </div>
      <BottomMenu currUser={user?.username as string} />
      <Toaster />
    </div>
  )
}
