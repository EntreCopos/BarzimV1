import { cn } from '@/lib/utils'
import { getAllCervejas } from '@/data/cervejas'
import { BeerName } from '@/components/titles/beer-name'
import { CardVertCerveja } from '@/components/cards/card-vertical-cerveja'

import { CardHorizontalCerveja } from '@/components/cards/card-horizontal-cerveja'
import Link from 'next/link'

export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  if (!!listaDeCervejas?.length)
    return (
        <ul className='flex flex-col gap-4'>
          {listaDeCervejas.map(
            ({
              id,
              nomeCerveja,
              mainImage,
              tipoCerveja: { nome: tipoCerveja },
            }) => {
              return (
                <li key={id}>
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
            }
          )}
        </ul>
    )
  else throw new Error('faltou cerveja')
}
