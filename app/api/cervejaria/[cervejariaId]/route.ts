import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { cervejariaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const data = await db.cervejaria.findFirst({
    where: {
      id: +params.cervejariaId,
    },
  })

  if (!data) {
    return NextResponse.json({ err: 'cervejaria not found' }, { status: 418 })
  }

  return NextResponse.json(data)
}

export const PUT = async (
  request: Request,
  { params }: { params: { cervejariaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const body = await request.json()

  const data = await db.cervejaria.update({
    where: {
      id: +params.cervejariaId,
    },
    data: {
      ...body,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      createdAt: new Date(body.createdAt),
    },
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  request: Request,
  { params }: { params: { cervejariaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const data = await db.cervejaria.delete({
    where: {
      id: +params.cervejariaId,
    },
  })

  return NextResponse.json(data)
}
