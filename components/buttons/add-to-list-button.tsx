'use client'

import { FaPlus } from 'react-icons/fa'
import Popup from 'reactjs-popup'
import { addCervejaToList } from '@/actions/userCerveja'
import { useEffect, useState } from 'react'

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
      trigger={
        <button
          type="button"
          className="flex items-center rounded-full border-2 bg-transparent px-3 py-1 text-sm "
        >
          <FaPlus size={20} />
          <span className="ml-2">Listas</span>
        </button>
      }
      position="bottom right"
    >
      <div
        className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 py-1 text-popover-foreground shadow-md"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          aria-disabled={isUpdating}
          onClick={() => handleToggle(id, 'Quero Beber', usuario, 'queroBeber')}
          className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          {localRel?.queroBeber ? 'Remover de Quero Beber' : 'Quero Beber'}
        </a>
        <a
          aria-disabled={isUpdating}
          onClick={() => handleToggle(id, 'Já Bebi', usuario, 'jaBebida')}
          className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          {localRel?.jaBebida ? 'Remover de Já Bebi' : 'Já Bebi'}
        </a>
      </div>
    </Popup>
  )
}
