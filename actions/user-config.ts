"use server"

import { db } from '@/lib/db'
import { AccountSettingsSchema } from '@/schemas'
import { type z } from 'zod'

type AccountSettingsValues = z.infer<typeof AccountSettingsSchema>

export const updateAccountSettings = async (
  values: AccountSettingsValues,
  userId: string
) => {
  console.log('validated::' , values, userId)
  const validatedFields = AccountSettingsSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' } as const
  }

  const { name, username, link, cep, bio } = validatedFields.data

  try {
    await db.user.update({
      data: {
        name,
        username,
        link,
        cep,
        bio,
      },
      where: { id: userId },
    })

    return {
      success: 'Configurações da conta atualizadas com sucesso',
    } as const
  } catch (error) {
    return { error: 'Erro ao atualizar as configurações da conta' } as const
  }
}
