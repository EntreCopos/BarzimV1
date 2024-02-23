/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { cn, firstTwoLetters } from '@/lib/utils'

import styles from './page.module.css'
import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find'
import ListaCervejasDashboard from '@/components/lists/lista-cervejas-dashboard'
import { getRandomCervejasDashboard } from '@/data/cervejas'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import Link from 'next/link'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getAllCervejaAvaliacoes } from '@/data/avaliacao'
import ReviewHeader from '@/components/review/review-header/review-header'
import ReviewDate from '@/components/review/review-date'

export const dynamic = 'force-dynamic'

const DashboardPage = async () => {
  const session = await auth()

  const randCervejas = await getRandomCervejasDashboard(4) //buscando 8 cervejas
  const latestReviews = await getAllCervejaAvaliacoes(6) //buscando as 6 ultimas

  if (latestReviews && latestReviews?.length > 0) {
    const imgArr = latestReviews[0].imagens
    imgArr.forEach((img) => {
      console.log(JSON.parse(img))
    })
  }

  const user = {
    id: session?.user.id,
    name: session?.user.name,
    imageUrl: session?.user.image ?? 'undefined',
  }
  const buttonElement = (
    <button className={styles.customButton}>
      <Link href={'/cervejas'}>Ver mais</Link>
    </button>
  )

  return (
    <div className={styles.bodyDashboard}>
      <WrapperDefaultPadding>
        <SectionTitle
          title="Você pode se interessar por..."
          button={buttonElement}
        />
        {randCervejas && <ListaCervejasDashboard cervejas={randCervejas} />}
      </WrapperDefaultPadding>
      <ListFindings />
      <WrapperDefaultPadding>
        <SectionTitle title="As últimas no Barzim" />
        <ul className={cn('flex list-none flex-col gap-2')}>
          {latestReviews.map((review) => {
            return (
              <li
                className={cn('rounded-sm bg-zinc-700 px-3 py-2 ')}
                key={review.id}
              >
                <ReviewDate isoDate={review.createdAt} />
                <ReviewHeader
                  userName={review.usuario.username as string}
                  beerName={review.cerveja.nomeCerveja}
                  beerId={review.cerveja.id}
                />
              </li>
            )
          })}
        </ul>
      </WrapperDefaultPadding>
      <div className="flex items-center justify-center mb-3 mt-2 gap-2">
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