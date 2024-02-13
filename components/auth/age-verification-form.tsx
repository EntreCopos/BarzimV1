'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import verifyAge from '@/actions/verify-age'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AgeVerificationSchema } from '@/schemas'

import { Button } from '@/components/ui/button'
import { type AgeVerifFormData } from '@/data/data'

export const AgeVerificationForm = () => {
  const form = useForm({
    resolver: zodResolver(AgeVerificationSchema),
    defaultValues: {
      day: '',
      month: '',
      year: '',
    },
  })

  return (
    <Form {...form}>
      <form
        className="flex w-10/12 flex-col items-center justify-center gap-2"
        //@ts-expect-error handle submit ta se abobando ai, fique quieto
        onSubmit={form.handleSubmit((data: AgeVerifFormData) =>
          verifyAge(data)
        )}
      >
        <div className="flex gap-3">
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="w-24 border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60 md:w-24">
                  <Input {...field} placeholder="Dia" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="month"
            render={({ field }) => (
              <FormItem>
                <FormControl className="w-24 border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60 md:w-24">
                  <Input {...field} placeholder="Mês" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormControl className="w-24 border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60 md:w-24">
                  <Input {...field} placeholder="Ano" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-3 h-12 w-full rounded-full bg-yellow-barzim bg-opacity-80 font-bold text-black hover:bg-[#ecbf4e] hover:bg-opacity-100">
          Verificar minha idade
        </Button>
      </form>
    </Form>
  )
}
