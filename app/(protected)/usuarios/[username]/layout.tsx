import { isFollowing } from '@/actions/social'
import { auth } from '@/auth'
import AvatarReview from '@/components/avatar/avatar-review/avatar-review'
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { getUserMetrics } from '@/data/social'
import { getUserByUsername } from '@/data/user'
import { cn, firstTwoLetters, sanitizeUserLink } from '@/lib/utils'
import { RiUserUnfollowLine, RiUserFollowLine } from 'react-icons/ri'
import styles from './layout.module.css'
import FollowForm from '@/components/forms/form-follow'

enum SocialLabels {
  avaliacaoUserCount = 'Avaliações',
  userFollowingsCount = 'Seguindo',
  userFollowersCount = 'Seguidores',
}

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

  const session = await auth()
  if (!session) throw new Error('session messed up')

  const myId = session.user.id
  const user = await getUserByUsername(params.username)
  const metrics: Metrics = await getUserMetrics(params.username)

  //ok, tratamento melhor, com esse throw error aqui, deve ser invocada a pagina error
  //precisa ser criada ainda
  if (user === null)
    throw new Error('Não foi localizado um usuário com esse username')

  // é possivel que esse dado seja extraivel no proprio objeto user acima
  // mas aqui é teste meus irmaozinho, aqui é teste
  const relationship = !!await isFollowing(myId, user.id)

  return (
    <>
      <div className={cn('', styles.profileHeaderWrapper)}>
        <div className={styles.avatarWrapper}>
          <Avatar style={{ width: 120, height: 120 }}>
            <AvatarReview
              avatarSrc={user.image as string}
              width={120}
              height={120}
            />
            {!user.image && (
              <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
            )}
          </Avatar>
        </div>
        <div className={styles.infoTxtWrapper}>
          <h2>{user.name}</h2>
          <section>
            <h3>Bio</h3>
            <p>{user.bio}</p>
          </section>
          {user.link && (
            <section className={styles.link}>
              <h3>Link</h3>
              <a href={user.link}>{sanitizeUserLink(user.link as string)}</a>
            </section>
          )}
        </div>
      </div>
      <div className={cn('', styles.interactionsBar)}>
        <section className={styles.slots}>
          {Object.keys(metrics).map((metricKey: keyof typeof metrics) => {
            const metric = metricKey as keyof typeof SocialLabels
            return (
              <div className={styles.slot} key={metric}>
                <span>{metrics[metricKey]}</span>
                <h2>{SocialLabels[metric]}</h2>
              </div>
            )
          })}
        </section>
        {!!(myId !== user.id) ? (
          <FollowForm
            myId={myId}
            user={user.id}
            relationship={relationship}
          />
        ) : (
          <button className={styles.followBtn}>Configurações</button>
        )}
      </div>
      <div className={styles.contentBody}>
        <UnconventionalTabs tabs={tabsData} />
        {children}
      </div>
    </>
  )
}

export default UserPageLayout
