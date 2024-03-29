'use server'

import { getCurrentUserId } from '@/lib/auth'
import { db } from '@/lib/db'

export const brindou_Activity = async (id: number) => {
  const userId = await getCurrentUserId()
  await db.activity.create({
    data: {
      userId,
      actionType: 'REVIEW_LIKED',
      actionTarget: id + '',
    },
  })
}

export const undoBrindou_Activity = async (id: number) => {
  const userId = await getCurrentUserId()
  await db.activity.create({
    data: {
      userId,
      actionTarget: id + '',
      actionType: 'REVIEW_DISLIKED',
    },
  })
}
