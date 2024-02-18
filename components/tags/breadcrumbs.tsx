import { BreadcrumbItem } from './breadcrumb-item'
import { BreadcrumbSeparator } from './breadcrumb-separator'

interface Cervejaria {
  nome: string;
  path: number; 
}

interface CervejaBreadcrumbs {
  cervejaria: Cervejaria;
  nome: string;

}

export const Breadcrumbs: React.FC<{cerveja: CervejaBreadcrumbs}> = ({cerveja}) => {
  return (
    <div style={{width: '100%', padding: '.5rem 2rem'}}>
      <BreadcrumbItem label="Cervejas" />
      <BreadcrumbSeparator />
      <BreadcrumbItem label={cerveja.cervejaria.nome} />
      <BreadcrumbSeparator />
      <BreadcrumbItem label={cerveja.nome} />
    </div>
  )
}
