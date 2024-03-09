'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import { newVerification } from '@/actions/new-verification'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()
  const router = useRouter()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Não há token!')
      return
    }

    newVerification(token)
      .then(({ success, error }) => {
        if (success) {
          setSuccess(success)
          router.push('/auth/login')
        } else if (error) {
          setError(error)
        }
      })
      .catch(() => {
        setError('Algo deu errado.')
      })
  }, [token, success, error])

  useEffect(() => {
    if (!success) {
      onSubmit()
    }
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Verificando seu e-mail"
      backButtonLabel="Voltar ao Login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}
