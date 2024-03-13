import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { PiCodeFill } from 'react-icons/pi'

export const ListaDeUsuarios: React.FC<{ usuarios: any[] }> = ({
  usuarios,
}) => {
  return (
    <ul className="flex flex-col px-1">
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
                    {user.role === 'ADMIN' && (
                      <span
                        className="ml-2 text-lg text-yellow-barzim"
                        title="DEV no Barzim"
                      >
                        <PiCodeFill size={20} />
                      </span>
                    )}
                  </div>
                  <div className="break-words text-xs text-gray-500">
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
