import { db } from '@/lib/db'
import { shuffleArray } from '@/lib/utils'

/**
 * Obtém todas as cervejas do banco de dados, incluindo informações sobre a cervejaria e o tipo de cerveja.
 * @returns {Promise<Array>} Uma Promise que resolve para uma matriz de objetos representando as cervejas.
 */
export const getAllCervejas = async () => {
  try {
    return await db.cerveja.findMany({
      include: {
        cervejaria: true,
        tipoCerveja: true,
      },
    })
  } catch {
    return null
  }
}

/**
 * Conta todas as cervejas no banco de dados de forma assíncrona.
 * @return {Promise<number>} O número de cervejas no banco de dados ou null se ocorrer um erro.
 */
export const countAllCervejas = async (filter: any) => {
  try {
    return await db.cerveja.count({
      where: filter,
    })
  } catch {
    return null
  }
}

/**
 * Obtém o nome de uma cerveja pelo seu ID.
 * @param {string | number} id - O ID da cerveja.
 * @returns {Promise<{ nomeCerveja: string } | null>} Uma Promise que resolve para o nome da cerveja ou null se não for encontrada.
 */
export const getCervejaNameById = async (id: string | number) => {
  return await db.cerveja.findUnique({
    where: {
      id: +id,
    },
    select: {
      nomeCerveja: true,
    },
  })
}

/**
 * Obtém todas as cervejarias do banco de dados.
 * @returns {Promise<Array>} Uma Promise que resolve para uma matriz de objetos representando as cervejarias.
 */
export const getCervejarias = async () => {
  try {
    const cervejarias = await db.cervejaria.findMany()
    return cervejarias
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * Obtém um número específico de cervejas de forma aleatória para exibição no dashboard.
 * @param {number} size - O número de cervejas aleatórias a serem recuperadas.
 * @returns {Promise<Array>} Uma Promise que resolve para uma matriz de objetos representando as cervejas aleatórias.
 */
export const getRandomCervejasDashboard = async (size: number) => {
  try {
    const allCervejas = await db.cerveja.findMany({
      include: {
        cervejaria: true,
        tipoCerveja: true,
      },
    })

    const shuffledCervejas = shuffleArray(allCervejas)
    const randomCervejas = shuffledCervejas.slice(0, size)

    return randomCervejas
  } catch {
    return null
  }
}

/**
 * Obtém informações sobre uma cervejaria e suas cervejas com base no ID da cervejaria.
 * @param {string} id - O ID da cervejaria.
 * @returns {Promise<object | null>} Uma Promise que resolve para um objeto representando a cervejaria e suas cervejas ou null se não for encontrada.
 */
export const getCervejasByCervejaria = async (id: string) => {
  try {
    return await db.cervejaria.findUnique({
      where: {
        id: +id,
      },
      select: {
        nome: true,
        cervejas: {
          include: {
            tipoCerveja: true,
            cervejaria: true,
          },
        },
      },
    })
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * Obtém todos os tipos de cerveja do banco de dados.
 * @returns {Promise<Array>} Uma Promise que resolve para uma matriz de objetos representando os tipos de cerveja.
 */
export const getTiposDeCerveja = async () => {
  try {
    return await db.tipoCerveja.findMany()
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * Obtém todas as cervejas de um determinado tipo com base no ID do tipo de cerveja.
 * @param {string} id - O ID do tipo de cerveja.
 * @returns {Promise<Array>} Uma Promise que resolve para uma matriz de objetos representando as cervejas do tipo especificado.
 */
export const getCerverjasByTipo = async (id: string) => {
  try {
    return await db.tipoCerveja.findMany({
      where: {
        id: +id,
      },
    })
  } catch (err) {
    console.error(err)
    return null
  }
}

/**
 * Obtém informações sobre uma cerveja com base no seu ID.
 * @param {string} id - O ID da cerveja.
 * @returns {Promise<object | null>} Uma Promise que resolve para um objeto representando a cerveja ou null se não for encontrada.
 */
export const getCervejaById = async (id: string) => {
  if (typeof id == undefined) return null
  try {
    const cerveja = await db.cerveja.findUnique({
      where: {
        id: +id,
      },
      include: {
        tipoCerveja: true,
        cervejaria: true,
      },
    })

    return cerveja
  } catch {
    return null
  }
}

/**
 * Cria um novo tipo de cerveja no banco de dados.
 * @param {any} data - Os dados do tipo de cerveja a serem criados.
 */
export const createNewTipoCerveja = async (data: any) => {
  console.log('DADOS EM create new tipocerveja', data)

  await db.tipoCerveja.create({
    data,
  })
}

/**
 * Cria uma nova cervejaria no banco de dados.
 * @param {any} data - Os dados da cervejaria a serem criados.
 */
export const createNewCervejaria = async (data: any) => {
  console.log('DADOS EM create new cervejaria', data)

  await db.cervejaria.create({
    data,
  })
}

/**
 * Cria uma nova cerveja no banco de dados.
 * @param {any} data - Os dados da cerveja a serem criados.
 */
export const createNewCerveja = async (data: any) => {
  return await db.cerveja.create({
    data,
  })
}
