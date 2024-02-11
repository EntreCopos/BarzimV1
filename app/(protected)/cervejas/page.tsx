import { cn } from '@/lib/utils'
import { getAllCervejas } from '@/data/cervejas'
export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  if (!!listaDeCervejas?.length)
    return (
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md')}>
          Barzim
        </h1>

        <div>{JSON.stringify(listaDeCervejas)}</div>
      </div>
    )
  else return <h1>oops, faltou cerveja</h1>
}
