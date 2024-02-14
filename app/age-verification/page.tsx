import { Background } from '@/components/assets/background'
import { AgeVerificationForm } from '@/components/auth/age-verification-form'
import { BoxRegister } from '@/components/cards/box-register'
import { Logo } from '@/components/logos/logo-barzim'

export default async function AgeVerificationPage() {

  const headerTitle = (
    <h1 className='text-2xl'>
      Precisamos saber sua <span className='text-yellow-barzim font-bold'>idade</span>
    </h1>
  )

  const headerSubtitle = (
    <p className='pb-4'>Para visitar e criar sua conta no Barzim você precisa ter mais de 18 anos</p>
  )

  const footer = (
    <p className='text-[10px] font-medium text-center pt-6'>Ao clicar verificar você afirma a veracidade da informação enviada e isenta o Barzim de quaisquer eventuais responsabilidades.</p>
  )

  return (
    <div>
      <Background
        mobileBackground="bg-hero-age-mobile"
        desktopBackground="md:bg-hero-age-desktop"
      >
        <div className="flex flex-col md:flex-row min-h-svh w-full justify-center items-center gap-7 md:gap-64">

          <Logo color='#FFEEC3' width={320} className='drop-shadow-sharp-shadow' />

          <BoxRegister
            headerTitle={headerTitle}
            headerSubtitle={headerSubtitle}
            formComponent={<AgeVerificationForm />}
            showSocial={false}
            footer={footer}>
          </BoxRegister>

        </div>
      </Background>
    </div>
  )
}