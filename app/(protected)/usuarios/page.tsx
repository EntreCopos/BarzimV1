import { auth } from '@/auth'
import { getManyUsersNotPrivate } from '@/data/user'
import { UserFilter } from '@/components/filters/user-filter'

// Função assíncrona para renderizar a página de exploração de usuários
const ExploreUsersPage = async () => {
  const session = await auth()

  // Obtendo uma lista de usuários que não são privados
  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  if (!!manyUsers?.length) {
    return (
      <div className="space-y-6 px-6 py-8">
        <h1 className="text-3xl">Encontrar Usuários</h1>
        <UserFilter usuarios={manyUsers} />
      </div>
    )
  }
}

export default ExploreUsersPage
