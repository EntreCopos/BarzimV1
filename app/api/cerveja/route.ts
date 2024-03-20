import { countAllCervejas, createNewCerveja } from '@/data/cervejas'
import { isAllowed } from '@/lib/api-admin-check'
import { db } from '@/lib/db'
import { type NextRequest, NextResponse } from 'next/server'

/**
 * Método GET para recuperar dados de cerveja com filtragem, ordenação e paginação opcionais.
 *
 * @param {NextRequest} req - O objeto de requisição do Next.js.
 * @returns {NextResponse} Um objeto de resposta do Next.js contendo os dados de cerveja solicitados.
 * @throws {NextResponse} Um objeto de resposta do Next.js com uma mensagem de erro se ocorrer um erro durante o processamento.
 */
export const GET = async (req: NextRequest) => {
  try {
    if (!(await isAllowed())) {
      return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
    }

    const [atributo, ordem]: [string | null, string | null] = JSON.parse(
      req.nextUrl.searchParams.get('sort') as string
    ) || [null, null]

    const range = JSON.parse(
      req.nextUrl.searchParams.get('range') as string
    ) || [0, 50]
    const [start, end]: [number, number] = range

    const filterString = req.nextUrl.searchParams.get('filter')
    let filter: any = {}
    if (filterString) {
      filter = JSON.parse(filterString)
    }

    if (filter.id && Array.isArray(filter.id)) {
      filter.id = {
        in: filter.id,
      }
    }

    const takeByDefineCount = end - start + 1
    const takeByFilter = filter?.id?.in?.length || 0
    const take = Math.max(takeByDefineCount, takeByFilter)

    const count = await countAllCervejas(filter)

    const data = await db.cerveja.findMany({
      where: filter,
      orderBy: {
        [atributo || 'nomeCerveja']: ordem?.toLowerCase() || 'asc',
      },
      skip: start,
      take: take,
    })

    return NextResponse.json(data, {
      headers: {
        'Content-Range': `cerveja ${start}-${end}/${count}`,
      },
    })
  } catch (error) {
    console.error('Erro ao processar a requisição:', error)

    return NextResponse.json(
      { err: 'erro interno do servidor' },
      { status: 500 }
    )
  }
}

export const POST = async (req: Request) => {
  try {
    if (!(await isAllowed())) {
      return NextResponse.json({ err: 'unauthorized' }, { status: 401 })
    }

    const body = await req.json()

    if (!body) {
      return NextResponse.json(
        { err: 'Corpo da requisição ausente ou inválido' },
        { status: 400 }
      )
    }

    const data = await createNewCerveja(body)

    return NextResponse.json(data)
  } catch (error) {
    console.error('Erro ao processar a requisição POST:', error)

    return NextResponse.json(
      { err: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
