'use server'

import { db } from '@/lib/db'

export const loggedIn_Activity = async (userId: string) => {
  try {
    const data = await db.activity.create({
      data: {
        actionType: 'LOGGED',
        userId,
      },
    })
    return data
  } catch (err) {
    return null
  }
}
