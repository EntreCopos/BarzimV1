import { Label } from '@/components/ui/label'
import { useImagePreviewAdmin } from '@/hooks/useImagePreview'
import Image from 'next/image'
import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin'

export const CervejariasEdit = () => {
  const { imagePreview, handleImagePreview } = useImagePreviewAdmin()

  return (
    <Edit mutationMode="pessimistic">
      <SimpleForm>
        <h1 className="my-6 text-3xl">Editar Cervejaria</h1>
        <TextInput disabled source="id" />
        <TextInput source="nome" />
        <DateInput label="Criada em" source="createdAt" />

        <Label>Logo Antigo</Label>
        <ImageField
          source="logo"
          className="my-4 "
          sx={{ width: 200, height: 90 }}
        />

        <Label>Novo Logo</Label>
        <Image
          className="mb-4 mt-2"
          src={imagePreview}
          alt="logo"
          width={200}
          height={90}
          sizes="300px"
        />
        <FileInput
          placeholder="Selecionar imagem"
          onChange={handleImagePreview}
          type="file"
          accept={'image/*'}
          source="logo"
        />
      </SimpleForm>
    </Edit>
  )
}
