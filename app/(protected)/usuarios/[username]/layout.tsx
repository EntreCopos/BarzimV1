import { isFollowing } from '@/actions/social'
import { auth } from '@/auth'
import UnconventionalTabs from '@/components/stepper/stepper-listas/stepper-listas'
import { getUserMetrics, getUserSocialProfile } from '@/data/social'
import { getUserByUsername } from '@/data/user'
import { cn } from '@/lib/utils'
import { SocialBar } from '@/components/userprofile/social-bar'
import { UserDetails } from '@/components/userprofile/user-details'
import { Followers } from '@/components/social/followers'
import { Following } from '@/components/social/following'
import FollowForm from '@/components/forms/form-follow'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MdSettings } from 'react-icons/md'
import { type User } from '@/data/data'

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
  if (!session) throw new Error('session error')

  const myId = session?.user.id as string

  const user = await getUserSocialProfile(params.username)

  if (!user) return null

  const followers = user.followers.map(
    (followerData: any) => followerData.follower
  )
  const following = user.following.map(
    (followingData: any) => followingData.following
  )

  const avaliacoes = user._count.UserCerveja

  const isFollowing = followers.some((follower: User) => follower.id === myId)

  if (user === null) return null

  return (
    <div className={cn('flex h-full flex-col justify-between')}>
      <UserDetails user={user} />
      <div className="grid grid-cols-[repeat(5,1fr)] gap-2 px-6 pb-4 pt-0 ">
        <div className="col-span-1 rounded-md bg-slate-barzim p-1 text-center text-marfim-barzim">
          <span>{avaliacoes}</span>
          <h2 className="text-xs lowercase">avaliações</h2>
        </div>
        <Followers followers={followers} />
        <Following following={following} />

        {!!(myId !== user.id) ? (
          <FollowForm myId={myId} user={user.id} relationship={isFollowing} />
        ) : (
          <Link style={{ display: 'contents' }} href={`/config`}>
            <Button
              className="col-span-2 h-full w-full text-2xl text-black"
              variant="default"
            >
              <MdSettings />
              <span className="ml-2 hidden text-sm lg:inline">
                Configurações
              </span>
            </Button>
          </Link>
        )}
      </div>
      <div className="flex h-full flex-col justify-start text-accent-foreground">
        <UnconventionalTabs tabs={tabsData} />
        {children}
      </div>
    </div>
  )
}

export default UserPageLayout
