// Importando as dependências necessárias
import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getManyUsersNotPrivate, getUserByUsername } from '@/data/user'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'

// URL para o ícone de avatar padrão
const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

// Função assíncrona para renderizar a página de exploração de usuários
const ExploreUsersPage = async () => {
  // Obtendo a sessão atual do usuário
  const session = await auth()

  // Obtendo uma lista de usuários que não são privados
  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  // Obtendo a bio para cada usuário
  const usersWithBio = manyUsers ? await Promise.all(
    manyUsers.map(async (user) => {
      if (user.username) {
        const userWithBio = await getUserByUsername(user.username)
        return { ...user, bio: userWithBio?.bio }
      }
      return user
    })
  ) : []

  // Retornando o componente JSX para renderizar a página
  return (
    <main className='text-white flex flex-col h-full items-center justify-center text-center gap-4 bg-black-radial-gradient mt-6'>
      <div>
        <h1 className='text-2xl pb-3'>Olá, <b className='text-yellow-barzim'>{session?.user.name}!</b></h1>
        <p>Os usuários abaixo já fazem parte do Barzim</p>
      </div>
      <div className='flex flex-col'>
        {/* Verificando se existem usuários */}
        {!!usersWithBio &&
          // Mapeando cada usuário para um componente Avatar
          usersWithBio.map((user) => {
            return (
              <div key={user.id} className='p-2 flex items-start gap-2'>
                              
                {/* Link para a página de perfil do usuário */}
                <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                  <Avatar>
                    {/* Imagem do Avatar, com fallback para o ícone padrão */}
                    <AvatarImage src={user?.image ?? defaultAvatarIcon} className='h-12' />
                    {/* Fallback para as duas primeiras letras do nome do usuário se a imagem não estiver disponível */}
                    <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
                  </Avatar>
                </Link>

                <div className='flex flex-col items-start'>
                  <div>{user?.name}</div>
                  <div className='text-sm text-gray-500 break-words'>{user?.bio}</div>
                </div>
              </div>
            )
          })}
      </div>
    </main>
  )
}

export default ExploreUsersPage