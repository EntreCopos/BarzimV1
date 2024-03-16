'use client'

import { updateAccountSettings } from '@/actions/user-config'
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
import { type User } from '@/data/data'
import { AccountSettingsSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type * as z from 'zod'

export const AccountSettingsForm: React.FC<{ user: User }> = ({ user }) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof AccountSettingsSchema>>({
    resolver: zodResolver(AccountSettingsSchema),
    defaultValues: {
      name: user?.name || '',
      username: user?.username || '',
      link: user?.link || '',
      cep: '',
      bio: user?.bio || '',
      genero: user?.genero || '',
    },
  })

  const onSubmit = (values: z.infer<typeof AccountSettingsSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      updateAccountSettings(values, user?.id as string).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  Nome
                </FormLabel>
                <FormControl className="h-12 border-2 border-stroke-cervejas bg-secondary/10">
                  <Input {...field} disabled={isPending} placeholder="Nome" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  Usuário
                </FormLabel>
                <FormControl className="h-fit w-full border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-3 text-white text-opacity-60">
                  <Input {...field} disabled={true} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  Link
                </FormLabel>
                <FormControl className="h-12 border-2 border-stroke-cervejas bg-secondary/10">
                  <Input {...field} disabled={isPending} placeholder="Link" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  CEP
                </FormLabel>
                <FormControl className="h-12 border-2 border-stroke-cervejas bg-secondary/10">
                  <Input {...field} disabled={isPending} placeholder="CEP" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="genero"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  Gênero
                </FormLabel>
                <FormControl className="h-12 w-full border-2 border-stroke-cervejas">
                  <select
                    {...field}
                    className="rounded-md"
                    disabled={isPending}
                  >
                    {field.value === '' && (
                      <option selected={true} disabled value="">
                        Selecione
                      </option>
                    )}
                    <option value="FEMININO">Feminino</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="BIGENERO">Bigênero</option>
                    <option value="AGENERO">Agênero</option>
                    <option value="NAO_BINARIO">Não binário</option>
                    <option value="GENERO_FLUIDO">Gênero Fluido</option>
                    <option value="OUTRO">Outro</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-normal text-white text-opacity-30">
                  Bio
                </FormLabel>
                <FormControl className="h-12 border-2 border-stroke-cervejas bg-secondary/10">
                  <Input {...field} disabled={isPending} placeholder="Bio" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          disabled={isPending}
          type="submit"
          className="mt-6 h-12 w-full rounded-full bg-yellow-barzim bg-opacity-80 font-bold text-black hover:bg-[#ecbf4e] hover:bg-opacity-100"
        >
          Salvar Configurações
        </Button>
      </form>
    </Form>
  )
}
