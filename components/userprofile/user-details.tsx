'use client'
import { cn, firstTwoLetters, sanitizeUserLink } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import AvatarReview from '../avatar/avatar-review/avatar-review'
import React from 'react'
import { User } from '@/data/data'

export const UserDetails: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div
      className={cn(
        "grid gap-6 p-6 [grid-template-areas:_'avatar_info-txt'] [grid-template-columns:_auto_2fr]"
      )}
    >
      <div
        className={cn('flex content-center items-center [grid-area:_avatar]')}
      >
        <Avatar className={cn('h-29 w-29 relative flex items-center')}>
          <AvatarReview
            avatarSrc={user.image as string}
            width={120}
            height={120}
          />
          {!user.image && (
            <AvatarFallback className={cn('absolute left-0')}>
              {firstTwoLetters(user?.name)}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <div
        className={cn(
          'flex flex-col content-start gap-2 py-4 [grid-area:_info-txt]'
        )}
      >
        <h2 className={cn('text-xl text-yellow-barzim')}>{user.name}</h2>
        <section>
          <h3 className={cn('pb-1 text-sm text-slate-barzim')}>Bio</h3>
          <p className={cn('text-sm text-marfim-barzim')}>{user.bio}</p>
        </section>
        {user.link && (
          <section className={cn('flex items-center gap-2')}>
            <h3 className={cn('pb-1 text-sm text-slate-barzim')}>Link</h3>
            <a className={cn('text-sm text-yellow-barzim')} href={user.link}>
              {sanitizeUserLink(user.link as string)}
            </a>
          </section>
        )}
      </div>
    </div>
  )
}
