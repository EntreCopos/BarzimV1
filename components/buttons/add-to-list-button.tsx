'use client'

import { FaPlus } from 'react-icons/fa'
import Popup from 'reactjs-popup'
import { addCervejaToList } from '@/actions/userCerveja'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

interface TUserRelToCervea {
  favorita: boolean
  queroBeber: boolean
  jaBebida: boolean
  reviewTexto: string | null
}
type LocalRelType = {
  [key: string]: boolean
}

export const AddtoListButton: React.FC<{
  id: string
  usuario: string
  userReltoCerveja: TUserRelToCervea | null
}> = ({ id, usuario, userReltoCerveja }) => {
  const [localRel, setLocalRel] = useState<LocalRelType | null>({})
  const [isUpdating, setUpdating] = useState(false)

  useEffect(() => {
    //@ts-expect-error ts me deixe, me deixe, eu sei oq eu to fazendo...
    setLocalRel(userReltoCerveja)
  }, [])

  const handleToggle = async (
    id: string,
    op: string,
    user: string,
    key: string
  ) => {
    if (!isUpdating) {
      setUpdating(true)
      setLocalRel((prev) => ({
        ...prev,
        [key]: prev ? !prev[key] : true,
      }))
      await addCervejaToList(+id, op, user)
      setUpdating(false)
    }
  }

  return (
    <Popup
      className="border-0"
      trigger={
        <Button type="button" variant="outline" className="rounded-full">
          <FaPlus size={20} />
          <span className="ml-2">Listas</span>
        </Button>
      }
      position="bottom right"
    >
      <div
        className="z-50 flex min-w-[8rem] flex-col gap-1 overflow-hidden rounded-md border bg-accent-foreground p-2 text-accent shadow-md"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          className="cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-gray-cards"
          aria-disabled={isUpdating}
          onClick={() => handleToggle(id, 'Quero Beber', usuario, 'queroBeber')}
          role="menuitem"
        >
          {localRel?.queroBeber ? 'Remover de Quero Beber' : 'Quero Beber'}
        </div>
        <div
          className="cursor-pointer rounded-md px-4 py-2 text-left text-sm hover:bg-gray-cards"
          aria-disabled={isUpdating}
          onClick={() => handleToggle(id, 'Já Bebi', usuario, 'jaBebida')}
          role="menuitem"
        >
          {localRel?.jaBebida ? 'Remover de Já Bebi' : 'Já Bebi'}
        </div>
      </div>
    </Popup>
  )
}
