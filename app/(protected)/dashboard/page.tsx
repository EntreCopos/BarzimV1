/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

function firstTwoLetters(name: string | undefined | null) {
  if (typeof name == 'undefined' || name == null) return 'US'

  return name.substring(0, 2).toUpperCase()
}

const SettingsPage = async () => {
  const session = await auth()

  console.log('USER SESSION IS:::', session)

  const user = {
    id: session?.user.id,
    name: session?.user.name,
    imageUrl:
      session?.user.image ??
      'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg',
  }

  return (
    <div className="flex h-full items-center justify-center gap-4 bg-yellow-barzim text-black">
      <Avatar>
        <AvatarImage src={user.imageUrl} />
        <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
      </Avatar>
      <form
        action={async () => {
          'use server'
          await signOut()
        }}
      >
        <Button variant="destructive" type="submit">
          Sair
        </Button>
      </form>
    </div>
  )
}

export default SettingsPage
