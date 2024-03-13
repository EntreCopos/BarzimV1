'use client'
import { handleRelationship } from '@/actions/social'
import { useState } from 'react'
import styles from './follow.module.css'
import { cn } from '@/lib/utils'
import { IoMdPersonAdd } from 'react-icons/io'
import { IoPersonRemove } from 'react-icons/io5'

/**
 * Representa um componente para lidar com ações de seguir/deixar de seguir.
 * @param {object} props - As props para o componente FollowForm.
 * @param {string} props.myId - O ID do usuário atual.
 * @param {string} props.user - O ID do usuário a seguir/deixar de seguir.
 * @param {boolean} props.relationship - O status de relacionamento atual entre o usuário atual e o usuário alvo.
 * @returns {JSX.Element} Um componente de formulário para seguir/deixar de seguir usuários.
 */

const FollowForm: React.FC<{
  myId: string
  user: string
  relationship: boolean
}> = ({ myId, user, relationship }) => {
  /**
   * Estado para rastrear se o usuário atual está seguindo o usuário alvo.
   * @type {[boolean, function(boolean): void]}
   */
  const [isFollowing, setIsFollowing] = useState(relationship)

  /**
   * Manipula a submissão do formulário para seguir/deixar de seguir o usuário.
   * Alterna o status de seguir e atualiza-o conforme necessário.
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsFollowing(!isFollowing)

    try {
      await handleRelationship(myId, user)
    } catch (err) {
      console.error('erro ao atualizar relacionamento:', err)
      setIsFollowing(!isFollowing)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" className={cn(styles.followBtn, 'text-2xl')}>
        {isFollowing ? (
          <>
            <IoPersonRemove />
          </>
        ) : (
          <>
            <IoMdPersonAdd />
          </>
        )}
      </button>
    </form>
  )
}

export default FollowForm
