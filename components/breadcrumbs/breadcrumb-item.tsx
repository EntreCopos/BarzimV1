interface BreadcrumbItemProps {
    label: string
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label }) => {
    return (
        <span className="text-[#FFFEEF] text-opacity-60 font-medium text-[10px] bg-[#3D3D3D] bg-opacity-50 p-1 rounded-full">{label}</span>
    )
}