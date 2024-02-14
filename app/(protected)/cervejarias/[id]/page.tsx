import { getCervejasByCervejaria } from '@/data/cervejas'
import Link from 'next/link'

export default async function CervejariaByIdPage({
  params,
}: {
  params: { id: string }
}) {
  const cervejariaData = await getCervejasByCervejaria(params.id)
  console.log(cervejariaData?.nome)

  return (
    <>
      <h1>Cervejaria {cervejariaData?.nome}</h1>
      <ul>
        {cervejariaData?.CervejaShadow.map((cerveja) => {
          return (
            <li key={cerveja.id}>
              <h2>
                <Link href={`/cervejas/${cerveja.id}`}>
                  {cerveja.nomeCerveja}
                </Link>
              </h2>
            </li>
          )
        })}
      </ul>
    </>
  )
}
