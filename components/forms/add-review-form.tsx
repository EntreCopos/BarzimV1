/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import { addReview } from '@/actions/add-review'
import ImageSlotsWrapper from '../review/review-image/imageSlotsWrapper'
import { AddImageButton } from '../buttons/add-image-review-button'
import WrapperReviewImage from '../wrappers/wrapper-review-image/wrapper-review-image'

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

  const twInput = "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <form className="flex flex-col gap-4 p-6" onSubmit={handleSubmit}>

      <input
        className={twInput}
        placeholder="Onde você bebeu?"
        type="text"
        onChange={(e) => setRating(e.target.value)}
      />
      {/* <AddImageButton handler={handleFileInput} /> */}
      {/* <input

        onChange={(e) => handleFileInput(e)}
        type="file"
        name="images"
        multiple
      /> */}
      <WrapperReviewImage handler={handleFileInput}/>
      <ImageSlotsWrapper delete={removeImage} imageUrls={reviewPics} />
      <input type="number" min={0} max={5} step={1} onChange={(e) => setRating(e.target.value)} name="rating" />
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
