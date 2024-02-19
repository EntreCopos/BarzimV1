import { auth } from '@/auth'
import BoxReviewAvaliada from '@/components/wrappers/box-review-avaliada/box-review-avaliada'
import { relUserCerv } from '@/data/avaliacao'
import { getCervejaNameById } from '@/data/cervejas'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const AvaliarCerveja = async ({
  params,
}: {
  params: { cervejaId: string }
}) => {
  const session = await auth()
  if (!session) throw new Error('session messed up')

  const cerveja = await getCervejaNameById(params.cervejaId)
  const myId = session?.user.id

  //checa se usuario e cerveja ja possui rel
  const isRelUserCerveja = await relUserCerv(myId, params.cervejaId)

  if (!!isRelUserCerveja)
    return (
      <BoxReviewAvaliada beerName={cerveja?.nomeCerveja as string}>
        <Link href={'/cervejas'}>
          <button className="mt-6 block bg-yellow-barzim p-6 text-black hover:bg-slate-300">
            Voltar para Cervejas
          </button>
        </Link>
      </BoxReviewAvaliada>
    )
  else redirect(`/cervejas/${params.cervejaId}/avaliar`)
}

export default AvaliarCerveja
