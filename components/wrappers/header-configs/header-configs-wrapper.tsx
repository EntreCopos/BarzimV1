'use client'

import FileInput from '@/components/forms/file-input'
import { FaRegImage } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import { removeProfilePic } from '@/actions/profile-image'
import AvatarReview from '@/components/avatar/avatar-review/avatar-review'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Avatar } from '@/components/ui/avatar'
import { type User } from '@/data/data'
import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export const HeaderConfigsWrapper = ({ user }: { user: User }) => {
  const [profilePic, setProfilePic] = useState<string>('')
  const router = useRouter()

  const handleProfilePicChange = (newPicUrl: string) => {
    setProfilePic(newPicUrl)
    toast('Foto de perfil atualizada com sucesso!')
  }

  const handleRemoveProfilePic = async (userId: string) => {
    try {
      await removeProfilePic(userId)
      setProfilePic('')
      toast('Foto de perfil removida com sucesso!')
      router.refresh()
    } catch (error) {
      console.error(error)
      toast('Erro ao remover foto de perfil. Tente novamente mais tarde.')
    }
  }
  const hasNoPic = profilePic === ''

  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden pb-7">
        <Avatar style={{ width: 120, height: 120 }}>
          <AvatarReview
            avatarSrc={profilePic || (user?.image as string)}
            width={120}
            height={120}
          />
        </Avatar>
        <div className="text-foreground-accent mt-3 inline-flex items-center justify-center gap-[1px]">
          <label className="cursor-pointer rounded-bl-md rounded-tl-md bg-accent px-4 py-3">
            <FileInput
              onProfilePicChange={handleProfilePicChange}
              userId={user?.id}
            />
            <FaRegImage />
          </label>
          <AlertDialog>
            <AlertDialogTrigger disabled={hasNoPic} asChild>
              <div
                aria-disabled={hasNoPic}
                className="cursor-pointer rounded-br-md rounded-tr-md bg-accent px-4 py-3 text-red-500"
              >
                <IoMdClose />
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Tem certeza que quer remover sua foto?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  O Barzim fica mais bonito com você aqui.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Mudei de Ideia :)</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/80"
                  onClick={() => handleRemoveProfilePic(user.id)}
                >
                  Confirmar e Remover
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}
