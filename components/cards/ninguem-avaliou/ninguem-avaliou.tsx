import Image from 'next/image'
import styles from './ninguem-avaliou.module.css'
import imagemNinguemAvaliou from '@/public/icons/empty-list-icon.png'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface NinguemAvaliouProps {
  cervejaId: string
}

const NinguemAvaliou: React.FC<NinguemAvaliouProps> = ({ cervejaId }) => {
  return (
    <div className={styles.container}>
      <Image
        src={imagemNinguemAvaliou}
        alt="Imagem da Cerveja"
        className={cn(styles.image, 'mx-auto')}
      />

      <p className="pb-6 text-lg text-secondary-foreground">
        Parece que ninguém avaliou essa cerveja ainda
      </p>

      <Button variant={'outline'}>
        <Link href={`${cervejaId}/avaliar`}>Seja o Primeiro</Link>
      </Button>
    </div>
  )
}

export default NinguemAvaliou
