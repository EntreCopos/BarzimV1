import React, { type Dispatch, type SetStateAction, type ChangeEvent } from 'react'
import CoposReviews from '@/components/copos/copos-review'
import { AddImageButton } from '@/components/buttons/add-image-review-button'
import styles from './wrapper-review-image.module.css' // Certifique-se de criar o arquivo de módulo CSS

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
    <div className={styles.wrapper}>
      <CoposReviews setNota={setNota} nota={nota} />
      <AddImageButton handler={handler} />
    </div>
  )
}

export default WrapperReviewImage
