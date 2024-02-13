import { BreadcrumbItem } from "./breadcrumb-item"
import { BreadcrumbSeparator } from "./breadcrumb-separator"

interface CervejaInfo {
    nomeCerveja: string
    cervejaria: { nome: string }
}

interface BreadcrumbsProps {
    cervejaInfo: CervejaInfo
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ cervejaInfo }) => {
    const { nomeCerveja, cervejaria } = cervejaInfo

    return (
        <div>
            <BreadcrumbItem label="Cervejas" />
            <BreadcrumbSeparator />
            <BreadcrumbItem label={cervejaria.nome} />
            <BreadcrumbSeparator />
            <BreadcrumbItem label={nomeCerveja} />
        </div>
    )
}