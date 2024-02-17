import { auth } from '@/auth'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { firstTwoLetters, sanitizeUserLink } from '@/lib/utils'
import { getUserByUsername } from '@/data/user'
import { cn } from '@/lib/utils'
import { isFollowing, handleRelationship } from '@/actions/social'
import { revalidatePath } from 'next/cache'
import { getUserMetrics } from '@/data/social'
import {
  getCervejaAvaliacoes,
  getUserCervejaFavoritas,
  getUserCerverjasQueroBeber,
} from '@/data/avaliacao'
import AvatarReview from '@/components/avatar/avatar-review/avatar-review'

import styles from './user_page.module.css'
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas'

enum SocialLabels {
  avaliacaoUserCount = 'Avaliações',
  userFollowingsCount = 'Seguindo',
  userFollowersCount = 'Seguidores',
}

const tabsData = [
  {
    title: 'Feed',
    link: '/feed',
  },
  {
    title: 'Já Bebi',
    link: '/jabebi',
  },
  {
    title: 'Vou Beber',
    link: '/querobeber',
  },
]

const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'

const UserProfilePage = async ({
  params,
}: {
  params: { username: string }
}) => {
  const session = await auth()

  if (!session) throw new Error('session messed up')

  const myId = session?.user.id
  const user = await getUserByUsername(params.username)
  const metrics: Metrics = await getUserMetrics(params.username)

  interface Metrics {
    [key: string]: number
  }

  interface SocialLabels {
    [key: string]: string
  }

  const avaliacoes = await getCervejaAvaliacoes()

  const favoritasUser = await getUserCervejaFavoritas('elianoliveira234647')
  const queroBeberUser = await getUserCerverjasQueroBeber('elianoliveira234647')

  console.log('user metrics: ', { metrics })
  console.log({ user })

  //ok, tratamento melhor, com esse throw error aqui, deve ser invocada a pagina error
  //precisa ser criada ainda
  if (user === null)
    throw new Error('Não foi localizado um usuário com esse username')

  // é possivel que esse dado seja extraivel no proprio objeto user acima
  // mas aqui é teste meus irmaozinho, aqui é teste
  const relationship = await isFollowing(myId, user.id)

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
          <form
            action={async () => {
              'use server'
              await handleRelationship(myId, user.id)
              revalidatePath('/')
            }}
          >
            <button type="submit" className={styles.followBtn}>
              {relationship ? 'Deixar de seguir' : 'Seguir'}
            </button>
          </form>
        ) : (
          <button className={styles.followBtn}>Configurações</button>
        )}
      </div>
      <div className={styles.contentBody}>
        <UnconventionalTabs tabs={tabsData} />
      </div>
    </>
  )
}

export default UserProfilePage