import { auth } from '@/auth'
import { AvaliacaoForm } from '@/components/forms/add-review-form'
import ReviewTitle from '@/components/titles/review-title/review-title'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { relUserCerv, userHasReviewedCervejaById } from '@/data/avaliacao'
import { getCervejaById } from '@/data/cervejas'
import { redirect } from 'next/navigation'

const AvaliarCerveja = async ({
  params,
}: {
  params: { cervejaId: string }
}) => {
  const session = await auth()
  if (!session) throw new Error('session messed up')

  const cerveja = await getCervejaById(params.cervejaId)
  const myId = session?.user.id as string

  //checa se usuario e cerveja ja possui rel
  const isRelUserCerveja = await relUserCerv(myId, params.cervejaId)

  const userHasReviewed = await userHasReviewedCervejaById(
    params.cervejaId,
    myId
  )


  if (!!userHasReviewed) redirect(`/cervejas/${params.cervejaId}/avaliou`)
  else
    return (
      <>
        <WrapperDefaultPadding style={{ marginTop: '30px' }}>
          <ReviewTitle beerName={cerveja?.nomeCerveja as string} />
        </WrapperDefaultPadding>
        <AvaliacaoForm
          nomeCerveja={cerveja?.nomeCerveja as string}
          idCerveja={params.cervejaId}
          idUser={myId}
        />
      </>
    )
}

export default AvaliarCerveja
