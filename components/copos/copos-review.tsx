'use client'
//@ts-expect-error nao tem declaração de tipo
import Ratings from 'react-ratings-declarative'

interface CoposReviewsProps {
  nota: number
  setNota?: (nota: number) => void
}

const CoposReviews: React.FC<CoposReviewsProps> = ({ nota, setNota }) => {
  return (
    <>
      <p className="text-xl text-secondary-foreground">Sua Nota</p>
      <Ratings
        rating={nota}
        widgetRatedColors="#fec435"
        widgetHoverColors="#fec435"
        widgetSpacing="0px"
        changeRating={setNota}
      >
        <Ratings.Widget widgetDimension={'24px'} />
        <Ratings.Widget widgetDimension={'24px'} />
        <Ratings.Widget widgetDimension={'24px'} />
        <Ratings.Widget widgetDimension={'24px'} />
        <Ratings.Widget widgetDimension={'24px'} />
      </Ratings>
    </>
  )
}

export default CoposReviews
