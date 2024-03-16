import { type TypeObjectCerveja } from '@/data/data'
import Link from 'next/link'
import { CardVertCerveja } from '../cards/card-vertical-cerveja'
import { BeerName } from '../titles/beer-name'
import styles from './lista-cervejas-dashboard.module.css'

const ListaCervejasDashboard: React.FC<{ cervejas: TypeObjectCerveja[] }> = ({
  cervejas,
}) => {
  return (
    <ul className={styles.gridCerveja}>
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
