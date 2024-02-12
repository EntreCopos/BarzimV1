import { auth } from '@/auth'
import { db } from '@/lib/db'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { firstTwoLetters } from '@/lib/utils'
import { getUserByUsername } from '@/data/user'

const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

const UserProfilePage = async ({
  params,
}: {
  params: { username: string }
}) => {
  const session = await auth()

  const user = await getUserByUsername(params.username)

  console.log('USER IS:::', user)

  return (
    <main className='text-black" flex h-full items-center justify-center gap-4 bg-yellow-barzim'>
      <h1>Olá {session?.user.name}!</h1>
      <p>O usuário ao lado se chama {user?.name}. Elx já esta no Barzim.</p>

      <div key={user?.id}>
        <Avatar>
          <AvatarImage src={user?.image ?? defaultAvatarIcon} />
          <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
        </Avatar>
        {/* <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <Button variant="destructive" type="submit">
                Sair
              </Button>
            </form> */}
      </div>
    </main>
  )
}

export default UserProfilePage
