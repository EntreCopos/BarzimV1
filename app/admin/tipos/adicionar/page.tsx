'use client'
//@ts-nocheck
// components/TipoCervejaForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tipoCervejaSchema } from '@/schemas'
import { addTipoCerveja } from '@/actions/add-cerveja'
import { useState, useTransition } from 'react'



const TipoCervejaForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tipoCervejaSchema),
  })

  const submitForm = (values: { nome: string; descricao: string }) => {
    startTransition(() => {
      addTipoCerveja(values).then((data) => {
        setSuccessMessage(`parece que tudo deu certo, ${data.success}`)
        setTimeout(() => {
          window.location.reload()          
        }, 200)
      })
    })
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mx-auto max-w-sm">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="nome"
        >
          Nome do Tipo de Cerveja
        </label>
        <input
          {...register('nome')}
          type="text"
          id="nome"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.nome && (
          <p className="text-xs italic text-red-500">{errors.nome.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="descricao"
        >
          Descrição do Tipo de Cerveja
        </label>
        <input
          {...register('descricao')}
          type="text"
          id="descricao"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.descricao && (
          <p className="text-xs italic text-red-500">
            {errors.descricao.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={isPending}
          type="submit"
          className="focus:shadow-outline rounded bg-yellow-barzim px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none"
        >
          {isPending ? 'adicionando' : 'adicionar tipo de cerveja'}
        </button>
      </div>
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{successMessage}</div>
      )}
    </form>
  )
}

export default TipoCervejaForm
