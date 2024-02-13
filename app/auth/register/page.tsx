import { RegisterForm } from '@/components/auth/register-form'
import { BoxRegister } from '@/components/cards/box-register'
import { Logo } from '@/components/logo'

const RegisterPage = () => {

  const headerTitle = (
    <h1 className='text-2xl'>Vem pro <span className='text-yellow-barzim font-bold'>Barzim</span></h1>
  )

  const headerSubtitle = (
    <p className='pb-4'>Preencha os campos abaixo e já vamos encontrar um lugar perfeito para você.</p>
  )

  const footer = (
    <p className='text-[10px] font-medium text-center pt-6 w-full'>Ao usar o webapp você afirma estar de acordo com nossos <span className='text-yellow-barzim font-bold'>Termos e Condições de Uso</span>, nossa <span className='text-yellow-barzim font-bold'>Política de Cookies</span > e nossa <span className='text-yellow-barzim font-bold'>Política de Privacidade</span></p>
  )

  return (
    <div className='bg-no-repeat bg-hero-age-mobile md:bg-hero-register-desktop h-svh w-svw bg-cover'>

      <div className="flex flex-col md:flex-row min-h-svh w-full justify-center items-center gap-5 md:gap-64">

        <Logo color='#FFEEC3' width={120} className='drop-shadow-sharp-shadow md:w-[25rem]' />

        <BoxRegister
          headerTitle={headerTitle}
          headerSubtitle={headerSubtitle}
          formComponent={<RegisterForm />}
          showSocial={true}
          footer={footer}>
        </BoxRegister>

      </div>
    </div>
  )
}

export default RegisterPage
