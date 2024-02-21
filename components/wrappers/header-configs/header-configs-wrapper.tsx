"use client"

import FileInput from '@/components/forms/file-input'
import { FaRegImage } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'
import styles from './config.module.css'

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
} from "@/components/ui/alert-dialog"
import { Avatar } from '@/components/ui/avatar'
import { type User } from '@/data/data'
import { useState } from 'react'
import { toast } from "sonner"

export const HeaderConfigsWrapper = ({ user }: { user: User }) => {

    const [profilePic, setProfilePic] = useState<string>('')

    const handleProfilePicChange = (newPicUrl: string) => {
        setProfilePic(newPicUrl)
        toast("Foto de perfil atualizada com sucesso!")
    }

    const handleRemoveProfilePic = async (userId: string) => {
        try {
            await removeProfilePic(userId)
            setProfilePic('')
            toast("Foto de perfil removida com sucesso!")
        } catch (error) {
            console.error(error)
            toast("Erro ao remover foto de perfil. Tente novamente mais tarde.")
        }
    }

    const placeholderPic = 'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg'
    const isPlaceholderPic = profilePic === placeholderPic

    return (
        <div className={styles.profileHeaderWrapper}>
            <div className={styles.avatarWrapper}>
                <div className={styles.icons}>
                    <label className={styles.image}>
                        <FileInput onProfilePicChange={handleProfilePicChange} userId={user?.id} />
                        <FaRegImage />
                    </label>

                    <AlertDialog>
                        <AlertDialogTrigger>
                            <button disabled={isPlaceholderPic}>
                                <IoCloseCircle className={styles.close} />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Tem certeza que quer remover sua foto?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Sua foto será perdida. Essa ação é irreversível.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleRemoveProfilePic(user.id)}>Remover foto</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
                <Avatar style={{ width: 120, height: 120 }}>
                    <AvatarReview
                        avatarSrc={profilePic
                            || user?.image as string
                            || placeholderPic}
                        width={120}
                        height={120}
                    />
                </Avatar>
            </div>
        </div>
    )
}