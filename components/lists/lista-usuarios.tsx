import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { firstTwoLetters } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { PiCodeBold } from "react-icons/pi"


// URL para o ícone de avatar padrão
const defaultAvatarIcon = 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
const devs = ['andre', 'larabernspereira614', 'naneto', 'elianoliveira234647', 'evandroreichert']

export const ListaDeUsuarios: React.FC<{ usuarios: any[] }> = ({ usuarios }) => {
  return (
    <div className='flex flex-col px-1'>
      {!!usuarios &&
        usuarios.map((user) => {
          return (
            <div key={user.id} className='p-2 flex items-start gap-2'>
              <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                <Avatar>
                  <AvatarImage src={user?.image ?? defaultAvatarIcon} className='h-12' />
                  <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
                </Avatar>
              </Link>

              <div className='flex flex-col items-start'>
                <div className='flex items-center'>
                  {user?.name}
                  <span className='ml-2 text-lg text-yellow-barzim' title='Desenvolvedor'>{devs.includes(user.username) ? <PiCodeBold /> : ''}</span>
                </div>
                <div className='text-xs text-gray-500 break-words'>
                  {/* Isso aqui tá BEM gambiarra mas tá funcionando */}
                  {user.bio == "Esse usuÃ¡rio misterioso ainda nÃ£o escreveu uma bio"
                    ? "Esse usuário misterioso ainda não escreveu uma bio"
                    : user.bio
                  }
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}