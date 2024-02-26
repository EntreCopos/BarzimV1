'use server'
import { cervejaSchema } from '@/schemas'
import {
  createNewCerveja,
  createNewCervejaria,
  createNewTipoCerveja,
} from '@/data/cervejas'
import { uploadImageToCloudinary } from '@/lib/image_upload'

/**
 * Adiciona uma nova cervejaria.
 * @param {unknown} values - Os valores para criar a nova cervejaria.
 * @returns {Promise<{message: string, success: unknown} | {error: string}>} Um objeto contendo uma mensagem de sucesso e os detalhes da nova cervejaria, ou um objeto de erro se ocorrer algum problema.
 */

export const addCervejaria = async (values: unknown) => {
  try {
    const newCervejaria = createNewCervejaria(values)

    return { message: 'success', success: newCervejaria }
  } catch (err) {
    console.error(err)
    return { error: 'não foi' }
  }
}

/**
 * Adiciona um novo tipo de cerveja.
 * @param {unknown} values - Os valores para criar o novo tipo de cerveja.
 * @returns {Promise<{message: string, success: unknown} | {error: string}>} Um objeto contendo uma mensagem de sucesso e os detalhes do novo tipo de cerveja, ou um objeto de erro se ocorrer algum problema.
 */

export const addTipoCerveja = async (values: unknown) => {
  try {
    const newTipoCerveja = createNewTipoCerveja(values)
    return { message: 'success', success: newTipoCerveja }
  } catch (err) {
    console.error(err)
    return { error: 'não foi' }
  }
}

/**
 * Adiciona uma nova cerveja.
 * @param {any} values - Os valores para criar a nova cerveja.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto contendo uma mensagem de sucesso se a cerveja for adicionada com sucesso, ou um objeto de erro se ocorrer algum problema.
 */

export const addCerveja = async (values: unknown) => {
  try {
    const validatedFields = cervejaSchema.safeParse(values)

    if (!validatedFields.success) {
      return { error: 'Campos inválidos' }
    }

    const newCerveja = validatedFields.data
    const image = await uploadImageToCloudinary(newCerveja.mainImage)

    const arrIngredientes = newCerveja.ingredientesCerveja
      .split(',')
      .map((item) => item.toString())
    const arrHarmoniza = newCerveja.harmonizacoesCerveja
      .split(',')
      .map((item) => item.toString())

    if (image) {
      const data = {
        ...newCerveja,
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
    } else throw new Error('algum problema de upload')

    return { success: 'Cerveja criada!' }
  } catch (err) {
    return { error: 'deu ruim ali bichoo' }
  }
}
