import { db } from '@/lib/db'
//import { type CervejaData } from './data.d'

export const getAllCervejas = async () => {
  try {
    return await db.cervejaShadow.findMany({
      include: {
        cervejaria: true,
        tipoCerveja: true,
      },
    })
  } catch {
    return null
  }
}

export const getCervejarias = async () => {
  try {
    return await db.cervejaria.findMany()
  } catch (err) {
    console.error(err)
    return null
  }
}

export const getCervejasByCervejaria = async (id: string) => {
  try {
    return await db.cervejaria.findUnique({
      where: {
        id: +id,
      },
      select: {
        nome: true,
        CervejaShadow: true,
      },
    })
  } catch (err) {
    console.error(err)
    return null
  }
}

export const getTiposDeCerveja = async () => {
  try {
    return await db.tipoCerveja.findMany()
  } catch (err) {
    console.error(err)
    return null
  }
}

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

export const getCervejaById = async (id: string) => {
  if (typeof id == undefined) return null
  try {
    const cerveja = await db.cervejaShadow.findUnique({
      include: {
        tipoCerveja: true,
        cervejaria: true,
      },
      where: {
        id: +id,
      },
    })

    return cerveja
  } catch {
    return null
  }
}

// export const createNewCerveja = async (data: CervejaData): Promise<void> => {
//   await db.cerveja.create({
//     data,
//   })
// }
