'use client'

import { handleRelationship } from '@/actions/social'
import { revalidatePath } from 'next/cache'
import { useState } from 'react'
import { RiUserFollowLine, RiUserUnfollowLine } from 'react-icons/ri'
import styles from './follow.module.css'
import { cn } from '@/lib/utils'
import { IoMdPersonAdd } from 'react-icons/io'
import { IoPersonRemove } from 'react-icons/io5'

const FollowForm: React.FC<{
  myId: string
  user: string
  relationship: boolean
}> = ({ myId, user, relationship }) => {
  const [isFollowing, setIsFollowing] = useState(relationship)

  const handleSubmit = async () => {
    setIsFollowing(!isFollowing)

    try {
      await handleRelationship(myId, user)
      revalidatePath('/')
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
            {/* <span className={styles.labelBtn}>Deixar de seguir</span> */}
          </>
        ) : (
          <>
            <IoMdPersonAdd />
            {/* <span className={styles.labelBtn}>Seguir</span> */}
          </>
        )}
      </button>
    </form>
  )
}

export default FollowForm
