import { getCervejarias } from '@/data/cervejas'
import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const data = await getCervejarias()

  if (!data) {
    return NextResponse.json({ error: 'true' }, { status: 418 })
  }
  return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const body = await req.json()

  const data = await db.cervejaria.create({
    data: {
      ...body,
      createdAt: new Date(),
    },
  })

  return NextResponse.json(data)
}
