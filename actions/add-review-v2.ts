'use server'

import { createAvaliacao } from '@/data/avaliacao'

export const addReviewV2 = async (formData: FormData) => {
  try {
    const reviewData = {
      userId: formData.get('idUser') as string,
      cerveja: formData.get('idCerveja'),
      rating: formData.get('rating') as string,
      reviewText: formData.get('reviewText') as string,
      images: formData.getAll('reviewPics'),
    }

    await createAvaliacao(reviewData.userId, reviewData.cerveja as string, {
      jaBebida: true,
      favorita: true,
      nota: +reviewData.rating,
      reviewTexto: reviewData.reviewText,
      imagens: reviewData.images,
    })

    return { success: true }
  } catch (error) {
    console.error(error)
    throw error
  }
}
