import { getCervejaById } from '@/data/cervejas'

export default async function Cerveja({
  params,
}: {
  params: { slug: string }
}) {

  const cerveja = await getCervejaById(params.slug)
  return (
    <>
      <h1>Cerveja ID: {params.slug}</h1>
      <div>{JSON.stringify(cerveja)}</div>
    </>
  )
}
