/* eslint-disable @next/next/no-img-element */
// @ts-ignore
// @ts-nocheck
'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cervejaSchema } from '@/schemas';
import { addCerveja } from '@/actions/add-cerveja';
import { redirect } from 'next/navigation';

interface CervejaFormProps {
  cervejarias: { id: number; nome: string }[];
  tiposCerveja: { id: number; nome: string }[];
}

const MAX_IMAGE_SIZE_KB = 300

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
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);


  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE_KB * 1024) {
        alert(`A imagem selecionada é muito grande. Por favor, escolha uma imagem menor que ${MAX_IMAGE_SIZE_KB} KB.`)
        return
      }
  
      const base64Image = await convertFileToBase64(file);
      setImagePreview(base64Image)
    }
  }

  const convertFileToBase64 = (file: File) => {
    return new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string)
      }
      reader.onerror = () => {
        resolve(null);
      }
      reader.readAsDataURL(file);
    })
  }

  const submitForm = async (data: any) => {
    const base64Image = await convertFileToBase64(data.mainImage[0])
    const formData = { ...data, mainImage: base64Image }
    const res = await addCerveja(formData)
    if(res.success){
      setSuccessMessage('Cerveja adicionada com sucesso!')
      redirect('/')
    }

  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mainImage">
          Imagem Principal
        </label>
        <input {...register('mainImage')} type="file" accept="image/*" id="mainImage" onChange={handleImageChange} />
        <div className="flex items-center justify-center">
          <label htmlFor="mainImage" className="cursor-pointer">
            <div className="w-40 h-40 border border-gray-300 flex items-center justify-center">
              {imagePreview ? (
                <img src={imagePreview} alt="Imagem Principal" className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400">Selecione uma imagem</span>
              )}
            </div>
          </label>
        </div>
        {errors.mainImage && <p className="text-red-500 text-xs italic">{errors.mainImage.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nomeCerveja">
          Nome da Cerveja
        </label>
        <input {...register('nomeCerveja')} type="text" id="nomeCerveja" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.nomeCerveja && <p className="text-red-500 text-xs italic">{errors.nomeCerveja.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descriCerveja">
          Descrição da Cerveja
        </label>
        <textarea {...register('descriCerveja')} id="descriCerveja" rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        {errors.descriCerveja && <p className="text-red-500 text-xs italic">{errors.descriCerveja.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="teorAlcoolico">
          Teor Alcoólico
        </label>
        <input {...register('teorAlcoolico')} type="number" id="teorAlcoolico" step="0.1" min="0" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.teorAlcoolico && <p className="text-red-500 text-xs italic">{errors.teorAlcoolico.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tempIdeal">
          Temperatura Ideal
        </label>
        <input {...register('tempIdeal')} type="text" id="tempIdeal" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.tempIdeal && <p className="text-red-500 text-xs italic">{errors.tempIdeal.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valorIBU">
          Valor IBU
        </label>
        <input {...register('valorIBU')} type="number" id="valorIBU" min="0" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        {errors.valorIBU && <p className="text-red-500 text-xs italic">{errors.valorIBU.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="corpo">
          Corpo
        </label>
        <input {...register('corpo')} type="text" id="corpo" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {errors.corpo && <p className="text-red-500 text-xs italic">{errors.corpo.message}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cervejariaId">
          Cervejaria
        </label>
        <select {...register('cervejariaId')} id="cervejariaId" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {cervejarias.map(cervejaria => (
            <option key={cervejaria.id} value={cervejaria.id}>{cervejaria.nome}</option>
          ))}
        </select>
        {errors.cervejariaId && <p className="text-red-500 text-xs italic">{errors.cervejariaId.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoCervejaId">
          Tipo de Cerveja
        </label>
        <select {...register('tipoCervejaId')} id="tipoCervejaId" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          {tiposCerveja.map(tipo => (
            <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
          ))}
        </select>
        {errors.tipoCervejaId && <p className="text-red-500 text-xs italic">{errors.tipoCervejaId.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredientesCerveja">
          Ingredientes da Cerveja
        </label>
        <textarea {...register('ingredientesCerveja')} id="ingredientesCerveja" rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        {errors.ingredientesCerveja && <p className="text-red-500 text-xs italic">{errors.ingredientesCerveja.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harmonizacoesCerveja">
          Harmonizações da Cerveja
        </label>
        <textarea {...register('harmonizacoesCerveja')} id="harmonizacoesCerveja" rows={3} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        {errors.harmonizacoesCerveja && <p className="text-red-500 text-xs italic">{errors.harmonizacoesCerveja.message}</p>}
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" 
          className="focus:shadow-outline rounded bg-yellow-barzim px-4 py-2 font-bold text-white hover:bg-yellow-600 focus:outline-none">
          Adicionar Cerveja
        </button>
      </div>
      {successMessage && (
        <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">{successMessage}</div>
      )}
    </form>
  )
}

export default NewCervejaForm
