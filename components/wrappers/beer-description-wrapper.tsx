interface BeerDescriptionProps {
  description: string
}

export const BeerDescription: React.FC<BeerDescriptionProps> = ({ description }) => {
  return <p className="text-marfim-barzim text-sm max-w-80">{description}</p>
}