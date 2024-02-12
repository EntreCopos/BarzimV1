import { getCervejaById } from '@/data/cervejas'

export default async function Cerveja({
  params,
}: {
  params: { cervejaId: string }
}) {
  const idNumber: number = +params.cervejaId
  const cerveja = await getCervejaById(idNumber)
  return (
    <>
      <h1>Cerveja ID: {params.cervejaId}</h1>
      <div>{JSON.stringify(cerveja)}</div>
    </>
  )
}
