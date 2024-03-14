import { isFollowing } from '@/actions/social'
import { auth } from '@/auth'
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas'
import { getUserMetrics } from '@/data/social'
import { getUserByUsername } from '@/data/user'
import { cn } from '@/lib/utils'
import { SocialBar } from '@/components/profile-social-bar/social-bar'
import { UserDetails } from '@/components/userprofile/user-details'

interface Metrics {
  [key: string]: number
}

const tabsData = [
  { title: 'Feed', link: '' },
  { title: 'Já Bebi', link: '/view_jabebi' },
  { title: 'Quero Beber', link: '/view_querobeber' },
]

const UserPageLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { username: string }
}) => {
  const session = await auth()
  if (!session) throw new Error('session messed up')

  const myId = session?.user.id as string

  const user = await getUserByUsername(params.username)
  const metrics: Metrics = await getUserMetrics(params.username)

  //ok, tratamento melhor, com esse throw error aqui, deve ser invocada a pagina error
  //precisa ser criada ainda
  if (user === null)
    throw new Error('Não foi localizado um usuário com esse username')

  // é possivel que esse dado seja extraivel no proprio objeto user acima
  const relationship = !!(await isFollowing(myId, user.id))

  return (
    <div className={cn('flex h-full min-h-screen flex-col justify-between')}>
      <div className={cn('h-fit')}>
        <UserDetails user={user} />
        <SocialBar
          metrics={metrics}
          myId={myId}
          userId={user?.id as string}
          relationship={relationship}
        />
      </div>
      <div
        className={cn(
          'flex h-full flex-col justify-start bg-accent text-accent-foreground'
        )}
      >
        <UnconventionalTabs tabs={tabsData} />
        {children}
      </div>
    </div>
  )
}

export default UserPageLayout
