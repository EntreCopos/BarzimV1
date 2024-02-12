import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function firstTwoLetters(name: string | undefined | null): string {
  if (typeof name == 'undefined' || name == null) return 'US'

  return name.substring(0, 2).toUpperCase()
}
