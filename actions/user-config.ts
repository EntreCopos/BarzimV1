'use server'

import { db } from '@/lib/db'
import { AccountSettingsSchema } from '@/schemas'
import { type z } from 'zod'

type AccountSettingsValues = z.infer<typeof AccountSettingsSchema>

/**
 * Atualiza as configurações da conta do usuário com os valores fornecidos.
 * @param {object} values - Os valores fornecidos para as configurações da conta.
 * @param {string} values.name - O novo nome do usuário.
 * @param {string} values.username - O novo nome de usuário.
 * @param {string} values.link - O novo link da conta do usuário.
 * @param {string} values.cep - O novo CEP do usuário.
 * @param {string} values.bio - A nova biografia do usuário.
 * @param {string} userId - O ID do usuário cujas configurações de conta serão atualizadas.
 * @returns {Promise<{success: string} | {error: string}>} Um objeto indicando o resultado do processo de atualização das configurações da conta.
 * Se as configurações da conta forem atualizadas com sucesso, retorna um objeto de sucesso.
 * Se ocorrer algum erro durante o processo, retorna um objeto de erro com uma mensagem correspondente.
 */
export const updateAccountSettings = async (
  values: AccountSettingsValues,
  userId: string
) => {
  console.log('validated::', values, userId)
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
