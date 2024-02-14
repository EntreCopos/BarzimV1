import { getCervejarias } from '@/data/cervejas'
import Link from 'next/link'

export default async function CervejariasPage() {
  const cervejarias = await getCervejarias()

  return (
    <>
      <h1>Cervejarias</h1>
      <ul>
        {cervejarias?.map((cervejaria) => {
          return (
            <li key={cervejaria.id}>
              <h2>
                <Link href={`cervejarias/${cervejaria.id}`}>
                  {cervejaria.nome}
                </Link>
              </h2>
            </li>
          )
        })}
      </ul>
    </>
  )
}
