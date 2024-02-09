import { BeerName } from '@/components/ui/beer-name';
import { CardVertCerveja } from '@/components/ui/card-vert-cerveja';
import beerData from '@/data/cervejas-mock.json';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center bg-black-radial-gradient">
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl font-semibold text-marfim-barzim mt-20')}>
          Welcome to the War
        </h1>

        <div className='flex gap-10 '>
          <CardVertCerveja nomeCerveja="Beck's" novidade={true} />
          <CardVertCerveja nomeCerveja="Brahma Chopp" novidade={false} />
          <CardVertCerveja nomeCerveja="Serrana" novidade={false} />
        </div>
      </div>
    </main>
  );
}