import { BeerName } from '@/components/ui/beer-name'
import { cn } from '@/lib/utils'
import beerData from '@/data/cervejas-mock.json'

export default function Home() {
    return (
      <main className="flex h-auto flex-col items-center bg-black-radial-gradient">
        <div className="space-y-6 text-center">
          <h1 className={cn('text-6xl font-semibold text-marfim-barzim mt-20')}>
            Welcome to the War
          </h1>
          {beerData.map((beer, index) => (
            <BeerName key={index} cerveja={beer} />
          ))}
        </div>
      </main>
    );
  }
