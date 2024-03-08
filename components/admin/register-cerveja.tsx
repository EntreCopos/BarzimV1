/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cervejaSchema } from '@/schemas'
import { addCerveja } from '@/actions/add-cerveja'
import { convertFileToBase64 } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Omit } from 'utility-types'

interface CervejaFormProps {
  cervejarias: { id: number; nome: string }[]
  tiposCerveja: { id: number; nome: string }[]
}

const MAX_IMAGE_SIZE_KB = 800

const NewCervejaForm: React.FC<CervejaFormProps> = ({
  cervejarias,
  tiposCerveja,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(cervejaSchema),
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  type AddCervejaFormData = Omit<
    (typeof cervejaSchema)['_input'],
    'mainImage'
  > & { mainImage: File[] }

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > MAX_IMAGE_SIZE_KB * 1024) {
        alert(`Escolha uma imagem menor que ${MAX_IMAGE_SIZE_KB} KB.`)
        return
      }
      const base64Image = await convertFileToBase64(file)
      setImagePreview('data:image/jpeg;base64,' + base64Image)
    }
  }

  const submitForm = async (rawData: AddCervejaFormData) => {
    const base64Image = await convertFileToBase64(rawData.mainImage[0])
    const formData = { ...rawData, mainImage: base64Image }
    setError('')
    setSuccessMessage('')

    startTransition(() => {
      addCerveja(formData).then((data) => {
        setError(data.error)
        setSuccessMessage(`parece que tudo deu certo, ${data.success}`)
        setTimeout(() => {
          router.refresh()
        }, 400)
      })
    })
  }

  return (
    //@ts-expect-error tipos nao batem mas funcionalidade funciona. funcionalmente, estou feliz.
    <form onSubmit={handleSubmit(submitForm)} className="mx-auto max-w-md">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="mainImage"
        >
          Imagem Principal
        </label>
        <input
          {...register('mainImage')}
          type="file"
          accept="image/*"
          id="mainImage"
          name="mainImage"
          onChange={handleImageChange}
        />
        <div className="flex items-center justify-center">
          <label htmlFor="mainImage" className="cursor-pointer">
            <div className="flex h-40 w-40 items-center justify-center border border-gray-300">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Imagem Principal"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-gray-400">Selecione uma imagem</span>
              )}
            </div>
          </label>
        </div>
        {errors.mainImage && (
          <p className="text-xs italic text-red-500">
            {errors.mainImage.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="nomeCerveja"
        >
          Nome da Cerveja
        </label>
        <input
          {...register('nomeCerveja')}
          type="text"
          id="nomeCerveja"
          name="nomeCerveja"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.nomeCerveja && (
          <p className="text-xs italic text-red-500">
            {errors.nomeCerveja.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="descriCerveja"
        >
          Descrição da Cerveja
        </label>
        <textarea
          {...register('descriCerveja')}
          id="descriCerveja"
          name="descriCerveja"
          rows={3}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        ></textarea>
        {errors.descriCerveja && (
          <p className="text-xs italic text-red-500">
            {errors.descriCerveja.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="teorAlcoolico"
        >
          Teor Alcoólico
        </label>
        <input
          {...register('teorAlcoolico')}
          type="number"
          id="teorAlcoolico"
          name="teorAlcoolico"
          step="0.1"
          min="0"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.teorAlcoolico && (
          <p className="text-xs italic text-red-500">
            {errors.teorAlcoolico.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="tempIdeal"
        >
          Temperatura Ideal
        </label>
        <input
          {...register('tempIdeal')}
          type="text"
          id="tempIdeal"
          name="tempIdeal"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.tempIdeal && (
          <p className="text-xs italic text-red-500">
            {errors.tempIdeal.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="valorIBU"
        >
          Valor IBU
        </label>
        <input
          {...register('valorIBU')}
          type="number"
          id="valorIBU"
          name="valorIBU"
          min="0"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
        {errors.valorIBU && (
          <p className="text-xs italic text-red-500">
            {errors.valorIBU.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="corpo"
        >
          Corpo
        </label>
        <input
          {...register('corpo')}
          type="text"
          id="corpo"
          name="corpo"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      {errors.corpo && (
        <p className="text-xs italic text-red-500">
          {errors.corpo.message as unknown as string}
        </p>
      )}

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="cervejariaId"
        >
          Cervejaria
        </label>
        <select
          {...register('cervejariaId')}
          id="cervejariaId"
          name="cervejariaId"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        >
          {cervejarias.map((cervejaria) => (
            <option key={cervejaria.id} value={cervejaria.id}>
              {cervejaria.nome}
            </option>
          ))}
        </select>
        {errors.cervejariaId && (
          <p className="text-xs italic text-red-500">
            {errors.cervejariaId.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="tipoCervejaId"
        >
          Tipo de Cerveja
        </label>
        <select
          {...register('tipoCervejaId')}
          id="tipoCervejaId"
          name="tipoCervejaId"
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        >
          {tiposCerveja.map((tipo) => (
            <option key={tipo.id} value={tipo.id}>
              {tipo.nome}
            </option>
          ))}
        </select>
        {errors.tipoCervejaId && (
          <p className="text-xs italic text-red-500">
            {errors.tipoCervejaId.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="ingredientesCerveja"
        >
          Ingredientes da Cerveja
        </label>
        <textarea
          {...register('ingredientesCerveja')}
          id="ingredientesCerveja"
          name="ingredientesCerveja"
          rows={3}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        ></textarea>
        {errors.ingredientesCerveja && (
          <p className="text-xs italic text-red-500">
            {errors.ingredientesCerveja.message as unknown as string}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="harmonizacoesCerveja"
        >
          Harmonizações da Cerveja
        </label>
        <textarea
          {...register('harmonizacoesCerveja')}
          id="harmonizacoesCerveja"
          name="harmonizacoesCerveja"
          rows={3}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        ></textarea>
        {errors.harmonizacoesCerveja && (
          <p className="text-xs italic text-red-500">
            {errors.harmonizacoesCerveja.message as unknown as string}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          disabled={isPending}
          type="submit"
          className="focus:shadow-outline rounded bg-yellow-barzim px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none"
        >
          {isPending ? 'adicionando' : 'adicionar'}
        </button>
      </div>
      {successMessage && (
        <div className="mb-4 rounded bg-green-200 p-2 text-green-800">
          {successMessage}
        </div>
      )}
    </form>
  )
}

export default NewCervejaForm
