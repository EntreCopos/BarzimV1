import { db } from '@/lib/db'
import BrindarIcon from './brindar-icon'
import { cn } from '@/lib/utils'
import { getCurrentUserId } from '@/lib/auth'
import {
  getUsersLikedUserCerveja,
  likeUserCerveja,
  undoLikeUserCerveja,
} from '@/actions/userCerveja'
import { revalidatePath, revalidateTag } from 'next/cache'

export const BrindarReviewButton: React.FC<{
  id: number | string
  likes?: number | null
}> = async ({ id, likes }) => {
  const userId = await getCurrentUserId()

  console.log('verificando review ', id, ' por usuario ::', userId)

  const usersLiked = await getUsersLikedUserCerveja(id as number)

  const countUsersLiked = usersLiked!._count.UsersLiked
  const arrUsersLiked = usersLiked?.UsersLiked
  const brindou = arrUsersLiked?.some((entry) => entry.userId === userId)
  const brindouVerb = countUsersLiked > 1 ? 'brindaram' : 'brindou'

  return (
    <form
      action={async () => {
        'use server'
        if (brindou) {
          await undoLikeUserCerveja(id as number)
        } else await likeUserCerveja(id as number)
        revalidatePath('/')
      }}
    >
      <button
        type="submit"
        className={cn(
          'inline-flex cursor-pointer items-center gap-1 rounded-lg  fill-accent-foreground p-2 px-3 text-xs text-accent-foreground hover:bg-accent md:text-sm',
          brindou && 'text-barzimContrast fill-yellow-barzim'
        )}
      >
        <BrindarIcon className="size-6" />
        <span className="">
          {brindou
            ? countUsersLiked > 1
              ? 'Você e mais ' + (countUsersLiked - 1) + ' ' + brindouVerb
              : 'Você ' + brindouVerb
            : countUsersLiked === 0
              ? 'Brindar'
              : countUsersLiked + ' ' + brindouVerb}
        </span>
      </button>
    </form>
  )
}
