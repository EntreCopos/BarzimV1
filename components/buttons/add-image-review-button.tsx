/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type ChangeEvent } from 'react'
import { FaImage } from 'react-icons/fa'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const AddImageButton: React.FC<{
  handler: (e?: ChangeEvent<HTMLInputElement>) => void
}> = ({ handler }) => {
  return (
    <div className="relative flex overflow-hidden">
      <Button variant={'secondary'} className="h-12 w-full text-2xl">
        <FaImage />
        <Input type="file" onChange={handler} accept="image/*" />
      </Button>
    </div>
  )
}
