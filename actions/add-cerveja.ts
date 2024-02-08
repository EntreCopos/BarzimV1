'use server'

import type * as z from 'zod'

// import { db } from '@/lib/db'
import { AddCervejaSchema } from '@/schemas'
import { createNewCerveja } from '@/data/cervejas'

export const addCerveja = async (values: z.infer<typeof AddCervejaSchema>) => {
  const validatedFields = AddCervejaSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' }
  }

  const {
    nomeCerveja,
    teorAlcoolico,
    imagem,
    codBarras,
    marcaId,
    cervejariaId,
    tipoCervejaId,
  } = validatedFields.data

  const newCerveja = {
    nomeCerveja,
    teorAlcoolico: parseFloat(teorAlcoolico),
    imagem,
    codBarras,
    marcaId: parseInt(marcaId),
    cervejariaId: parseInt(cervejariaId),
    tipoCervejaId: parseInt(tipoCervejaId),
  }

  await createNewCerveja(newCerveja)

  return { success: 'cerveja criada!' }
}
