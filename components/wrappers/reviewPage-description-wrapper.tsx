export const ReviewPageDescription: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <div className="w-11/12">
      <p className="whitespace-pre-wrap text-sm text-marfim-barzim text-opacity-60">
        {description}
      </p>
    </div>
  )
}
