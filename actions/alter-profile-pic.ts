'use server'
import { removeUserProfilePic, updateUserProfilePic } from '@/data/user'

/**
 * Remove a imagem de perfil de um usuário.
 * @param {string} userId - O ID do usuário cuja imagem de perfil será removida.
 * @returns {Promise<void>} Uma promessa que indica que a imagem de perfil foi removida com sucesso.
 */
export const removeProfilePic = async (userId: string) => {
  await removeUserProfilePic(userId)
}

/**
 * Atualiza a imagem de perfil de um usuário.
 * @param {string} userId - O ID do usuário cuja imagem de perfil será atualizada.
 * @param {string} pic_Url - A URL da nova imagem de perfil.
 * @returns {Promise<void>} Uma promessa que indica que a imagem de perfil foi atualizada com sucesso.
 */
export const updateProfilePic = async (userId: string, pic_Url: string) => {
  await updateUserProfilePic(userId, pic_Url)
}
