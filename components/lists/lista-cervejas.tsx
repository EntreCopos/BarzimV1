import Link from 'next/link'
import { BeerName } from '../titles/beer-name'
import { CardHorizontalCerveja } from '../cards/card-horizontal-cerveja'
import { type TypeObjectCerveja } from '@/data/data'

interface TItemCerveja {
  id: number
  nomeCerveja: string
  mainImage: string | null
  tipoCerveja: { nome: string}
}

const ListaDeCervejas: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({ cervejas }) => {
  return (
    <ul className="flex flex-col gap-4">
      {cervejas.map((itemCerveja: TItemCerveja) : JSX.Element => {
          const {
            id,
            nomeCerveja,
            mainImage,
            tipoCerveja: { nome: tipoCerveja },
          } = itemCerveja as TItemCerveja
          return (
          <li key={id}>
            <Link href={`/cervejas/${id}`}>
              <CardHorizontalCerveja
                nomeCerveja={nomeCerveja}
                imagem={mainImage ?? 'undefined'}
              >
                <BeerName
                  variant="dark-mode"
                  cerveja={{ nomeCerveja, tipoCerveja }}
                />
              </CardHorizontalCerveja>
            </Link>
          </li>
        )}
      )}
    </ul>
  )
}

export default ListaDeCervejas