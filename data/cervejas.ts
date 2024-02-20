import { db } from '@/lib/db'
import { CervejaData } from './data'

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

export const getCervejaNameById = async (id: string | number) => {
  return await db.cerveja.findUnique({
    where: {
      id: +id
    },
    select: {
      nomeCerveja: true
    }
  })
}

export const getCervejarias = async () => {
  try {
    const cervejarias = await db.cervejaria.findMany() 
    return cervejarias
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
        CervejaShadow: {
          include: {
            tipoCerveja: true
          }
        },
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

export const createNewTipoCerveja = async (data: any) => {
  console.log('DADOS EM create new tipocerveja',data)
  
  await db.tipoCerveja.create({
    data
  })
}
export const createNewCervejaria = async (data: any) => {
  console.log('DADOS EM create new cervejaria', data)
  
  await db.cervejaria.create({
    data
  })
}
export const createNewCerveja = async (data: any)=> {  
  await db.cerveja.create({
    data
  })
}
