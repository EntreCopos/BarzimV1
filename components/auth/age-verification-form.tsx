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
      <form
        //@ts-expect-error handle submit ta se abobando ai, fique quieto
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem>
              <FormControl>
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
              <FormControl>
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
              <FormControl>
                <Input {...field} placeholder="Ano" type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Tenho mais de 18 anõs senhor</Button>
      </form>
    </Form>
  )
}
