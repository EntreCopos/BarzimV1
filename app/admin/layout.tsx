import { Logo } from '@/components/logos/logo-barzim'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { currentRole } from '@/lib/auth'
import Link from 'next/link'
import { FaLock } from 'react-icons/fa'

const AdminLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const role = await currentRole()
  if (role !== 'ADMIN')
    return (
      <div className="mx-auto flex min-h-screen max-w-screen-md flex-col items-center justify-center space-y-10 px-6 text-center lg:px-10">
        <Logo variant="auto" width={200} />
        <Card>
          <CardContent className="flex w-full flex-col items-center justify-center space-y-6 px-6 py-10 text-center">
            <FaLock size={96} className="text-accent-foreground" />
            <h1 className="text-3xl">Você não pode ver esta página</h1>
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
  else return <>{children}</>
}

export default AdminLayout
