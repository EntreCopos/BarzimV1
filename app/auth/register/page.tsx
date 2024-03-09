import { Background } from '@/components/assets/background'
import { RegisterForm } from '@/components/auth/register-form'
import { BoxRegister } from '@/components/cards/box-register'
import { Logo } from '@/components/logos/logo-barzim'
import { AuthFormsWrapper } from '@/components/wrappers/auth-forms-wrapper/auth-forms-wrapper'
import Link from 'next/link'

const RegisterPage = () => {
  const headerTitle = (
    <h1 className="text-2xl">
      Vem pro <span className="font-bold text-yellow-barzim">Barzim</span>
    </h1>
  )

  const headerSubtitle = (
    <p className="pb-4">
      Preencha os campos abaixo e já vamos encontrar um lugar perfeito para
      você.
    </p>
  )

  const footer = (
    <p className="w-full pt-6 text-center text-[10px] font-medium">
      Ao usar o webapp você afirma estar de acordo com nossos{' '}
      <span className="font-bold text-yellow-barzim">
        <Link href={'/legal/termos'}>Termos e Condições de Uso</Link>
      </span>
      , nossa{' '}
      <span className="font-bold text-yellow-barzim">
        <Link href={'/legal/politicas-privacidade'}>Política de Cookies</Link>
      </span>{' '}
      e nossa{' '}
      <span className="font-bold text-yellow-barzim">
        <Link href={'/legal/politicas-privacidade'}>
          Política de Privacidade
        </Link>
      </span>
    </p>
  )

  return (
    <AuthFormsWrapper>
      <Logo color="#fffeef" width={240} className="mx-auto" />
      <BoxRegister
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        showSocial={true}
        footer={footer}
      >
        <RegisterForm />
      </BoxRegister>
    </AuthFormsWrapper>
  )
}

export default RegisterPage
