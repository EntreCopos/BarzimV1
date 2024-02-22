"use client"

import { changeProfilePic } from "@/actions/profile-image"

const MAX_FILE_SIZE = 300 * 1024

const FileInput = ({ userId, onProfilePicChange }: { userId: string, onProfilePicChange: (newPicUrl: string) => void }) => {
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
            const base64String = await convertFileToBase64(file)
            const imageUrl = await changeProfilePic(base64String, userId)
            onProfilePicChange(imageUrl)
        } catch (err) {
            console.error(err)
            alert('Erro ao processar a imagem')

        }
    }

    const convertFileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = () => {
                const base64String = reader.result as string
                resolve(base64String)
            }
            reader.onerror = (error) => {
                reject(error)
            }
            reader.readAsDataURL(file)
        })
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
