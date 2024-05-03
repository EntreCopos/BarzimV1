import { AgeVerificationForm } from '@/components/auth/age-verification-form'
import { BoxRegister } from '@/components/auth/box-register'
import { Logo } from '@/components/logos/logo-barzim'
import { AuthFormsWrapper } from '@/components/wrappers/auth-forms-wrapper/auth-forms-wrapper'

export default async function AgeVerificationPage() {
  const headerTitle = (
    <h1 className="text-2xl">
      Precisamos saber sua{' '}
      <span className="font-bold text-yellow-barzim">idade</span>
    </h1>
  )

  const headerSubtitle = (
    <p className="pb-4">
      Para visitar e criar sua conta no Barzim você precisa ter mais de 18 anos
    </p>
  )

  const footer = (
    <p className="pt-6 text-center text-[10px] font-medium">
      Ao clicar verificar você afirma a veracidade da informação enviada e
      isenta o Barzim de quaisquer eventuais responsabilidades.
    </p>
  )

  return (
    <AuthFormsWrapper>
      <Logo color="#fffeef" width={240} className="mx-auto" />
      <BoxRegister
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        showSocial={false}
        footer={footer}
      >
        <AgeVerificationForm />
      </BoxRegister>
    </AuthFormsWrapper>
  )
}
