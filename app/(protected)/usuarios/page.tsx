import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getManyUsersNotPrivate } from '@/data/user'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'

const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

const ExploreUsersPage = async () => {
  const session = await auth()

  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  return (
    <main className='text-white flex flex-col h-full items-center justify-center text-center gap-4 bg-black-radial-gradient mt-6'>
      <div>
        <h1 className='text-2xl pb-3'>Olá, <b className='text-yellow-barzim'>{session?.user.name}!</b></h1>
        <p>Os usuários abaixo já fazem parte do Barzim</p>
      </div>
      <div className='flex flex-wrap justify-center'>
        {!!manyUsers &&
          manyUsers.map((user) => {
            return (
              <div key={user.id} className='p-2'>
                <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                  <Avatar>
                    <AvatarImage src={user?.image ?? defaultAvatarIcon} className='h-12 w-12' />
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
      </div>
    </main>
  )
}

export default ExploreUsersPage
