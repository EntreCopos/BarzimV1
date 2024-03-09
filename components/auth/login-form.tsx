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
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Parece que alguém ja usou esse email :('
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
        .catch(() => setError('Ocorreu algum erro'))
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
                      placeholder="999999"
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
                    <div className="relative h-auto w-full">
                      <button
                        type="button"
                        onClick={() => setShowingPass((prev) => !prev)}
                        style={{
                          position: 'absolute',
                          right: 0,
                          height: '100%',
                          fontSize: '1.5rem',
                          padding: '.6rem 1rem',
                          color: 'darkgray',
                        }}
                      >
                        {isShowingPass ? <IoMdEyeOff /> : <IoMdEye />}
                      </button>
                      <FormControl className="h-fit w-full border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-3 text-white text-opacity-60">
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Senha"
                          type={isShowingPass ? 'text' : 'password'}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          <div className="text-left text-sm">
            <Link href="/auth/reset">
              <span className="font-medium text-yellow-barzim">
                Esqueci minha senha
              </span>
            </Link>
          </div>
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="my-3 h-12 w-full rounded-full bg-yellow-barzim bg-opacity-80 font-bold text-black hover:bg-[#ecbf4e] hover:bg-opacity-100"
        >
          {showTwoFactor ? 'Confirmar' : 'Entrar'}
        </Button>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <div className="text-center text-sm">
          <Link href="/auth/register">
            Ainda não tem sua conta no Barzim?
            <br />
            <span className="font-medium text-yellow-barzim">
              Cadastre-se aqui.
            </span>
          </Link>
        </div>
      </form>
    </Form>
  )
}
