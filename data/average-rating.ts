import { db } from '@/lib/db'

/**
 * Interface para representar o total e a contagem de notas por cerveja.
 */
interface NotasPorCerveja {
  [key: string]: { total: number; count: number }
}

/**
 * Calcula a média das notas para cada cerveja e atualiza a nota média no banco de dados.
 * @returns {Promise<{ success: boolean } | Error>} Um objeto indicando se a operação foi bem-sucedida ou um erro se ocorrer.
 */
export const calculateAverageRatingForBeers = async () => {
  // Obtém todas as avaliações com notas não nulas do banco de dados
  const avaliacoesComNota = await db.userCerveja.findMany({
    where: {
      nota: { not: null },
    },
    select: {
      cervejaId: true,
      nota: true,
    },
  })

  // Cria um objeto para armazenar o total e a contagem de notas por cerveja
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

  /**
   * Interface para representar os argumentos de atualização de uma cerveja.
   */
  interface TUpdateArgs {
    id: number
    notaMedia: number
  }

  // Cria uma lista de argumentos de atualização para cada cerveja
  const cervejasAtualizar: TUpdateArgs[] = []

  // Calcula a média das notas e adiciona os argumentos de atualização à lista
  for (const [cervejaId, { total, count }] of Object.entries(notasPorCerveja)) {
    const notaMedia = +(total / count).toPrecision(2)

    const cervejaUpdateArgs: TUpdateArgs = {
      id: +cervejaId,
      notaMedia,
    }
    cervejasAtualizar.push(cervejaUpdateArgs)
  }

  try {
    // Atualiza a nota média de todas as cervejas no banco de dados
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
