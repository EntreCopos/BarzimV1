import { Background } from '@/components/assets/background'
import { LoginForm } from '@/components/auth/login-form'
import { BoxRegister } from '@/components/auth/box-register'
import { Logo } from '@/components/logos/logo-barzim'
import { AuthFormsWrapper } from '@/components/wrappers/auth-forms-wrapper/auth-forms-wrapper'
import Link from 'next/link'

const LoginPage = () => {
  const headerTitle = (
    <h1 className="text-2xl">
      Avalie, descubra,{' '}
      <span className="font-bold text-yellow-barzim">aprecie</span>
    </h1>
  )

  const headerSubtitle = (
    <p className="pb-4">
      Sua cervejas, seus amigos.{' '}
      <span className="font-bold text-yellow-barzim">Seu Barzim.</span>
    </p>
  )

  const footer = (
    <p className="pt-6 text-center text-[10px] font-medium">
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
        <LoginForm />
      </BoxRegister>
    </AuthFormsWrapper>
  )
}

export default LoginPage
