import { auth } from '@/auth'
import { AvaliacaoForm } from '@/components/forms/add-review-form'
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

  console.log('user has reviewed check', userHasReviewed)

  if (!!userHasReviewed) redirect(`/cervejas/${params.cervejaId}/avaliou`)
  else
    return (
      <>
        <div style={{ color: '#fffeef' }}>
          Avaliando cerveja: {cerveja?.nomeCerveja}
        </div>
        <AvaliacaoForm idCerveja={params.cervejaId} idUser={myId} />
      </>
    )
}

export default AvaliarCerveja
