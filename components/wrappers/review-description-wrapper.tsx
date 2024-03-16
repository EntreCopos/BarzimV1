export const ReviewDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return <p className="text-sm text-secondary-foreground">{description}</p>
}
