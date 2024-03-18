import { countAllCervejas, createNewCerveja } from '@/data/cervejas'
import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { type NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }

  const [atributo, ordem]: [string, string] = JSON.parse(
    req.nextUrl.searchParams.get('sort') as string
  )
  const range = JSON.parse(req.nextUrl.searchParams.get('range') as string)
  const [start, end] = range

  const count = (await countAllCervejas()) as number
  const data = await db.cerveja.findMany({
    orderBy: {
      [atributo]: ordem.toLowerCase(),
    },
    skip: start,
    take: end - start + 1,
  })

  if (!data) {
    return NextResponse.json({ err: 'faltou cerveja' }, { status: 418 })
  }
  return NextResponse.json(data, {
    headers: {
      'Content-Range': `cerveja ${start}-${end}/${count}`,
    },
  })
}

export const POST = async (req: Request) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const body = await req.json()

  const data = await createNewCerveja(body)

  return NextResponse.json(data)
}
