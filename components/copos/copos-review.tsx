import React from 'react'
//@ts-expect-error nao tem declaração de tipo
import Ratings from 'react-ratings-declarative'
import styles from './copos-review.module.css'

interface CoposReviewsProps {
  nota: number
  setNota: (nota: number) => void
}

const CoposReviews: React.FC<CoposReviewsProps> = ({ nota, setNota }) => {
  return (
    <div>
      <p className={styles.textNota}>Sua Nota</p>
      <div className={styles.imagesContainer}>
        <Ratings
          rating={nota}
          widgetRatedColors="#fec435"
          widgetEmptyColors="#fffeef60"
          widgetHoverColors="#fffeef"
          widgetSpacing="0px"
          changeRating={setNota}
        >
          <Ratings.Widget widgetDimension={'24px'} />
          <Ratings.Widget widgetDimension={'24px'} />
          <Ratings.Widget widgetDimension={'24px'} />
          <Ratings.Widget widgetDimension={'24px'} />
          <Ratings.Widget widgetDimension={'24px'} />
        </Ratings>
      </div>
    </div>
  )
}

export default CoposReviews
