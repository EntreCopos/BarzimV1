'use server'
import { removeUserProfilePic, updateUserProfilePic } from '@/data/user'

export const removeProfilePic = async (userId: string) => {
  await removeUserProfilePic(userId)
}

export const updateProfilePic = async (userId: string, pic_Url: string) => {
  await updateUserProfilePic(userId, pic_Url)
}
