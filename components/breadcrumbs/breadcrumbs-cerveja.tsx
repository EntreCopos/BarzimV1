import { type CervejaBreadcrumbs } from '@/data/data'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const BreadcrumbsCerveja: React.FC<{ cerveja: CervejaBreadcrumbs }> = ({
  cerveja,
}) => {
  const { cervejaria } = cerveja
  return (
    <Breadcrumb className="p-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/cervejas">Cervejas</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/cervejarias/${cervejaria.path}`}>
            {cervejaria.nome}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem
          title={cerveja.nome}
          className="block max-w-[16ch] truncate"
        >
          <BreadcrumbPage>{cerveja.nome}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
