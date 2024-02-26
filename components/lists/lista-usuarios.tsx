import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { firstTwoLetters } from '@/lib/utils';

// URL para o ícone de avatar padrão
const defaultAvatarIcon =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg';

export const ListaDeUsuarios: React.FC<{ usuarios: any[] }> = ({ usuarios }) => {
  return (
    <div className='flex flex-col px-1'>
      {/* Verificando se existem usuários */}
      {!!usuarios &&
        // Mapeando cada usuário para um componente Avatar
        usuarios.map((user) => {
          return (
            <div key={user.id} className='p-2 flex items-start gap-2'>
              {/* Link para a página de perfil do usuário */}
              <Link href={`/usuarios/${user.username} ` ?? 'dashboard'}>
                <Avatar>
                  {/* Imagem do Avatar, com fallback para o ícone padrão */}
                  <AvatarImage src={user?.image ?? defaultAvatarIcon} className='h-12' />
                  {/* Fallback para as duas primeiras letras do nome do usuário se a imagem não estiver disponível */}
                  <AvatarFallback>{firstTwoLetters(user?.name)}</AvatarFallback>
                </Avatar>
              </Link>

              <div className='flex flex-col items-start'>
                <div>{user?.name}</div>
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
  );
}