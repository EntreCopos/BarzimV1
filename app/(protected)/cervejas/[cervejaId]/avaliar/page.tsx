import { auth } from '@/auth'
import { AvaliacaoForm } from '@/components/forms/add-review-form'
import { getCervejaById } from '@/data/cervejas'
import { db } from '@/lib/db'
import { equal } from 'assert'
import Link from 'next/link'

const AvaliarCerveja = async ({
  params,
}: {
  params: { cervejaId: string }
}) => {
  const session = await auth()
  if (!session) throw new Error('session messed up')

  const cerveja = await getCervejaById(params.cervejaId)
  const myId = session?.user.id

  //checa se usuario e cerveja ja possui rel
  const relUserCerv = await db.userCerveja.findFirst({
    where: {
      cervejaId: +params.cervejaId,
      AND: {
        usuarioId: myId,
      },
    },
  })

  if (!!relUserCerv)
    return (
      <div className="flex flex-col gap-2 text-center text-white p-6 justify-center">
        <h1 className="text-3xl">Parece que você ja avaliou essa cerveja.</h1>
        <p>Por enquanto não é possivel editar sua avaliação.</p>
        <Link href={"/"}>
          <span className="block p-6 bg-yellow-barzim text-black hover:bg-slate-300">Voltar ao início</span>
        </Link>
      </div>
    )
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
