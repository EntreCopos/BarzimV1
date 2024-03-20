import Link from 'next/link'
import { currentRole } from '@/lib/auth'
import { Button } from '../ui/button'
import { menuItems } from '@/content/menu-items'

export const SideMenu = async ({ currUser }: { currUser: string }) => {
  const role = await currentRole()

  return (
    <section className="sticky top-[70px] mx-auto hidden w-full pl-2 md:block lg:pl-0">
      <ul className="flex w-full flex-col gap-2 py-6 text-lg">
        {menuItems.map((item) => {
          const href = item.href.replace('{{currUser}}', currUser)

          if ((item.admin && role === 'ADMIN') || !item.admin) {
            return (
              <li key={item.title} className="text-center">
                <Link href={href}>
                  <Button
                    className="flex w-full justify-start gap-4 text-left"
                    variant={'ghost'}
                  >
                    <item.icon size={24} />
                    <p>{item.title}</p>
                  </Button>
                </Link>
              </li>
            )
          } else {
            return null
          }
        })}
      </ul>
    </section>
  )
}
