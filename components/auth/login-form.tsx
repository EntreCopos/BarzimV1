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
import { cn } from '@/lib/utils'

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
  const [isShowingPass, setShowingPass] = useState<boolean>(false)

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
                  <FormControl className="">
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
                    <FormControl className="h-fit w-full border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-3 text-white text-opacity-60">
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
                    <FormControl className="h-fit w-full border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-3 text-white text-opacity-60">
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Senha"
                        type={isShowingPass ? 'text' : 'password'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
        </div>
        <div className={cn('flex gap-1')}>
          <input
            type="checkbox"
            name="showPassword"
            checked={isShowingPass}
            onChange={() => setShowingPass((prev) => !prev)}
          />
          <label className="text-sm" htmlFor="showPassword">
            Mostrar Senha
          </label>
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <Button
          disabled={isPending}
          type="submit"
          className="my-3 h-12 w-full rounded-full bg-yellow-barzim bg-opacity-80 font-bold text-black hover:bg-[#ecbf4e] hover:bg-opacity-100"
        >
          {showTwoFactor ? 'Confirmar' : 'Entrar'}
        </Button>

        <div className="text-center">
          <Link href="/auth/register">
            Ainda não tem sua conta no Barzim?
            <p className="text-sm  font-medium text-yellow-barzim">
              Cadastre-se aqui.
            </p>
          </Link>
        </div>
      </form>
    </Form>
  )
}
