import { menuItems } from '@/content/menu-items'
import { currentRole } from '@/lib/auth'
import Link from 'next/link'

export const BottomMenu = async ({ currUser }: { currUser: string }) => {
  const textSize = { fontSize: '10px' }
  const role = await currentRole()

  return (
    <section className="sticky bottom-0 z-10 flex w-full items-center justify-center bg-[#141414]/90 p-2 backdrop-blur-md md:hidden">
      <ul className="flex w-full items-center justify-between px-6 text-yellow-barzim">
        {menuItems.map((item) => {
          const href = item.href.replace('{{currUser}}', currUser)
          if (item.showOnMobile) {
            if (!item.admin || (item.admin && role === 'ADMIN'))
              return (
                <li key={item.title}>
                  <Link href={href}>
                    <div className="text-cente flex aspect-square w-full min-w-10 flex-1 basis-1/3 flex-col items-center gap-1">
                      <item.icon size={24} />
                      <p style={textSize}>{item.title}</p>
                    </div>
                  </Link>
                </li>
              )
          } else return null
        })}
      </ul>
    </section>
  )
}
