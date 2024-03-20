'use client'
import { handleRelationship } from '@/actions/social'
import { useState } from 'react'
import { IoMdPersonAdd } from 'react-icons/io'
import { IoPersonRemove } from 'react-icons/io5'
import { Button } from '../ui/button'

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
    <form className="col-span-2 w-full" onSubmit={handleSubmit}>
      <Button className="h-full w-full text-2xl text-black" variant="default">
        {isFollowing ? (
          <>
            <IoPersonRemove />
            <span className="ml-2 hidden text-sm md:inline">
              Deixar de seguir
            </span>
          </>
        ) : (
          <>
            <IoMdPersonAdd />
            <span className="ml-2 hidden text-sm md:inline">Seguir</span>
          </>
        )}
      </Button>
    </form>
  )
}

export default FollowForm
