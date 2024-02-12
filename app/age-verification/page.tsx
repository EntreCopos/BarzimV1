import { AgeVerificationForm } from '@/components/auth/age-verification-form'
import { Logo } from '@/components/logo'

export default async function AgeVerificationPage() {
  return (
    <body className='bg-no-repeat bg-hero-age-mobile md:bg-hero-age-desktop h-svh w-svw bg-cover'>

      <div className="flex flex-col md:flex-row min-h-svh w-full justify-center items-center gap-7 md:gap-64">

        <Logo color='#FFEEC3' width={320} className='drop-shadow-sharp-shadow' />

        <div className="bg-[#131313] text-[#FFFEEE] bg-opacity-85 w-[95%] md:w-[30rem] h-fit rounded-lg flex flex-col  gap-2 px-8 pt-12 pb-8">
          <h1 className='text-2xl'>Precisamos saber sua <span className='text-yellow-barzim font-bold'>idade</span></h1>

          <p className='pb-4'>Para visitar e criar sua conta no Barzim você precisa ter mais de 18 anos</p>
          <div className="flex flex-col justify-center items-center">
            <AgeVerificationForm />
            <p className='text-[10px] font-medium text-center pt-6'>Ao clicar verificar você afirma a veracidade da informação enviada e isenta o Barzim de quaisquer eventuais responsabilidades.</p>
          </div>
        </div>

      </div>
    </body>
  )
}
