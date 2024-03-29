import Image from 'next/image'
import imagemNinguemAvaliou from '@/public/icons/empty-list-icon.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface NinguemAvaliouProps {
  cervejaId: string | number
}

const NinguemAvaliou: React.FC<NinguemAvaliouProps> = ({ cervejaId }) => {
  return (
    <div className="space-y-4 px-6 py-12 text-center">
      <Image
        src={imagemNinguemAvaliou}
        alt="Imagem da Cerveja"
        className="mx-auto aspect-square max-w-[120px] object-contain"
      />
      <h2 className="text-3xl font-semibold text-accent-foreground">
        Tão vazio!
      </h2>
      <p className="text-lg text-secondary-foreground">
        Parece que ninguém avaliou essa cerveja ainda
      </p>
      <Button variant="outline">
        <Link href={`${cervejaId}/avaliar`}>Seja o Primeiro</Link>
      </Button>
    </div>
  )
}

export default NinguemAvaliou
