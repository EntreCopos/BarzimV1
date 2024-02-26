// Importando as dependências necessárias
import { auth } from '@/auth'
import { getManyUsersNotPrivate, getUserByUsername } from '@/data/user'
import { UserFilter } from '@/components/filters/user-filter'
import { getAllUsers } from '@/data/user'
import { ListaDeUsuarios } from '@/components/lists/lista-usuarios' // Importando o componente ListaDeUsuarios

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

  const listaDeUsuarios = await getAllUsers();

  if (!!listaDeUsuarios?.length) {
    // Retornando o componente JSX para renderizar a página
    return (
      <div className='text-white flex flex-col items-center justify-center gap-4 bg-black-radial-gradient p-6'>
        <div className='text-center'>
          <h1 className='text-2xl pb-3 '>Olá, <b className='text-yellow-barzim'>{session?.user.name}!</b></h1>
          <p className='pb-4'>Os usuários abaixo já fazem parte do Barzim 😊</p>
          <UserFilter usuarios={listaDeUsuarios}/>
        </div>
        {/* <ListaDeUsuarios usuarios={usersWithBio} /> */}
      </div>
    )
  }
}

export default ExploreUsersPage