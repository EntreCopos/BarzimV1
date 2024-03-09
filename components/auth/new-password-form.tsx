'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { newPassword } from '@/actions/new-password'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { NewPasswordSchema } from '@/schemas'

export const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      newPassword(values, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <CardWrapper
      headerLabel="Defina sua nova senha"
      backButtonLabel="Voltar ao Login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            Trocar Senha
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
