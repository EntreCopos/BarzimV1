export const ReviewText: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <p className="line-clamp-2 max-w-prose text-sm text-secondary-foreground">
      {description}
    </p>
  )
}
