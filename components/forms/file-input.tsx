'use client'
import { updateProfilePic } from '@/actions/alter-profile-pic'
import { changeProfilePic } from '@/actions/profile-image'
import { updateUserProfilePic } from '@/data/user'
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
      const response = await fetch(
        `/api/internals/images/process_avatar?filename=${file.name}`,
        { method: 'POST', body: file }
      )
      const imageData = await response.json()

      await updateProfilePic(userId, imageData.secure_url)
      onProfilePicChange(imageData.secure_url)
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
