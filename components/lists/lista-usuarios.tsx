import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { type User } from '@/data/data'
import { DevBadge } from '@/components/badges/name-badges/dev-badge/dev-badge'

export const ListaDeUsuarios: React.FC<{ usuarios: User[] }> = ({
  usuarios,
}) => {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {!!usuarios &&
        usuarios.map((user) => {
          return (
            <li key={user.id} className="flex items-center gap-4 p-2">
              <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                <Avatar>
                  <AvatarImage
                    src={user?.image ?? 'undefined'}
                    className="h-12"
                  />
                  <AvatarFallback className="bg-yellow-barzim">
                    {firstTwoLetters(user?.name)}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    {user?.name}
                    {user.role === 'ADMIN' && <DevBadge size={20} />}
                  </div>
                  <div className="break-words text-xs text-accent-foreground/60">
                    @{user.username}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
    </ul>
  )
}
