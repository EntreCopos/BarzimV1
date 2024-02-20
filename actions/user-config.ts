import { db } from '@/lib/db'
import { AccountSettingsSchema } from '@/schemas'
import { z } from 'zod'

type AccountSettingsValues = z.infer<typeof AccountSettingsSchema>

export const updateAccountSettings = async (values: AccountSettingsValues) => {
  const validatedFields = AccountSettingsSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Campos inválidos' } as const
  }

  const { name, user, link, city, gender, bio } = validatedFields.data

  try {
    await db.user.update({
      where: {
        // COMO ACHA O USEERRRRRRR
      },
      data: {
        name,
        user,
        link,
        city,
        gender,
        bio,
      },
    })

    return {
      success: 'Configurações da conta atualizadas com sucesso',
    } as const
  } catch (error) {
    return { error: 'Erro ao atualizar as configurações da conta' } as const
  }
}
