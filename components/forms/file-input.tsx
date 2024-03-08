'use client'
import { updateProfilePic } from '@/actions/alter-profile-pic'
import { uploadAvatarImage } from '@/actions/upload-image'
import { CloudinaryResponse } from '@/data/data'

const MAX_FILE_SIZE = 4 * 1024 * 1024
const FileInput = ({
  userId,
  onProfilePicChange,
}: {
  userId: string
  onProfilePicChange: (newPicUrl: string) => void
}) => {
  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) {
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      alert(
        `A imagem ${file.name} é muito grande. O máximo permitido é de ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed(2)} MB.`
      )
      return
    }

    try {
      const data = new FormData()
      data.append('image', file)

      const uploadedImage: CloudinaryResponse = await uploadAvatarImage(data)

      await updateProfilePic(userId, uploadedImage.secure_url)
      onProfilePicChange(uploadedImage.secure_url)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <input
      type="file"
      style={{ display: 'none' }}
      accept="image/*"
      onChange={handleFileInput}
    />
  )
}

export default FileInput
