import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'
import Link from 'next/link'
import { currentRole } from '@/lib/auth'

const AdminLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const role = await currentRole()
  if (role !== 'ADMIN') return <h1>Você não pode ver esta página</h1>
  else
    return (
      <div className="lg:w-max-screen-lg mx-auto flex flex-col ">
        <div className="flex justify-between gap-2 p-4">
          <Link href="/admin/cervejarias/adicionar">
            <span className="cursor-pointer text-accent-foreground">
              Adicionar Cervejaria
            </span>
          </Link>
          <Link href="/admin/tipos/adicionar">
            <span className="cursor-pointer text-accent-foreground">
              Adicionar Tipo de Cerveja
            </span>
          </Link>
          <Link href="/admin/cervejas/nova">
            <span className="cursor-pointer text-accent-foreground">
              Adicionar Cerveja
            </span>
          </Link>
        </div>
        <div style={{ paddingBlock: '2rem', paddingInline: '1rem' }}>
          {children}
        </div>
      </div>
    )
}

export default AdminLayout
