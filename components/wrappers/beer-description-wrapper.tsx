interface BeerDescriptionProps {
  description: string
}

import SectionTitle from '../dashboard/title-sections/title-section'

export const BeerDescription: React.FC<BeerDescriptionProps> = ({
  description,
}) => {
  return (
    <div style={{ padding: '0 30px' }}>
      <SectionTitle variant="small" title="Descrição" />
      <p className="mb-4 text-[0.8rem] text-marfim-barzim">{description}</p>
    </div>
  )
}
