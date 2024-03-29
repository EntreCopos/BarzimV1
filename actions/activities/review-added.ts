'use server'

import { db } from '@/lib/db'

export const reviewAdded_Activity = async (
  userId: string,
  cervejaId: number | string
) => {
  try {
    const data = await db.activity.create({
      data: {
        actionType: 'BEER_RATED',
        userId,
        actionTarget: cervejaId + '',
      },
    })
    return data
  } catch (err) {
    return null
  }
}
