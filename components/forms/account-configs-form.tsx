import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { updateAccountSettings } from '@/actions/user-config'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AccountSettingsSchema } from '@/schemas'

export const AccountSettingsForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    // defaultValues faço depois calme ai
    const form = useForm<z.infer<typeof AccountSettingsSchema>>({
        resolver: zodResolver(AccountSettingsSchema),
        defaultValues: {
            name: '',
            user: '',
            link: '',
            city: '',
            gender: '',
            bio: ''
        },
    })

    const onSubmit = (values: z.infer<typeof AccountSettingsSchema>) => {
        setError('')
        setSuccess('')

        startTransition(() => {
            updateAccountSettings(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
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
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Nome"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="user"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Usuário"
                                    />
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
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Link"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Cidade"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    {/* <Select
                                        {...field}
                                        disabled={isPending}
                                        options={[
                                            { value: 'male', label: 'Masculino' },
                                            { value: 'female', label: 'Feminino' },
                                            { value: 'other', label: 'Outro' },
                                        ]}
                                    /> */}
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
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="Bio"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button disabled={isPending} type="submit" className="w-full h-12 my-3 bg-yellow-barzim bg-opacity-80 font-bold text-black rounded-full hover:bg-opacity-100 hover:bg-[#ecbf4e]">
                    Salvar Configurações
                </Button>
            </form>
        </Form>
    )
}