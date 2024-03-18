import { FaLock } from 'react-icons/fa'
import { Logo } from '../logos/logo-barzim'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'

export const NaoAutorizado = () => {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center space-y-10 px-6 text-center lg:px-10">
      <Logo variant="auto" width={200} />
      <Card>
        <CardContent className="flex w-full flex-col items-center justify-center space-y-6 px-6 py-10 text-center">
          <FaLock size={96} className="text-accent-foreground" />
          <h1 className="text-3xl">Não autorizado</h1>
          <p className="text-foreground/80">
            Se voce é um administrador, entre em contato com suporte.
          </p>
          <div className="flex w-full justify-center gap-4">
            <Link href={'/dashboard'}>
              <Button variant="barzimPrimary">Voltar ao Barzim</Button>
            </Link>
            <Link href="mailto:admin@barzim.tech">
              <Button variant={'ghost'}>Falar com Suporte</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
