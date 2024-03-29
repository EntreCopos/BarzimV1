import { auth } from '@/auth'

/**
 * Obtém o usuário atualmente autenticado.
 * @returns {Promise<object | null>} Uma promessa que resolve com o objeto de usuário atualmente autenticado, ou null se não houver usuário autenticado.
 */
export const currentUser = async () => {
  const session = await auth()

  return session?.user
}

export const getCurrentUserId = async () => {
  const session = await auth()

  return session?.user.id as unknown as string
}

/**
 * Obtém o papel (role) do usuário atualmente autenticado.
 * @returns {Promise<string | null>} Uma promessa que resolve com o papel (role) do usuário atualmente autenticado, ou null se não houver usuário autenticado ou se o papel não estiver definido.
 */
export const currentRole = async () => {
  const session = await auth()

  return session?.user?.role
}
