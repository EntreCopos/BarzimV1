'use client'
import { type User } from '@/data/data'
import { cn, firstTwoLetters, sanitizeUserLink } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'
import AvatarReview from '../avatar/avatar-review/avatar-review'
import { PiCodeFill } from 'react-icons/pi'

export const UserDetails: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div
      className={cn(
        "grid gap-6 p-6 [grid-template-areas:_'avatar_info-txt'] [grid-template-columns:_auto_2fr]"
      )}
    >
      <div className={cn('flex content-center items-center')}>
        <Avatar className={cn('h-29 w-29 relative')}>
          <AvatarReview
            avatarSrc={user.image as string}
            width={120}
            height={120}
          />
          {!user.image && (
            <AvatarFallback
              className={cn(
                'absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-3xl font-bold text-white'
              )}
            >
              <div>{firstTwoLetters(user?.name)}</div>
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <div
        className={cn(
          'flex flex-col content-start gap-2 py-4 [grid-area:_info-txt]'
        )}
      >
        <h2
          className={cn(
            'inline-flex items-center gap-2 text-xl text-accent-foreground'
          )}
        >
          {user.name}
          {user.role === 'ADMIN' && (
            <span
              className="inline text-lg text-yellow-barzim"
              title="DEV no Barzim"
            >
              <PiCodeFill size={20} />
            </span>
          )}
        </h2>
        <section>
          <h3 className={cn('pb-1 text-sm text-accent-foreground opacity-60')}>
            Bio
          </h3>
          <p className={cn('text-sm text-accent-foreground')}>{user.bio}</p>
        </section>
        {user.link && (
          <section className={cn('flex items-center gap-2')}>
            <h3 className={cn('pb-1 text-sm text-accent-foreground')}>Link</h3>
            <a
              className={cn('text-sm text-yellow-barzim')}
              href={user.link}
              target="_blank"
            >
              {sanitizeUserLink(user.link as string)}
            </a>
          </section>
        )}
      </div>
    </div>
  )
}
