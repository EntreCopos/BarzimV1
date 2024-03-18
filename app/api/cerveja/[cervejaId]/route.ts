import { getCervejaById } from '@/data/cervejas'
import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { cervejaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }

  const data = await getCervejaById(params.cervejaId)

  if (!data) {
    return NextResponse.json({ err: 'cervejaria not found' }, { status: 418 })
  }

  return NextResponse.json(data)
}

export const PUT = async (
  request: Request,
  { params }: { params: { cervejaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }
  const body = await request.json()

  const payload = {
    mainImage: body.mainImage,
    nomeCerveja: body.nomeCerveja,
    descriCerveja: body.descriCerveja,
    teorAlcoolico: body.teorAlcoolico,
    tempIdeal: body.tempIdeal,
    valorIBU: body.valorIBU,
    corpo: body.corpo,
    ingredientesCerveja: body.ingredientesCerveja,
    harmonizacoesCerveja: body.harmonizacoesCerveja,
    tipoCervejaId: body.tipoCervejaId,
    cervejariaId: body.cervejariaId,
  }

  console.log('Payload:', payload)

  const data = await db.cerveja.update({
    where: {
      id: +params.cervejaId,
    },
    data: payload,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  request: Request,
  { params }: { params: { cervejaId: string } }
) => {
  if (!(await isAllowed())) {
    return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
  }

  const data = await db.cerveja.delete({
    where: {
      id: +params.cervejaId,
    },
  })

  return NextResponse.json(data)
}
