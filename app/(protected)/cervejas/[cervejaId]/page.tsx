import { getCervejaById } from '@/data/cervejas'
import Link from 'next/link'
export default async function Cerveja({
  params,
}: {
  params: { cervejaId: string }
}) {
  const cerveja = await getCervejaById(params.cervejaId)
  return (
    <>
      <pre>
        <Link href={`/cervejarias/${cerveja?.cervejaria.id}`}>
          {cerveja?.cervejaria.nome}
        </Link>
      </pre>
      <h1>{cerveja?.nomeCerveja}</h1>
      <h2>{cerveja?.tipoCerveja.nome}</h2>
      <p>{cerveja?.descriCerveja}</p>
      <code>{JSON.stringify(cerveja)} </code>
      <pre>
        {cerveja?.ingredientes.map((ingred) => (
          <span key={ingred}>{ingred} </span>
        ))}
      </pre>
    </>
  )
}
