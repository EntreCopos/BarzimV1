/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { addReview } from '@/actions/add-review'
import ImageSlotsWrapper from '../review/review-image/imageSlotsWrapper'

export type DeleteImageFromState = (index: number) => void


export const AvaliacaoForm = () => {
  const [rating, setRating] = useState<string | null>(null)
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewPics, setReviewPics] = useState<string[]>([])

  function handleFileInput(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    const pics = files.map((file) => URL.createObjectURL(file))
    if (reviewPics.length + pics.length > 4) {
      alert('Você pode adicionar no máximo 4 imagens')
    } else {
      setReviewPics((prevPics) => [...prevPics, ...pics])
    }
  }

  function removeImage(index: number){
    setReviewPics(reviewPics.splice(index, 1))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('rating', rating || '')
    formData.append('reviewText', reviewText)
    reviewPics.forEach((pic) => {
      formData.append('reviewPics', pic)
    })
    await addReview(formData)
  }

  return (
    <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit}>
      <input
        placeholder="Onde você bebeu?"
        type="text"
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        onChange={(e) => handleFileInput(e)}
        type="file"
        name="images"
        multiple
      />
      <input type="number" min={0} max={5} step={1} onChange={(e) => setRating(e.target.value)} name="rating" />
      <textarea
        placeholder="O que achou?"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button type="submit">Enviar Avaliação</button>
      <ImageSlotsWrapper delete={removeImage} imageUrls={reviewPics} />
    </form>
  )
}
