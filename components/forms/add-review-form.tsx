'use client'
import { useState } from 'react'
import { addReview } from '@/actions/add-review'
import ImageSlotsWrapper from '../review/review-image/imageSlotsWrapper'
import WrapperReviewImage from '../wrappers/wrapper-review-image/wrapper-review-image'
import SendReviewButton from '../buttons/send-review-button/send-review-button'
import { convertFileToBase64 } from '@/lib/utils'
import { uploadReviewImage } from '@/actions/upload-image'
import { CloudinaryResponse } from '@/data/data'
import { useRouter } from 'next/navigation'
import { addReviewV2 } from '@/actions/add-review-v2'

const MAX_FILE_SIZE = 300 * 1024

export const AvaliacaoForm: React.FC<{ idCerveja: string; idUser: string }> = ({
  idCerveja,
  idUser,
}) => {
  const [rating, setRating] = useState<number>(1)
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewPics, setReviewPics] = useState<any[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsLoadingImage(true)

      const file = e.target.files[0]

      if (reviewPics.length >= 3) {
        alert('Você pode adicionar no máximo 3 imagens')
        return
      }

      try {
        const data = new FormData()
        data.append('image', file)
        const uploadedImage: CloudinaryResponse = await uploadReviewImage(data)

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        setReviewPics((prevPics) => [...prevPics, uploadedImage])
      } catch (err) {
        console.error(err)
        alert('erro ao processar')
      } finally {
        setIsLoadingImage(true)
      }
    }
  }

  const handleSubmit = async () => {
    if (rating < 1) {
      setError('Avaliação precisa ter no mínimo uma estrela')
      return
    }
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append('idCerveja', idCerveja)
    formData.append('idUser', idUser)
    formData.append('rating', String(rating))
    formData.append('reviewText', reviewText)
    reviewPics.forEach((pic) => {
      formData.append('reviewPics', JSON.stringify(pic))
    })

    try {
      const response = await addReviewV2(formData)
      console.log('resposta da action', response)
    } catch (err) {
      console.error(err)
      setError(
        'Opa, houve um problema ao enviar sua avaliação. Você pode tentar novamente ou ir tomar mais uma cervejinha. A escolha é sua.'
      )
    } finally {
      setIsSubmitting(false)
      router.refresh()
    }
  }

  const twInput =
    'text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3 rounded-md'

  return (
    <div>
      <div className="flex flex-col gap-4 px-8 py-6">
        <WrapperReviewImage
          setNota={setRating}
          nota={rating}
          //@ts-expect-error ts esta de sacanagem
          handler={handleFileInput}
        />
        {isLoadingImage && (
          <div className="w-full text-center text-marfim-barzim">
            Carregando imagem
          </div>
        )}
        <ImageSlotsWrapper
          imageUrls={reviewPics.map((pic) => pic.secure_url)}
        />
        <textarea
          className={twInput}
          placeholder="O que achou?"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <SendReviewButton isSubmitting={isSubmitting} onClick={handleSubmit} />
        {error && (
          <p className="border-1 mt-2 w-full rounded-sm border-solid border-red-700 bg-destructive p-4 text-white">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
