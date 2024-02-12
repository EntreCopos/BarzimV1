import { RegisterForm } from '@/components/auth/register-form'
import { Social } from '@/components/auth/social'
import { Logo } from '@/components/logo'

const RegisterPage = () => {
  return (
    <body className='bg-no-repeat bg-hero-age-mobile md:bg-hero-register-desktop h-svh w-svw bg-cover'>

      <div className="flex flex-col md:flex-row min-h-svh w-full justify-center items-center gap-5 md:gap-64">

        <Logo color='#FFEEC3' width={120} className='drop-shadow-sharp-shadow md:w-[25rem]' />

        <div className="bg-[#131313] text-[#FFFEEE] bg-opacity-85 w-[95%] md:w-[30rem] h-fit rounded-lg flex flex-col  gap-2 px-8 pt-12 pb-8 backdrop-blur-lg">
          <h1 className='text-2xl'>Vem pro <span className='text-yellow-barzim font-bold'>Barzim</span></h1>
          <p className='pb-4'>Preencha os campos abaixo e já vamos encontrar um lugar perfeito para você.</p>

          <RegisterForm />
          <div className="p-1 pt-5 font-medium text-sm text-[#FFFEEF] text-opacity-60 text-center">
            <p>ou entre com um desses serviços</p>
          </div>

          <Social />
          <p className='text-[10px] font-medium text-center pt-6 w-full'>Ao usar o webapp você afirma estar de acordo com nossos <span className='text-yellow-barzim font-bold'>Termos e Condições de Uso</span>, nossa <span className='text-yellow-barzim font-bold'>Política de Cookies</span > e nossa <span className='text-yellow-barzim font-bold'>Política de Privacidade</span></p>
        </div>

      </div>
    </body>
  )
}

export default RegisterPage
