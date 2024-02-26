'use server'
import { createFollow, deleteFollow, findRelationship } from '@/data/social'

/**
 * Verifica se um usuário está seguindo outro usuário.
 * @param {string} userIdA - O ID do usuário que está realizando a verificação.
 * @param {string} userIdB - O ID do usuário que está sendo verificado se está sendo seguido.
 * @returns {Promise<boolean | null>} Uma promessa que resolve com verdadeiro se userIdA estiver seguindo userIdB, falso se não estiver seguindo ou nulo se ocorrer um erro durante o processo.
 */
export const isFollowing = async (userIdA: string, userIdB: string) => {
  try {
    const res = await findRelationship(userIdA, userIdB)
    return res
  } catch (err) {
    return null
  }
}

/**
 * Faz com que um usuário comece a seguir outro usuário.
 * @param {string} userIdA - O ID do usuário que começará a seguir o outro usuário.
 * @param {string} userIdB - O ID do usuário que será seguido.
 * @returns {Promise<void | null>} Uma promessa que resolve se o processo de seguir for concluído com sucesso ou nulo se ocorrer um erro durante o processo.
 */
export const follow = async (userIdA: string, userIdB: string) => {
  try {
    await createFollow(userIdA, userIdB)
  } catch (err) {
    return null
  }
}

/**
 * Faz com que um usuário pare de seguir outro usuário.
 * @param {string} userIdA - O ID do usuário que deixará de seguir o outro usuário.
 * @param {string} userIdB - O ID do usuário que será deixado de seguir.
 * @returns {Promise<void>} Uma promessa que resolve quando o processo de deixar de seguir for concluído com sucesso.
 * @throws Lança um erro se ocorrer algum problema durante o processo.
 */
export const unfollow = async (userIdA: string, userIdB: string) => {
  try {
    await deleteFollow(userIdA, userIdB)
  } catch (err) {
    throw err
  }
}

/**
 * Manipula o relacionamento entre dois usuários, fazendo com que um usuário comece a seguir ou pare de seguir o outro, dependendo do estado atual do relacionamento.
 * @param {string} userIdA - O ID do usuário que está iniciando ou parando de seguir o outro usuário.
 * @param {string} userIdB - O ID do usuário que será seguido ou deixará de ser seguido, dependendo do estado atual do relacionamento.
 * @returns {Promise<void | null>} Uma promessa que resolve se o processo de manipulação do relacionamento for concluído com sucesso ou nulo se ocorrer um erro durante o processo.
 */
export const handleRelationship = async (userIdA: string, userIdB: string) => {
  try {
    const _isFollowing = await findRelationship(userIdA, userIdB)

    if (!!_isFollowing) {
      await deleteFollow(userIdA, userIdB)

      console.log(userIdA, 'parou de seguir ', userIdB)
    } else {
      await createFollow(userIdA, userIdB)
    }
  } catch (err) {
    return null
  }
}
