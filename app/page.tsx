import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-yellow-400">
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl font-semibold text-slate-800 ')}>
          Barzim (futuramente aqui)
        </h1>

        <div>
          <p className="text-2xl text-slate-800">Olá do Next.JS</p>
        </div>
      </div>
    </main>
  )
}
