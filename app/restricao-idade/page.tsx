import { Logo } from '@/components/logos/logo-barzim'
import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'
import { Button } from '@/components/ui/button'

export default async function RestricaoIdade() {
  return (
    <div className="w-full bg-accent text-accent-foreground">
      <div className="mx-auto grid min-h-screen max-w-screen-sm place-content-center space-y-10 px-6 py-10">
        <Logo width={200} variant="auto" />
        <div className="space-y-4">
          <h1 className="mb-4 text-2xl font-medium">Restrição de Idade</h1>
          <p>
            Lamentamos, mas <b>você não tem idade suficiente</b> para acessar
            este aplicativo.
          </p>
          <p>
            O Barzim está comprometido em promover o{' '}
            <b>consumo responsável de álcool.</b> De acordo com nossos termos de
            serviço e as leis locais, só é permitido o acesso a esta aplicação
            para <b>usuários com idade legal</b> para consumir bebidas
            alcoólicas em seu país de residência.
          </p>
          <p>
            Se você ainda não tem idade legal para consumir bebidas alcoólicas,
            recomendamos que você saia da aplicação agora.
          </p>
          <p>
            Se você é maior de idade e deseja acessar o aplicativo, por favor,{' '}
            <b>verifique sua idade novamente</b> e insira-a corretamente para
            continuar.
          </p>
        </div>
        <Button className="w-fit" variant="default" size="lg">
          <GoArrowLeft className="mr-2" />
          <Link href={'/age-verification'}>Voltar</Link>
        </Button>
      </div>
    </div>
  )
}
