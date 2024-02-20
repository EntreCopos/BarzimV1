//@ts-nocheck
"use client"
// components/CervejariaForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cervejariaSchema } from '@/schemas'
import { addCervejaria } from '@/actions/add-cerveja'


const CervejariaForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(cervejariaSchema),
  })

  const submitForm = (data: unknown) => {
    addCervejaria(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="mx-auto max-w-sm">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="nome"
        >
          Nome da Cervejaria
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
          htmlFor="logo"
        >
          URL do Logo (Opcional)
        </label>
        <input
          {...register('logo')}
          type="text"
          id="logo"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.logo && (
          <p className="text-xs italic text-red-500">{errors?.logo.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-yellow-barzim px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none"
        >
          Adicionar Cervejaria
        </button>
      </div>
    </form>
  )
}

export default CervejariaForm
