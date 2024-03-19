import { type TypeObjectCerveja } from '@/data/data'
import Link from 'next/link'
import { CardVertCerveja } from '../cards/card-vertical-cerveja'
import { BeerName } from '../titles/beer-name'

const ListaCervejasDashboard: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  return (
    <ul className="grid grid-cols-[1fr_1fr] gap-4 pb-2 md:grid-cols-[1fr_1fr_1fr]">
      {cervejas.map((itemCerveja: TypeObjectCerveja): JSX.Element => {
        const {
          id,
          nomeCerveja,
          mainImage,
          createdAt,
          tipoCerveja: { nome: tipoCerveja },
        } = itemCerveja
        return (
          <li className="col-span-1" key={id}>
            <Link href={`/cervejas/${id}`}>
              <CardVertCerveja
                createdAt={createdAt as unknown as Date}
                nomeCerveja={nomeCerveja}
                imagem={mainImage ?? 'undefined'}
              >
                <BeerName cerveja={{ nomeCerveja, tipoCerveja }} />
              </CardVertCerveja>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ListaCervejasDashboard
