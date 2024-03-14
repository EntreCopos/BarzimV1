import { auth } from '@/auth'
import { getManyUsersNotPrivate, getUserByUsername } from '@/data/user'
import { UserFilter } from '@/components/filters/user-filter'

// Função assíncrona para renderizar a página de exploração de usuários
const ExploreUsersPage = async () => {
  const session = await auth()

  // Obtendo uma lista de usuários que não são privados
  const manyUsers = await getManyUsersNotPrivate(session?.user.id)

  if (!!manyUsers?.length) {
    return (
      <div className="flex min-h-screen flex-col justify-start gap-2 p-6 text-secondary-foreground">
        <h1 className="text-3xl">Encontrar Usuários</h1>
        <UserFilter usuarios={manyUsers} />
      </div>
    )
  }
}

export default ExploreUsersPage
