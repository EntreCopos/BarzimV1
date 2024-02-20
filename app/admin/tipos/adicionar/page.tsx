//@ts-nocheck
'use client'

// components/TipoCervejaForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { tipoCervejaSchema } from '@/schemas'
import { addTipoCerveja } from '@/actions/add-cerveja'



const TipoCervejaForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(tipoCervejaSchema),
  })

  const submitForm = (data: { nome: string; descricao: string }) => {
    addTipoCerveja(data)
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
          type="submit"
          className="focus:shadow-outline rounded bg-yellow-barzim px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none"
        >
          Adicionar Tipo de Cerveja
        </button>
      </div>
    </form>
  )
}

export default TipoCervejaForm
