/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { firstTwoLetters } from '@/lib/utils'

import Carousel from '@/components/dashboard/carousel/carousel'
import styles from './page.module.css'
import BeersCarousel from '@/components/dashboard/beers-carousel/beers-carousel'
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find'
import ListaCervejasDashboard from '@/components/lists/lista-cervejas-dashboard'
import { getRandomCervejasDashboard } from '@/data/cervejas'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import Link from 'next/link'



const DashboardPage = async () => {
  const session = await auth()

  const randCervejas = await getRandomCervejasDashboard()

  const user = {
    id: session?.user.id,
    name: session?.user.name,
    imageUrl:
      session?.user.image ??
      'undefined',
  }
      const buttonElement = (
        <button className={styles.customButton}>
         <Link href={'/cervejas'}>Ver mais</Link> 
        </button>
    );

  return (
    <div className={styles.bodyDashboard}>
      {/* <Carousel/> */}
      <div style={{ paddingInline: '2rem' }}>
      <SectionTitle
      title="Você pode se interessar por..."
      button={buttonElement} />
        
      </div>
      {/* <div className={styles.cardsBeers}></div> */}
      <ListaCervejasDashboard cervejas={randCervejas}/>
      {/* <BeersCarousel /> */}
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
