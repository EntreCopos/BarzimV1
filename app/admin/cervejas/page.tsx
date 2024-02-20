import { Poppins } from 'next/font/google'

import { cn } from '@/lib/utils'
import { getAllCervejas } from '@/data/cervejas'
import { currentRole } from '@/lib/auth'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

export default async function Cervejas() {
  const role = await currentRole()
  if (role !== 'ADMIN') return <h1>Você não pode ver esta página</h1>

  const listaDeCervejas = await getAllCervejas()
  if (!!listaDeCervejas?.length)
    return (
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 to-yellow-500">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              'text-6xl font-semibold text-white drop-shadow-md',
              font.className
            )}
          >
            Barzim
          </h1>

          <div>{JSON.stringify(listaDeCervejas)}</div>
        </div>
      </main>
    )
  else return <h1>oops, faltou cerveja</h1>
}
