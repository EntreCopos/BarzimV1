/* eslint-disable @next/next/no-img-element */
'use client'
import { Input } from '@/components/ui/input'
import { LuFlaskConical } from 'react-icons/lu'
import { useImagePreview } from '@/hooks/useImagePreview'
import { Button } from '@/components/ui/button'
import { callModerateContentImageAPI } from '@/lib/image-moderation'
import { useState } from 'react'

export default function Lab() {
  const { imagePreview, handleImagePreview } = useImagePreview()
  const [content, setContent] = useState<string>('')

  const handleSubmitToApi = async () => {
    //testando moderação de imagens
    const data = await callModerateContentImageAPI(imagePreview)
    setContent(JSON.stringify(data, null, 2))
  }

  return (
    <div className="flex h-full w-full flex-col items-start justify-center space-y-4 bg-red-400 p-6">
      <div className="flex">
        <LuFlaskConical size={72} />
        <div className="flex flex-col">
          <h1 className="text-4xl">Lab</h1>
          <Input
            className=" bg-slate-500"
            type="file"
            accept="image/*"
            max={1024}
            onChange={handleImagePreview}
          />

          <img
            src={imagePreview}
            width="200px"
            height="200px"
            className="my-4 h-[200px] w-[200px] rounded-full border-2 border-gray-800 object-cover"
            alt="image"
          />
          <Button type="button" variant="secondary" onClick={handleSubmitToApi}>
            Testar
          </Button>
          {content && <pre>{content}</pre>}
        </div>
      </div>
    </div>
  )
}
