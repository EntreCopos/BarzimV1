'use server'
import { v2 as cloudinary } from 'cloudinary'

import { createAvaliacao } from '@/data/avaliacao'
cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

export const addReview = async (formData: FormData) => {
  try {
    const reviewData = {
      userId: formData.get('idUser') as string,
      cerveja: formData.get('idCerveja'),
      rating: formData.get('rating') as string,
      reviewText: formData.get('reviewText') as string,
      images: formData.getAll('reviewPics'),
    }

    const uploadedImages = await Promise.all(
      reviewData.images.map((img) => {
        //console.log("BASE 64 STRING",img)
        return uploadImageToCloudinary(img as string)
      })
    )

    //console.log('imagens:', uploadedImages)

    const arrString: string[] = []

    uploadedImages.forEach((image) => arrString.push(JSON.stringify(image)))

    await createAvaliacao(reviewData.userId, reviewData.cerveja as string, {
      jaBebida: true,
      favorita: true,
      nota: +reviewData.rating,
      reviewTexto: reviewData.reviewText,
      imagens: arrString,
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    throw error
  }
}

const uploadImageToCloudinary = (base64String: string): Promise<unknown> => {
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
