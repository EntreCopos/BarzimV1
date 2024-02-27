'use server'
import { uploadImageToCloudinary } from '@/lib/image_upload'
import { convertFileToBase64 } from '@/lib/utils'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

/**
 * Faz o upload de uma imagem do avatar para o Cloudinary.
 * @param {FormData} formData - Os dados do formulário que contêm a imagem do avatar.
 * @returns {Promise<any>} Uma promessa que resolve com o resultado do upload da imagem para o Cloudinary.
 */
export async function uploadAvatarImage(formData: FormData) {
  const file = formData.get('image') as File
  const base64Image = await convertFileToBase64(file)
  const res = await uploadImageToCloudinary(base64Image, 'profile_pic')

  console.log(res)

  return res
}

export async function uploadReviewImage(formData: FormData) {
  const file = formData.get('image') as File
  const base64Image = await convertFileToBase64(file)

  return await uploadImageToCloudinary(base64Image, 'review')
}