'use server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

export const uploadImageToCloudinary = (base64String: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      base64String,
      {
        folder: 'review_images',
      },
      (error, result) => {
        if (error) {
          console.error('erro ao enviar imagem:', error)
          reject(error)
        } else {
          console.log('imagem enviada')
          resolve(result)
        }
      }
    )
  })
}