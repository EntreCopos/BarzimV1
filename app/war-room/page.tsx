import { CardHorizontalCerveja } from '@/components/cards/card-horizontal-cerveja'
import { CardVertCerveja } from '@/components/cards/card-vertical-cerveja'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center bg-black-radial-gradient justify-center">
      <div className="space-y-6 text-center">
        <div className="hero flex items-baseline gap-7 mb-14">
          <h1 className={cn('text-6xl font-semibold text-marfim-barzim mt-20')}>
            Welcome to the
          </h1>
          <Logo variant='secondary' width={180} />
        </div>

        <div className='flex gap-10 '>
          <CardVertCerveja nomeCerveja="Beck's" novidade={true} />
          <CardVertCerveja nomeCerveja="Brahma Chopp" novidade={false} />
          <CardVertCerveja nomeCerveja="Serrana" novidade={false} />
        </div>

        <div className='flex gap-10 '>
          <CardHorizontalCerveja nomeCerveja='Brahma Chopp' novidade={false} />
          <CardHorizontalCerveja nomeCerveja='Bohemia Puro Malte' novidade={true} />
        </div>
      </div>
    </main>
  )
}