'use server'

import { CloudinaryResponse } from '@/data/data'
import { db } from '@/lib/db'
import { uploadImageToCloudinary } from '@/lib/image_upload'

/**
 * Altera a imagem de perfil de um usuário para a imagem fornecida.
 * @param {string} img - A imagem de perfil em formato base64.
 * @param {string} id - O ID do usuário cuja imagem de perfil será alterada.
 * @returns {Promise<string>} Uma promessa que resolve com a URL da nova imagem de perfil, se a operação for bem-sucedida.
 * @throws Lança um erro se ocorrer algum problema durante o processo de alteração da imagem de perfil.
 */
export const changeProfilePic = async (
  img: string,
  id: string
): Promise<string> => {
  try {
    const imageBase64: CloudinaryResponse = await uploadImageToCloudinary(
      img,
      'profile_pics'
    )
    const imageUrl = imageBase64.secure_url

    await db.user.update({
      data: { image: imageUrl },
      where: { id: id },
    })

    return imageUrl
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * Remove a imagem de perfil de um usuário.
 * @param {string} id - O ID do usuário cuja imagem de perfil será removida.
 * @returns {Promise<void>} Uma promessa que indica que a imagem de perfil foi removida com sucesso.
 * @throws Lança um erro se ocorrer algum problema durante o processo de remoção da imagem de perfil.
 */
export const removeProfilePic = async (id: string): Promise<void> => {
  try {
    await db.user.update({
      data: { image: null },
      where: { id: id },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
