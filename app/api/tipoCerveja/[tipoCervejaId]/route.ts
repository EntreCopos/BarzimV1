import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { tipoCervejaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }

  const data = await db.tipoCerveja.findFirst({
    where: {
      id: +params.tipoCervejaId,
    },
  })

  if (!data) {
    return NextResponse.json(
      { err: 'tipo de cerveja not found' },
      { status: 418 }
    )
  }

  return NextResponse.json(data)
}

export const PUT = async (
  request: Request,
  {
    params,
  }: {
    params: { tipoCervejaId: string }
  }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const body = await request.json()

  const data = await db.tipoCerveja.update({
    where: {
      id: +params.tipoCervejaId,
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
  { params }: { params: { tipoCervejaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const data = await db.tipoCerveja.delete({
    where: {
      id: +params.tipoCervejaId,
    },
  })

  return NextResponse.json(data)
}
