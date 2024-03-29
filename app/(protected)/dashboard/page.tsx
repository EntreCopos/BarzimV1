/* eslint-disable @next/next/no-img-element */
import { auth } from '@/auth'
import { cn, normalizeTitleCase } from '@/lib/utils'

import ListFindings from '@/components/dashboard/list-where-you-find/list-where-you-find'
import ListaCervejasDashboard from '@/components/lists/lista-cervejas-dashboard'
import { getRandomCervejasDashboard } from '@/data/cervejas'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import Link from 'next/link'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getAllCervejaAvaliacoes } from '@/data/avaliacao'
import ReviewHeader from '@/components/review/review-header/review-header'
import RelativeDate from '@/components/titles/relative-date/relative-date'
import { Badge } from '@/components/ui/badge'
import { type TypeObjectCerveja } from '@/data/data'

export const dynamic = 'force-dynamic'

const DashboardPage = async () => {
  const session = await auth()

  const randCervejas = (await getRandomCervejasDashboard(
    6
  )) as unknown as TypeObjectCerveja[]
  const latestReviews = await getAllCervejaAvaliacoes(6)

  // if (latestReviews && latestReviews?.length > 0) {
  //   const imgArr = latestReviews[0].imagens
  //   imgArr.forEach((img) => {
  //     console.log(JSON.parse(img))
  //   })
  // }

  const user = {
    id: session?.user.id,
    name: session?.user.name,
    imageUrl: session?.user.image ?? 'undefined',
  }
  const buttonElement = (
    <Badge
      className="rounded-full text-xs font-normal hover:border-none hover:bg-primary hover:text-accent"
      variant="outline"
    >
      <Link href={'/cervejas'}>Ver mais</Link>
    </Badge>
  )

  return (
    <>
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
          {latestReviews.map(({ usuario, cerveja, id, createdAt }) => {
            return (
              <li
                className={cn('rounded-sm bg-gray-cards px-3 py-2 ')}
                key={id}
              >
                <RelativeDate className="text-gray-400" date={createdAt} />
                <ReviewHeader
                  userName={usuario.username as string}
                  beerName={normalizeTitleCase(cerveja.nomeCerveja)}
                  beerId={cerveja.id}
                />
              </li>
            )
          })}
        </ul>
      </WrapperDefaultPadding>
    </>
  )
}

export default DashboardPage
