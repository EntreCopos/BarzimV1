import { type TypeObjectCerveja } from '@/data/data'
import Link from 'next/link'
import { CardVertCerveja } from '../cards/card-vertical-cerveja'
import { BeerName } from '../titles/beer-name'

const ListaCervejasDashboard: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  return (
    <ul
      style={{
        paddingBlock: '.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
      }}
    >
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
                <BeerName
                  variant="dark-mode"
                  cerveja={{ nomeCerveja, tipoCerveja }}
                />
              </CardVertCerveja>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ListaCervejasDashboard
