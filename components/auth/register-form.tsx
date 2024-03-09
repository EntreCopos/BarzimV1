'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'

import * as z from 'zod'

import { register } from '@/actions/register'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema } from '@/schemas'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const [isShowingPass, setShowingPass] = useState<boolean>(false)

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',

      name: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error)
        if (data.success) {
          setSuccess(data.success)
        }
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl className="h-fit w-full border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-3 text-white text-opacity-60">
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Seu nome"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                      placeholder="Senha     "
                      type={isShowingPass ? 'text' : 'password'}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="my-3 h-12 w-full rounded-full bg-yellow-barzim bg-opacity-80 font-bold text-black hover:bg-[#ecbf4e] hover:bg-opacity-100"
        >
          Cadastrar
        </Button>
        <FormError message={error} />
        <FormSuccess message={success} />
        <div className="mt-4 text-center text-sm">
          <Link href="/auth/login">
            Já tem seu lugar no Barzim?{' '}
            <span className="font-medium text-yellow-barzim">Clique aqui.</span>
          </Link>
        </div>
      </form>
    </Form>
  )
}
