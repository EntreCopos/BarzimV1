import { useImagePreviewAdmin } from '@/hooks/useImagePreview'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import { Create, FileInput, SimpleForm, TextInput } from 'react-admin'

export const CreateCervejaria = () => {
  const { imagePreview, handleImagePreview } = useImagePreviewAdmin()
  return (
    <Create>
      <SimpleForm>
        <h1 className="my-6 text-3xl">Nova Cervejaria</h1>
        <TextInput label="Nome" source="nome" />
        <Label>Logo</Label>
        <Image
          className="mb-4 mt-2"
          src={imagePreview}
          alt="logo"
          width={200}
          height={90}
        />
        <FileInput
          placeholder="Selecionar imagem"
          onChange={handleImagePreview}
          type="file"
          accept={'image/*'}
          source="logo"
        />
      </SimpleForm>
    </Create>
  )
}
