/* eslint-disable @next/next/no-img-element */
'use client'
import { Input } from '@/components/ui/input'
import { LuFlaskConical } from 'react-icons/lu'
import { useImagePreview } from '@/hooks/useImagePreview'
import { Button } from '@/components/ui/button'
import { callModerateContentImageAPI } from '@/lib/image-moderation'
import { useState } from 'react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { callEdenAiTextModerationAPI } from '@/lib/text-moderation'
import { Textarea } from '@/components/ui/textarea'

export default function Lab() {
  const { imagePreview, handleImagePreview } = useImagePreview()
  const [content, setContent] = useState<string>('')

  const [textCtn, setTextCtn] = useState<string>('')
  const [textResContent, setTextResContent] = useState<string>('')

  const handleSubmitImageToModeration = async () => {
    //testando moderação de imagens
    const data = await callModerateContentImageAPI(imagePreview)
    setContent(JSON.stringify(data, null, 2))
  }

  const handleSubmitTextToModeration = async () => {
    console.log('vai enviar o texto: ', textCtn)

    const res = await callEdenAiTextModerationAPI(textCtn)

    setTextResContent(JSON.stringify(res, null, 2))
  }

  return (
    <div className="flex h-full w-full flex-col items-start justify-center space-y-4 bg-red-400 p-6">
      <div className="flex w-full">
        <LuFlaskConical size={72} />
        <div className="flex w-full flex-col space-y-6 ">
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
          <Button
            type="button"
            variant="secondary"
            onClick={handleSubmitImageToModeration}
          >
            Testar
          </Button>
          {content && <pre>{content}</pre>}
          <Separator />
          <Textarea
            rows={4}
            className="bg-slate-500"
            value={textCtn}
            onChange={(e) => setTextCtn(e.target.value)}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={handleSubmitTextToModeration}
          >
            Testar Texto
          </Button>
          {textResContent && <pre>{textResContent}</pre>}
        </div>
      </div>
    </div>
  )
}
