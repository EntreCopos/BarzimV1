import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { firstTwoLetters } from '@/lib/utils'
import { getUserByUsername } from '@/data/user'
import { isFollowing } from '@/actions/social'
import { handleRelationship } from '@/actions/social'
import { revalidatePath } from 'next/cache'

const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

const UserProfilePage = async ({
  params,
}: {
  params: { username: string }
}) => {
  const session = await auth()

  //o typescript n sabe mas se o usuario chega nessa pagina ele tem uma sessao valida
  //a nao ser que role um erro muitolocooo. ver um possivel tratamento melhor nesse caso
  const myId = session?.user.id ?? 'SEMPRE VAI EXISTIR AQUI O PORRA'

  const user = await getUserByUsername(params.username)

  //ok, tratamento melhor, com esse throw error aqui, deve ser invocada a pagina error
  //precisa ser criada ainda
  if (user === null)
    throw new Error('Não foi localizado um usuário com esse username')

  console.log('USER IS:::', user)

  // é possivel que esse dado seja extraivel no proprio objeto user acima
  // mas aqui é teste meus irmaozinho, aqui é teste
  const relationship = await isFollowing(myId, user.id)

  return (
    <main className='text-black" flex h-full items-center justify-center gap-4 bg-yellow-barzim'>
      <h1>Olá {session?.user.name}!</h1>
      <p>O usuário ao lado se chama {user?.name}. Elx já esta no Barzim.</p>

      <div key={user?.id}>
        <Avatar>
          <AvatarImage src={user?.image ?? defaultAvatarIcon} />
          <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="bg-destructive text-red-200 "> Experimental follow</div>
      {!!(myId !== user.id) && (
        <form
          action={async () => {
            'use server'
            await handleRelationship(myId, user.id)
            revalidatePath('/')
          }}
        >
          <Button variant="outline" type="submit">
            {relationship ? 'Deixar de seguir' : 'Seguir'}
          </Button>
        </form>
      )}
    </main>
  )
}

export default UserProfilePage
