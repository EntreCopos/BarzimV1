import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const data = await db.userCerveja.findMany({
    select: {
      id: true,
      usuarioId: true,
      cervejaId: true,
      createdAt: true,
      favorita: true,
      queroBeber: true,
      jaBebida: true,
      reviewTexto: true,
      nota: true,
      imagens: true,
    },
  })

  if (!data) {
    return NextResponse.json({ err: 'user not found' }, { status: 418 })
  }
  return NextResponse.json(data)
}
