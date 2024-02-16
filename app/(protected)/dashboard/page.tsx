/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { firstTwoLetters } from '@/lib/utils'

import Carousel from '@/components/dashboard/carousel/carousel'
import styles from './page.module.css'
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel'
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find'

const DashboardPage = async () => {
  const session = await auth()

  const user = {
    id: session?.user.id,
    name: session?.user.name,
    imageUrl:
      session?.user.image ??
      'undefined',
  }

  return (
    <div className={styles.bodyDashboard}>
      {/* <Carousel/> */}
      <BeersCarousel />
      <ListFindings />
      <div className="flex h-fit w-full justify-center gap-4 align-middle">
        <Avatar>
          <AvatarImage src={user.imageUrl} />
          <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
        </Avatar>
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button variant="destructive" type="submit">
            Sair
          </Button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage
