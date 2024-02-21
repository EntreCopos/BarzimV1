'use client'
import { useState } from 'react'
import { addReview } from '@/actions/add-review'
import ImageSlotsWrapper from '../review/review-image/imageSlotsWrapper'
import WrapperReviewImage from '../wrappers/wrapper-review-image/wrapper-review-image'
import SendReviewButton from '../buttons/send-review-button/send-review-button'

const MAX_FILE_SIZE = 300 * 1024

export const AvaliacaoForm: React.FC<{ idCerveja: string; idUser: string }> = ({
  idCerveja,
  idUser,
}) => {
  const [rating, setRating] = useState<number>(0)
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewPics, setReviewPics] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (reviewPics.length + files.length > 3) {
      alert('Você pode adicionar no máximo 4 imagens')
      return
    }

    try {
      const picsBase64Promises = files.map(async (file) => {
        if (file.size > MAX_FILE_SIZE) {
          alert(
            `wow!!! ${file.name} é muito grande. meus grande infelizmente, o máximo permitido é de ${(MAX_FILE_SIZE / (1024 * 1024)).toFixed(2)} MB.`
          )
          return null
        }
        return await convertFileToBase64(file)
      })

      const picsBase64 = await Promise.all(picsBase64Promises)

      const validPicsBase64 = picsBase64.filter(
        (pic) => pic !== null
      ) as string[]

      setReviewPics((prevPics) => [...prevPics, ...validPicsBase64])
    } catch (err) {
      console.error(err)
      alert('erro ao processar')
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

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const formData = new FormData()
    formData.append('idCerveja', idCerveja)
    formData.append('idUser', idUser)
    formData.append('rating', String(rating))
    formData.append('reviewText', reviewText)
    reviewPics.forEach((pic) => {
      formData.append('reviewPics', pic)
    })

    try {
      const response = await addReview(formData)
      console.log('resposta da action', response)
      if(response.success){
        window.location.reload()
      }
    } catch (err) {
      console.error(err)
      setError(
        'Opa, houve um problema ao enviar sua avaliação. Você pode tentar novamente ou ir tomar mais uma cervejinha. A escolha é sua.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const twInput =
    'text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3 rounded-md'

  return (
    <div>
      <div className="flex flex-col gap-4 py-6 px-8">
        <WrapperReviewImage
          setNota={setRating}
          nota={rating}
          //@ts-expect-error ts esta de sacanagem
          handler={handleFileInput}
        />
        <ImageSlotsWrapper imageUrls={reviewPics} />
        <textarea
          className={twInput}
          placeholder="O que achou?"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        
        <SendReviewButton isSubmitting={isSubmitting} onClick={handleSubmit}/>
          
        {error && <p className='bg-destructive w-full rounded-sm p-4 border-1 text-white border-solid border-red-700'>{error}</p>}
      </div>
    </div>
  )
}
