import NavWrapper from "@/components/dashboard/nav-wrapper/nav-wrapper"
import Link from "next/link"

const AdminLayout: React.FC<{children: React.ReactNode}> = async ({ children }) => {
  return (
    <div className="min-h-screen max-w-lg mx-auto bg-gray-200">
      <NavWrapper/>
      <div className="flex justify-between gap-2 p-4">
          <Link href="/admin/cervejarias/adicionar">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Cervejaria
            </span>
          </Link>
          <Link href="/admin/tipos/adicionar">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Tipo de Cerveja
            </span>
          </Link>
          <Link href="/admin/cervejas/nova">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">
              Adicionar Cerveja
            </span>
          </Link>
      </div>

      <div className="container mx-auto px-4 py-8">{children}</div>
    </div>
  )

}

export default AdminLayout
