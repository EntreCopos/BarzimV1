import Link from 'next/link'

interface BreadcrumbItemProps {
  label: string
  path?: string | null
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  path = null,
}) => {
  if (!!path)
    return (
      <Link href={path}>
        <span className="rounded-full bg-[#3D3D3D] bg-opacity-50 px-2 py-1 text-[10px] font-medium text-[#FFFEEF] text-opacity-60">
          {label}
        </span>
      </Link>
    )
  else
    return (
      <span className="rounded-full bg-[#3D3D3D] bg-opacity-50 px-2 py-1 text-[10px] font-medium text-[#FFFEEF] text-opacity-60">
        {label}
      </span>
    )
}
