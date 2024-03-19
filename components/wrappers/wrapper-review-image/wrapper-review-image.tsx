import React, {
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from 'react'
import CoposReviews from '@/components/copos/copos-review'
import { AddImageButton } from '@/components/buttons/add-image-review-button'
import SectionTitle from '@/components/dashboard/title-sections/title-section'

interface WrapperReviewImageProps {
  handler: (e?: ChangeEvent<HTMLInputElement>) => void
  setNota: Dispatch<SetStateAction<number>>
  nota: number
}

const WrapperReviewImage: React.FC<WrapperReviewImageProps> = ({
  handler,
  setNota,
  nota,
}) => {
  return (
    <>
      <div className="w-full items-center justify-between rounded-lg py-8">
        <CoposReviews setNota={setNota} nota={nota} />
      </div>
      <SectionTitle title="Adicione imagens ao seu review" />
      <AddImageButton handler={handler} />
    </>
  )
}

export default WrapperReviewImage
