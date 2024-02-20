"use server"
import type * as z from 'zod'
import { cervejaSchema } from '@/schemas'
import { createNewCerveja, createNewCervejaria, createNewTipoCerveja } from '@/data/cervejas'
import { uploadImageToCloudinary } from '@/lib/image_upload'

export const addCervejaria = async (values: unknown) => {
  try {
    const newCervejaria = createNewCervejaria(values)

    return {message: 'success', success: newCervejaria}
  }
  catch(err){
    console.error(err)
    return {error: 'não foi'}
  }
}

export const addTipoCerveja = async (values: unknown) => {
  try {
    const newTipoCerveja = createNewTipoCerveja(values)
    return {message: 'success', success: newTipoCerveja}
  }
  catch(err){
    console.error(err)
    return {error: 'não foi'}
  }
}

export const addCerveja = async (values: any) => {
  try{
    const validatedFields = cervejaSchema.safeParse(values)
  
    if (!validatedFields.success) {
      return { error: 'Campos inválidos' }
    }
  
    const newCerveja = validatedFields.data
    const image = await uploadImageToCloudinary(newCerveja.mainImage)
  
    const arrIngredientes = newCerveja.ingredientesCerveja.split(',').map(item => item.toString())
    const arrHarmoniza = newCerveja.harmonizacoesCerveja.split(',').map(item => item.toString())

    if(image){
      const data = {
        ...newCerveja,
        //@ts-expect-error não vou tipar agora a resposta da api
        mainImage: image.secure_url as string,
        ingredientesCerveja: arrIngredientes ?? null,
        harmonizacoesCerveja: arrHarmoniza ?? null,
        descriCerveja: newCerveja.descriCerveja ?? null,
        teorAlcoolico: newCerveja.teorAlcoolico ?? null,
        tempIdeal: newCerveja.tempIdeal ?? null,
        valorIBU: newCerveja.valorIBU ?? null,
        corpo: newCerveja.corpo ?? null,
      }      
      await createNewCerveja(data)
    }
    else throw new Error('algum problema de upload')
  
    return { success: 'Cerveja criada!' }
  }catch(err){
    return {error: 'deu ruim ali bichoo'}
  }
}
