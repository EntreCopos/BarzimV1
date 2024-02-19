interface ReviewPageTitleProps {
    user: string
}

const ReviewTitle: React.FC<ReviewPageTitleProps> = ({ user }) => {
    return (
        <div>
            <h2 className={'font-bold text-xl text-marfim-barzim'}>Avaliação de <span className={'text-yellow-barzim'}>@{user}</span></h2>
        </div>
    )
}

export default ReviewTitle