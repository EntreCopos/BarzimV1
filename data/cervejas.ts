import { db } from '@/lib/db'
//import { type CervejaData } from './data.d'

export const getAllCervejas = async () => {
  try {
    const cervejas = await db.cerveja.findMany()
    console.log('LOGANDO CERVAS', cervejas)

    return cervejas
  } catch {
    return null
  }
}

export const getCervejaById = async (id: number) => {
  //console.log('getCervejaById recebeu ID :::', id)
  if (typeof id == undefined) return null
  try {
    const cerveja = await db.cerveja.findUnique({
      include: {
        tipoCerveja: true,
        cervejaria: true,
      },
      where: { id },
    })

    //console.log('getCervejaById buscou objeto:::', cerveja)

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
