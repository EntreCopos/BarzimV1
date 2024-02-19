interface ReviewDescriptionProps {
    description: string
}

export const ReviewPageDescription: React.FC<ReviewDescriptionProps> = ({ description }) => {
    return (
        <div className="w-11/12">
            <p className="text-marfim-barzim text-sm text-opacity-60 whitespace-pre-wrap">{description}</p>
        </div>
    )
}