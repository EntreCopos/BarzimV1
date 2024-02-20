'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { login } from '@/actions/login'
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
import { LoginSchema } from '@/schemas'

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Parece que alguém ja usou esse email :|'
      : ''

  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset()
            setError(data.error)
          }

          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => setError('Algum erro rolou aí'))
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          {showTwoFactor && (
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código 2FA</FormLabel>
                  <FormControl className=''>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="666420"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {!showTwoFactor && (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="E-mail"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Senha"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full h-12 my-3 bg-yellow-barzim bg-opacity-80 font-bold text-black rounded-full hover:bg-opacity-100 hover:bg-[#ecbf4e]">
          {showTwoFactor ? 'Confirmar' : 'Entrar'}
        </Button>

        <div className='text-center'>
          <Link href="/auth/register">Ainda não tem sua conta no Barzim?
            <p className='text-yellow-barzim  font-medium text-sm'>Cadastre-se aqui.</p>
          </Link>
        </div>
      </form>
    </Form>
  )
}