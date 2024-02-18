'use client'
/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, FormEvent, useState } from 'react'
import { addReview } from '@/actions/add-review'
import ImageSlotsWrapper from '../review/review-image/imageSlotsWrapper'
import WrapperReviewImage from '../wrappers/wrapper-review-image/wrapper-review-image'

interface AvaliacaoFormProps {
}

export const AvaliacaoForm: React.FC<AvaliacaoFormProps> = () => {
  const [rating, setRating] = useState<number>(0) // Defina o tipo como number
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewPics, setReviewPics] = useState<string[]>([])

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const pics = files.map((file) => URL.createObjectURL(file))
    if (reviewPics.length + pics.length > 4) {
      alert('Você pode adicionar no máximo 4 imagens')
    } else {
      setReviewPics((prevPics) => [...prevPics, ...pics])
    }
  }

  // const removeImage: DeleteImageFromState = (index) => {
  //   // Tipo DeleteImageFromState adicionado
  //   const newReviewPics = [...reviewPics]
  //   newReviewPics.splice(index, 1)
  //   setReviewPics(newReviewPics)
  // }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('rating', String(rating)) // Converta para string, pois formData aceita apenas string
    formData.append('reviewText', reviewText)
    reviewPics.forEach((pic) => {
      formData.append('reviewPics', pic)
    })
    await addReview(formData)
  }

  const twInput =
    'text-white text-opacity-60 bg-zinc-700 bg-opacity-60 border-black border-2 border-opacity-20 w-full h-fit p-3 rounded-md'

  return (
    <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit}>
      <WrapperReviewImage
        ratingSetter={setRating}
        nota={rating}
        //@ts-expect-error ts esta reclamando da tipagem da funcao que captura o change
        handler={handleFileInput}
      />
      <ImageSlotsWrapper imageUrls={reviewPics} />
      <textarea
        className={twInput}
        placeholder="O que achou?"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Enviar Avaliação</button>
    </form>
  )
}
