import { convertFileToBase64, readFileAsArrayBuffer } from '@/lib/utils'
import { useState } from 'react'
import { toast } from 'sonner'

/**
 * Gera um hook para lidar com a visualização de imagem com um limite máximo de tamanho.
 *
 * @param {number} maxImageSizeKB - O tamanho máximo em kilobytes para a imagem
 * @return {Array} Um array contendo a URL da visualização da imagem e a função para lidar com a visualização da imagem
 */
export const useImagePreview = (
  maxImageSizeKB: number = 500,
  defaultImagePath: string = '/images/logo-placeholder.png'
) => {
  const [imagePreview, setImagePreview] = useState<string>(defaultImagePath)
  // const [arrayBuffer, setArrayBuffer] = useState<ArrayBuffer | null>(null)

  const handleImagePreview = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event?.target?.files?.[0]
    if (file) {
      if (file.size > maxImageSizeKB * 1024) {
        toast(`Escolha uma imagem menor que ${maxImageSizeKB} KB.`)
        return
      }
      const previewBase64 = await convertFileToBase64(file)
      // const newArraryBuffer = await readFileAsArrayBuffer(file)

      setImagePreview(`data:${file.type};base64,${previewBase64}`)
      // setArrayBuffer(newArraryBuffer)
    }
  }

  return {
    imagePreview,
    handleImagePreview,
    //arrayBuffer
  }
}
