'use server'

import { db } from '@/lib/db'
import { uploadImageToCloudinary } from '@/lib/image_upload'

interface CloudinaryResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  api_key: string
}

export const changeProfilePic = async (
  img: string,
  id: string
): Promise<string> => {
  try {
    const imageBase64: CloudinaryResponse = await uploadImageToCloudinary(
      img,
      'profile_pics'
    )
    const imageUrl = imageBase64.secure_url

    await db.user.update({
      data: { image: imageUrl },
      where: { id: id },
    })

    return imageUrl
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const removeProfilePic = async (id: string): Promise<void> => {
  try {
    await db.user.update({
      data: { image: null },
      where: { id: id },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
