interface ReviewDescriptionProps {
    description: string
}

export const ReviewDescription: React.FC<ReviewDescriptionProps> = ({ description }) => {
    return <p className="text-white text-sm max-w-80">{description}</p>
}