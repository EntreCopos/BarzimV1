import { db } from '@/lib/db'

interface NotasPorCerveja {
  [key: string]: { total: number; count: number }
}

export const calculateAverageRatingForBeers = async () => {
  const avaliacoesComNota = await db.userCerveja.findMany({
    where: {
      nota: { not: null },
    },
    select: {
      cervejaId: true,
      nota: true,
    },
  })

  const notasPorCerveja: NotasPorCerveja = avaliacoesComNota.reduce(
    (acc: NotasPorCerveja, { cervejaId, nota }) => {
      if (!acc[cervejaId]) {
        acc[cervejaId] = { total: 0, count: 0 }
      }
      acc[cervejaId].total += nota as number
      acc[cervejaId].count++
      return acc
    },
    {}
  )

  const cervejasAtualizar: TUpdateArgs[] = []

  interface TUpdateArgs {
    id: number
    notaMedia: number
  }

  for (const [cervejaId, { total, count }] of Object.entries(notasPorCerveja)) {
    const notaMedia = +(total / count).toPrecision(2)

    const cervejaUpdateArgs: TUpdateArgs = {
      id: +cervejaId,
      notaMedia,
    }
    cervejasAtualizar.push(cervejaUpdateArgs)
  }

  try {
    await Promise.all(
      cervejasAtualizar.map((updateArgs) =>
        db.cerveja.update({
          where: {
            id: updateArgs.id,
          },
          data: {
            notaMedia: updateArgs.notaMedia,
          },
        })
      )
    )
    return { success: true }
  } catch (err) {
    return err
  }
}
