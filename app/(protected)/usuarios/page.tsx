// Importando as dependências necessárias
import { auth } from '@/auth'
import { getManyUsersNotPrivate, getUserByUsername } from '@/data/user'
import { UserFilter } from '@/components/filters/user-filter'
import { ListaDeUsuarios } from '@/components/lists/lista-usuarios' // Importando o componente ListaDeUsuarios

// Função assíncrona para renderizar a página de exploração de usuários
const ExploreUsersPage = async () => {
  // Obtendo a sessão atual do usuário
  const session = await auth()

  // Obtendo uma lista de usuários que não são privados
  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  // manyUsers?.map((user) => console.log(user))

  if (!!manyUsers?.length) {
    // Retornando o componente JSX para renderizar a página
    return (
      <div className="flex flex-col justify-center gap-2 p-6 text-white">
        <h1 className="text-3xl ">Usuários</h1>
        <UserFilter usuarios={manyUsers} />
      </div>
    )
  }
}

export default ExploreUsersPage
