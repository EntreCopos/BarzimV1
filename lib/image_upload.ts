'use server'
import { CloudinaryResponse } from '@/data/data'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

/**
 * Carrega uma imagem para o Cloudinary.
 * @param {string} base64String - A representação em base64 da imagem a ser enviada para o Cloudinary.
 * @param {string | undefined} folder - (Opcional) O nome da pasta onde a imagem será armazenada no Cloudinary. Se não fornecido, a imagem será armazenada na pasta 'review_images' por padrão.
 * @returns {Promise<CloudinaryResponse>} Uma promessa que resolve com a resposta do Cloudinary após o envio da imagem.
 */
export const uploadImageToCloudinary = (
  base64String: string,
  folder: string | undefined = 'review_images'
): Promise<CloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      base64String,
      {
        folder: folder,
      },
      (error, result) => {
        if (error) {
          console.error('erro ao enviar imagem:', error)
          reject(error)
        } else {
          console.log('imagem enviada')
          resolve(result as unknown as CloudinaryResponse)
        }
      }
    )
  })
}
