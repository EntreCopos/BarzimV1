'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import { newVerification } from '@/actions/new-verification'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Missing token!')
      return
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Algo deu errado!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel="Confirme a verificação"
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
