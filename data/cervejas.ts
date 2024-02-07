import { db } from '@/lib/db'
import { type CervejaData } from './data.d'

// export const getUserByEmail = async (email: string) => {
//   try {
//     const user = await db.user.findUnique({ where: { email } })

//     return user
//   } catch {
//     return null
//   }
// }

export const getAllCervejas = async () => {
  try {
    const cervejas = await db.cerveja.findMany()
    return cervejas
  } catch {
    return null
  }
}

export const getCervejaById = async (id: number) => {
  //console.log('getCervejaById recebeu ID :::', id)
  if (typeof id == undefined) return null
  try {
    const cerveja = await db.cerveja.findUnique({ where: { id } })

    //console.log('getCervejaById buscou objeto:::', cerveja)

    return cerveja
  } catch {
    return null
  }
}

export const createNewCerveja = async (data: CervejaData): Promise<void> => {
  await db.cerveja.create({
    data,
  })
}
