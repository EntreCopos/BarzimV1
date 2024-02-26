'use server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLD_NAME,
  api_key: process.env.CLD_KEY,
  api_secret: process.env.CLD_SEC,
})

export async function uploadAvatarImage(formData: FormData) {
  const file = formData.get('image') as File
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

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
