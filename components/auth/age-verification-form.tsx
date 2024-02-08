'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AgeVerificationSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import verifyAge from '@/actions/verify-age'

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
      {/* @ts-expect-error handleSubmit ta se abobando ai, ele que aceite e fique quieto */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Day" type="number" />
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
                  <Input {...field} placeholder="Month" type="number" />
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
                  <Input {...field} placeholder="Year" type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <button className="rounded-lg bg-zinc-500 p-6 text-white">
          set cookie
        </button>
      </form>
    </Form>
  )
}
