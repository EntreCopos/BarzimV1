import { Background } from '@/components/assets/background'
import { LoginForm } from '@/components/auth/login-form'
import { BoxRegister } from '@/components/cards/box-register'
import { Logo } from '@/components/logos/logo-barzim'
import Link from 'next/link'

const LoginPage = () => {
  const headerTitle = (
    <h1 className='text-2xl'>Avalie, descubra, <span className='text-yellow-barzim font-bold'>aprecie</span></h1>
  )

  const headerSubtitle = (
    <p className='pb-4'>Sua cervejas, seus amigos. <span className='text-yellow-barzim font-bold'>Seu Barzim.</span></p>
  )

  const footer = (
    <p className='text-[10px] font-medium text-center pt-6 w-full'>Ao usar o webapp você afirma estar de acordo com nossos <span className='text-yellow-barzim font-bold'><Link href={"/legal/termos"}>Termos e Condições de Uso</Link></span>, nossa <span className='text-yellow-barzim font-bold'><Link href={"/legal/politicas-privacidade"}>Política de Cookies</Link></span > e nossa <span className='text-yellow-barzim font-bold'><Link href={"/legal/politicas-privacidade"}>Política de Privacidade</Link></span></p>
  )

  return (
    <div className="border-t border-gray-300 min-h-svh"> 
      <Background
        desktopBackground='md:bg-hero-login-desktop'
        mobileBackground='bg-hero-login-mobile'
      >
        <div className="flex flex-col md:flex-row h-full w-full justify-center items-center gap-5 md:gap-64">

          <Logo color='#FFEEC3' width={120} className='drop-shadow-sharp-shadow md:w-[25rem] mt-4' />

          <BoxRegister
            style={{ height: '75%' }}  
            headerTitle={headerTitle}
            headerSubtitle={headerSubtitle}
            showSocial={true}
            footer={footer}>
            <LoginForm />
          </BoxRegister>

        </div>
      </Background>
    </div>
  )
}

export default LoginPage
