'use server'
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
  const bytes = await file.arrayBuffer()
  const buffer = new Uint8Array(bytes)

  const res = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, function (error, result) {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      })
      .end(buffer)
  })

  return res
}
// ...
// <form action={create}>
