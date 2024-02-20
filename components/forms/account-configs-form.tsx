'use client'

import { updateAccountSettings } from '@/actions/user-config'
import { FormError } from '@/components/forms/form-error'
import { FormSuccess } from '@/components/forms/form-success'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { type User } from "@/data/data"
import { AccountSettingsSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

interface AccountSettingsFormProps {
    user: User | null
}

export const AccountSettingsForm: React.FC<AccountSettingsFormProps> = ({ user }) => {
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
            genero: '',
            bio: user?.bio || ''
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
            <form onSubmit={form.handleSubmit(onSubmit)} >
                <div>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    Nome
                                </FormLabel>
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
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    Usuário
                                </FormLabel>
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
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    Link
                                </FormLabel>
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
                        name="cep"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    CEP
                                </FormLabel>
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder="CEP"
                                    />
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
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    Gênero
                                </FormLabel>
                                <FormControl className='text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3'>


                                    <select
                                        className='rounded-md'
                                        disabled={isPending}>
                                        <option value="FEMININO">Feminino</option>
                                        <option value="MASCULINO">Masculino</option>
                                        <option value="BIGENERO">Bigênero</option>
                                        <option value="AGENERO">Agênero</option>
                                        <option value="NAO_BINARIO">Não binário</option>
                                        <option value="GENERO_FLUIDO">Gênero Fluido</option>
                                        <option value="OUTRO">Outro</option>
                                    </select>
                                    {/* <Select
                                        
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Identifique seu gênero" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="FEMININO">Feminino</SelectItem>
                                            <SelectItem value="MASCULINO">Masculino</SelectItem>
                                            <SelectItem value="BIGENERO">Bigênero</SelectItem>
                                            <SelectItem value="AGENERO">Agênero</SelectItem>
                                            <SelectItem value="NAO_BINARIO">Não binário</SelectItem>
                                            <SelectItem value="GENERO_FLUIDO">Gênero Fluido</SelectItem>
                                            <SelectItem value="OUTRO">Outro</SelectItem>
                                            <SelectItem value="null"></SelectItem>
                                        </SelectContent>
                                    </Select> */}
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
                                <FormLabel className='text-white text-opacity-30 text-xs font-normal'>
                                    Bio
                                </FormLabel>
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
                <Button disabled={isPending} type="submit" className="w-full h-12 mt-3 bg-yellow-barzim bg-opacity-80 font-bold text-black rounded-full hover:bg-opacity-100 hover:bg-[#ecbf4e]">
                    Salvar Configurações
                </Button>
            </form>
        </Form>
    )
}
