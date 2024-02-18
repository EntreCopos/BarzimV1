import { type CervejaBreadcrumbs } from '@/data/data'
import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbSeparator } from './breadcrumb-separator'

export const Breadcrumbs: React.FC<{cerveja: CervejaBreadcrumbs}> = ({cerveja}) => {
  const {cervejaria} = cerveja
  return (
    <div style={{width: '100%', padding: '.5rem 2rem'}}>
      <BreadcrumbItem path={'/cervejas'} label="Cervejas" />
      <BreadcrumbSeparator />
      <BreadcrumbItem path={`/cervejarias/${cervejaria.path}`} label={cervejaria.nome} />
      <BreadcrumbSeparator />
      <BreadcrumbItem label={cerveja.nome} />
    </div>
  )
}
