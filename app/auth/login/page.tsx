import { Background } from '@/components/assets/background'
import { LoginForm } from '@/components/auth/login-form'
import { BoxRegister } from '@/components/cards/box-register'
import { Logo } from '@/components/logos/logo-barzim'
import Link from 'next/link'

const LoginPage = () => {
  const headerTitle = (
    <h1 className='text-2xl'>Avalie, descubra, <span className='text-yellow-barzim font-bold'>aprecie</span></h1>
  );

  const headerSubtitle = (
    <p className='pb-4'>Sua cervejas, seus amigos. <span className='text-yellow-barzim font-bold'>Seu Barzim.</span></p>
  );

  const footer = (
    <p className='text-[10px] font-medium text-center pt-6'>Ao usar o webapp você afirma estar de acordo com nossos <span className='text-yellow-barzim font-bold'><Link href={"/legal/termos"}>Termos e Condições de Uso</Link></span>, nossa <span className='text-yellow-barzim font-bold'><Link href={"/legal/politicas-privacidade"}>Política de Cookies</Link></span> e nossa <span className='text-yellow-barzim font-bold'><Link href={"/legal/politicas-privacidade"}>Política de Privacidade</Link></span></p>
  );

  return (
    <div className="overflow-y-auto"> {/* Adicionado overflow-y-auto para permitir scroll */}
      <Background
        desktopBackground='md:bg-hero-login-desktop'
        mobileBackground='bg-hero-login-mobile'
      >
        <div className="flex flex-row justify-center min-h-screen"> {/* Removido height: '100vh' e adicionado min-h-screen para ocupar pelo menos a altura da tela */}

          <div className='flex flex-col items-center space-y-4 gap-6'>
            <Logo color='#FFEEC3' width={120} className='drop-shadow-sharp-shadow md:w-[25rem] mt-4 w-[10rem]' />

            <BoxRegister
              headerTitle={headerTitle}
              headerSubtitle={headerSubtitle}
              showSocial={true}
              footer={footer}>
              <LoginForm />
            </BoxRegister>

          </div>
        </div>
      </Background>
    </div>
  );
};

export default LoginPage;

