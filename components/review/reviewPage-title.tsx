interface ReviewPageTitleProps {
  user: string
}

const ReviewTitle: React.FC<ReviewPageTitleProps> = ({ user }) => {
  return (
    <div>
      <h2 className={'text-xl font-bold text-marfim-barzim'}>
        Avaliação de <span className={'text-yellow-barzim'}>@{user}</span>
      </h2>
    </div>
  )
}

export default ReviewTitle
