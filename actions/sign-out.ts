'use server'

import { signOut } from '@/auth'

export const SignOut = async () => {
  await signOut()
}
