import { BeerName } from '@/components/ui/beer-name'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-black-radial-gradient">
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl font-semibold text-yellow-barzim')}>
          Barzim (futuramente aqui)
        </h1>

        <div>
          <p className="text-2xl text-yellow-barzim mb-4">Olá do Next.JS</p>
        </div>
      </div>
    </main>
  )
}
