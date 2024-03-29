'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import Image from 'next/image'

import { cn } from '@/lib/utils'

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex shrink-0 overflow-hidden rounded-full',
      className
    )}
    style={{ width: '50px', height: '50px' }} // Set width and height here
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImageNext: React.FC<{
  className: string
  src: string
  size?: number
  alt?: string | null
}> = ({ className, src, size = 50, alt }) => {
  if (src !== 'undefined')
    return (
      <Image
        alt={'Avatar ' + alt}
        className={cn(
          'center h-full w-full rounded-full object-cover',
          className
        )}
        fill={true}
        sizes={size + 'px'}
        src={src}
      />
    )
}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('h-full w-full rounded-full', className)}
    style={{ objectFit: 'cover', objectPosition: 'center center' }}
    {...props}
  />
))

AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex aspect-square h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarImageNext, AvatarFallback }
