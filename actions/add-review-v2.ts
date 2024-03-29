'use server'
import { createAvaliacao } from '@/data/avaliacao'
import { reviewAdded_Activity } from './activities/review-added'
import { getCurrentUserId } from '@/lib/auth'

/**
 * Adiciona uma nova avaliação.
 * @param {FormData} formData - Os dados do formulário para criar a avaliação.
 * @returns {Promise<{success: boolean}>} Um objeto contendo um indicador de sucesso, true se a avaliação for adicionada com sucesso, ou false se ocorrer algum erro.
 * @throws Lança um erro se ocorrer algum problema durante o processo de adição da avaliação.
 */

export const addReviewV2 = async (formData: FormData) => {
  const currentUserId = await getCurrentUserId()

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

    await reviewAdded_Activity(currentUserId, reviewData.cerveja as string)

    return { success: true }
  } catch (error) {
    console.error(error)
    throw error
  }
}
