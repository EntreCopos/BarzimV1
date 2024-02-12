import { AgeVerificationForm } from '@/components/auth/age-verification-form'
import { BoxRegister } from '@/components/cards/box-register'
import { CardHorizontalCerveja } from '@/components/cards/card-horizontal-cerveja'
import { CardVertCerveja } from '@/components/cards/card-vertical-cerveja'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

export default function Home() {

  const headerTitle = (
    <h1 className='text-2xl'>
      Precisamos saber sua <span className='text-yellow-barzim font-bold'>idade</span>
    </h1>
  )

  const headerSubtitle = (
    <p className='pb-4'>Para visitar e criar sua conta no Barzim você precisa ter mais de 18 anos</p>
  )


  return (<div>
    <main className="flex h-full flex-col items-center bg-black-radial-gradient justify-center">
      <div className="space-y-6 text-center">
        <div className="hero flex items-baseline gap-7 mb-14">
          <h1 className={cn('text-6xl font-semibold text-marfim-barzim mt-20')}>
            Welcome to the
          </h1>
          <Logo variant='secondary' width={180} />
        </div>

        <div className='flex gap-10 '>
          <CardVertCerveja nomeCerveja="Beck's" novidade={true} />
          <CardVertCerveja nomeCerveja="Brahma Chopp" novidade={false} />
          <CardVertCerveja nomeCerveja="Serrana" novidade={false} />
        </div>

        <div className='flex gap-10 '>
          <CardHorizontalCerveja nomeCerveja='Brahma Chopp' novidade={false} />
          <CardHorizontalCerveja nomeCerveja='Bohemia Puro Malte' novidade={true} />
        </div>
      </div>

    </main>

    <BoxRegister
      headerTitle={headerTitle}
      headerSubtitle={headerSubtitle}
      formComponent={<AgeVerificationForm />}
      showSocial={false}
      footer={<p className='text-[10px] font-medium text-center pt-6'>Ao clicar verificar você afirma a veracidade da informação enviada e isenta o Barzim de quaisquer eventuais responsabilidades.</p>}>
    </BoxRegister>

  </div>
  )
}