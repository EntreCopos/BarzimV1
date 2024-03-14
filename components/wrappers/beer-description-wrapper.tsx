interface BeerDescriptionProps {
  description: string
}

import SectionTitle from '../dashboard/title-sections/title-section'

export const BeerDescription: React.FC<BeerDescriptionProps> = ({
  description,
}) => {
  return (
    <div style={{ padding: '0 32px' }}>
      <SectionTitle variant="small" title="Descrição" />
      <p className="mb-4 text-sm text-secondary-foreground">{description}</p>
    </div>
  )
}
