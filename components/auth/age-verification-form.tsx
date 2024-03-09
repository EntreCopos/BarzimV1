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
import { useRef, type ChangeEvent } from 'react'

export const AgeVerificationForm = () => {
  const form = useForm({
    resolver: zodResolver(AgeVerificationSchema),
    defaultValues: {
      day: '',
      month: '',
      year: '',
    },
  })

  const dayRef = useRef<HTMLInputElement>(null)
  const monthRef = useRef<HTMLInputElement>(null)
  const yearRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement>
  ) => {
    if (e.target.value.length === 2) {
      nextRef.current?.focus()
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-2"
        //@ts-expect-error verificar depois
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
                <FormControl className="border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60">
                  <Input
                    {...field}
                    placeholder="Dia"
                    type="text"
                    maxLength={2}
                    max={31}
                    ref={dayRef}
                    //@ts-expect-error verificar depois
                    onInput={(e) => handleInputChange(e, monthRef)}
                    inputMode="numeric"
                  />
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
                <FormControl className="border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60">
                  <Input
                    {...field}
                    placeholder="Mês"
                    type="text"
                    maxLength={2}
                    max={12}
                    ref={monthRef}
                    //@ts-expect-error verificar depois
                    onInput={(e) => handleInputChange(e, yearRef)}
                    inputMode="numeric"
                  />
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
                <FormControl className="border-2 border-black border-opacity-20 bg-zinc-700 bg-opacity-60 p-5 text-center text-white text-opacity-60">
                  <Input
                    {...field}
                    placeholder="Ano"
                    type="text"
                    maxLength={4}
                    max={2100}
                    ref={yearRef}
                    inputMode="numeric"
                  />
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
