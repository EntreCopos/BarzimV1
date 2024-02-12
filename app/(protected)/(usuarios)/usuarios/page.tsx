import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'
import { getManyUsersNotPrivate } from '@/data/user'

const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

const ExploreUsersPage = async () => {
  const session = await auth()

  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  return (
    <main className='text-black" flex h-full items-center justify-center gap-4 bg-yellow-barzim'>
      <h1>Olá {session?.user.name}!</h1>
      <p>Os usuários ao lado já fazem parte do Barzim</p>
      {!!manyUsers &&
        manyUsers.map((user) => {
          return (
            <div key={user.id}>
              <Link href={user.username ?? 'dashboard'}>
                <Avatar>
                  <AvatarImage src={user?.image ?? defaultAvatarIcon} />
                  <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
                </Avatar>
              </Link>
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
          )
        })}
    </main>
  )
}

export default ExploreUsersPage
