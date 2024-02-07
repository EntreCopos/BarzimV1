'use client'

import type * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AddCervejaSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { addCerveja } from '@/actions/add-cerveja'

export const AdminAddCervejaForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof AddCervejaSchema>>({
    resolver: zodResolver(AddCervejaSchema),
    defaultValues: {
      nomeCerveja: '',
      teorAlcoolico: '',
      imagem: '',
      codBarras: '',
      marcaId: '',
      cervejariaId: '',
      tipoCervejaId: '',
    },
  })

  const onSubmit = (values: z.infer<typeof AddCervejaSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      addCerveja(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-6 max-w-96 space-y-6 "
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="nomeCerveja"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} placeholder="caracu" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fotinha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="caminho pra fotinho (por enquanto)"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="codBarras"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fotinha</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="codigo de barras"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="marcaId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cod marca</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="cod marca"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cervejariaId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cod cervejaria</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="cod cervejaria"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tipoCervejaId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cod tipo cerveja</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="cod tipo cerveja"
                    type="number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="teorAlcoolico"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teor alcoolico</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button disabled={isPending} type="submit" className="w-full">
          Criar esta breja
        </Button>
      </form>
    </Form>
  )
}
