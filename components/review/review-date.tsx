interface ReviewDateProps {
    isoDate: string
}

const ReviewDate: React.FC<ReviewDateProps> = ({ isoDate }) => {
    const formattedDate = new Date(isoDate).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    return (
        <div className="text-left">
            <span className="text-[#FFFEEE] text-opacity-80 text-sm">em {formattedDate}</span>
        </div>
    )

}

export default ReviewDate