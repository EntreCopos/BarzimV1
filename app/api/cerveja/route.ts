import { getAllCervejas } from '@/data/cervejas'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const allCervejas = await getAllCervejas()

  if (!!allCervejas) {
    return NextResponse.json({ data: allCervejas }, { status: 200 })
  } else return NextResponse.json({ err: 'faltou cerveja' }, { status: 418 })
}
