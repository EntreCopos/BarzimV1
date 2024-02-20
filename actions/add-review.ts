'use server'

import { createAvaliacao } from '@/data/avaliacao'
import { uploadImageToCloudinary } from '@/lib/image_upload'


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

