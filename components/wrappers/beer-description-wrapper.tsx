interface BeerDescriptionProps {
  description: string
}

import SectionTitle from "../dashboard/title-sections/title-section"

export const BeerDescription: React.FC<BeerDescriptionProps> = ({ description }) => {
  return (
    <div style={{padding: "0 30px"}}>
      <SectionTitle title="Descrição"/>
      <p className="text-marfim-barzim text-[0.8rem]">{description}</p>
    </div>
  )
  
}