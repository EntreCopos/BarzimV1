import Link from 'next/link'
import { BeerName } from '../titles/beer-name'
import { CardHorizontalCerveja } from '../cards/card-horizontal-cerveja'
import { type TypeObjectCerveja } from '@/data/data'

const ListaDeCervejas: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  return (
    <ul className="flex flex-col gap-4">
      {cervejas.map((itemCerveja: TypeObjectCerveja): JSX.Element => {
        const {
          id,
          nomeCerveja,
          mainImage,
          createdAt,
          tipoCerveja: { nome: tipoCerveja },
        } = itemCerveja
        return (
          <li key={id}>
            <Link href={`/cervejas/${id}`}>
              <CardHorizontalCerveja
                nomeCerveja={nomeCerveja}
                imagem={mainImage ?? 'undefined'}
                createdAt={createdAt as unknown as Date}
              >
                <BeerName
                  variant="dark-mode"
                  cerveja={{ nomeCerveja, tipoCerveja }}
                />
              </CardHorizontalCerveja>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ListaDeCervejas
