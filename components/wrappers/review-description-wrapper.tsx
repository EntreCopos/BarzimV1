interface ReviewDescriptionProps {
  description: string
}

export const ReviewDescription: React.FC<ReviewDescriptionProps> = ({
  description,
}) => {
  return <p className="text-sm text-secondary-foreground">{description}</p>
}
