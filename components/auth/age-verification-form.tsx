'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AgeVerificationSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import verifyAge from '@/actions/verify-age'

import { Button } from '@/components/ui/button'

export const AgeVerificationForm = () => {
  const form = useForm({
    resolver: zodResolver(AgeVerificationSchema),
    defaultValues: {
      day: '',
      month: '',
      year: '',
    },
  })

  const { handleSubmit } = form

  const onSubmit = (data: { day: number; month: number; year: number }) => {
    const isoDate = new Date(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      `${data?.day}-${data?.month}-${data?.year}`
    ).toISOString()

    verifyAge(isoDate)
  }

  return (
    <Form {...form}>
      <form className='flex gap-2 w-10/12 items-center justify-center'
        //@ts-expect-error handle submit ta se abobando ai, fique quieto
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem className=''>
              <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 text-center border-black border-2 border-opacity-20 w-20 md:w-24'>
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
              <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 text-center border-black border-2 border-opacity-20 w-20 md:w-24'>
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
              <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 text-center border-black border-2 border-opacity-20 w-20 md:w-24'>
                <Input {...field} placeholder="Ano" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      <Button className='w-10/12 h-12 my-5 bg-yellow-barzim bg-opacity-80 font-bold text-black rounded-full hover:bg-opacity-100 hover:bg-[#ecbf4e]'>Verificar minha idade</Button>
      </form>
    </Form>
  )
}
