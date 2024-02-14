import Link from 'next/link'
import { BeerName } from '../titles/beer-name'
import { CardHorizontalCerveja } from '../cards/card-horizontal-cerveja'
import { type TypeListaDeCerveja } from '@/data/data'

function ListaDeCervejas({ cervejas }: { cervejas: TypeListaDeCerveja }) {
  return (
    <ul className="flex flex-col gap-4">
      {cervejas.map(
        ({
          id,
          nomeCerveja,
          mainImage,
          tipoCerveja: { nome: tipoCerveja },
        }: {
          id: number,
          nomeCerveja: string,
          mainImage: string,
          tipoCerveja: {nome: string}
        }) => (
          <li style={{ display: 'contents' }} key={id}>
            <Link href={`/cervejas/${id}`}>
              <CardHorizontalCerveja
                nomeCerveja={nomeCerveja}
                imagem={mainImage}
              >
                <BeerName
                  variant="dark-mode"
                  cerveja={{ nomeCerveja, tipoCerveja }}
                />
              </CardHorizontalCerveja>
            </Link>
          </li>
        )
      )}
    </ul>
  )
}

export default ListaDeCervejas