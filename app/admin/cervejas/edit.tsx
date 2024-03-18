import { useImagePreview } from '@/hooks/useImagePreview'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin'

export const CervejaEdit = () => {
  const { imagePreview, handleImagePreview } = useImagePreview(
    800,
    '/images/imagem-cerveja-placeholder.png'
  )
  return (
    <Edit mutationMode="pessimistic">
      <SimpleForm>
        <TextInput fullWidth disabled source="id" />
        <TextInput fullWidth source="nomeCerveja" />
        <TextInput
          multiline
          minRows={3}
          maxRows={5}
          fullWidth
          source="descriCerveja"
          label="Descrição"
        />
        <div className="flex w-full justify-center gap-6 space-x-4">
          <div>
            <Label>Imagem Atual</Label>
            <ImageField
              className="aspect-square h-full w-full object-cover object-center"
              sx={{ width: '200px', height: '200px' }}
              source="mainImage"
              label="Imagem"
            />
          </div>
          <div>
            <Label>Nova Imagem</Label>
            <Image
              className="mb-4 mt-2"
              src={imagePreview}
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </div>
        <FileInput
          placeholder="Selecionar imagem"
          onChange={handleImagePreview}
          type="file"
          accept={'image/*'}
          source="mainImage"
        />
        <NumberInput fullWidth source="teorAlcoolico" label="% Alcoólico" />
        <TextInput fullWidth source="tempIdeal" label="(°C) Ideal" />
        <NumberInput source="valorIBU" label="IBU" />
        <TextInput fullWidth source="corpo" />
        <ReferenceInput
          isRequired
          fullWidth
          source="cervejariaId"
          reference="cervejaria"
        />
        <NumberInput
          validate={required()}
          source="cervejariaId"
          label="Cervejaria ID"
        />
        <ReferenceInput
          fullWidth
          source="tipoCervejaId"
          reference="tipoCerveja"
        />
        <NumberInput
          validate={required()}
          source="tipoCervejaId"
          label="Tipo Cerveja ID"
        />
        <NumberInput
          readOnly
          fullWidth
          source="notaMedia"
          label="Nota média dos usuários"
        />
        <TextInput
          fullWidth
          source="ingredientesCerveja"
          label="Ingredientes"
        />
        <TextInput
          fullWidth
          source="harmonizacoesCerveja"
          label="Harmonizações"
        />
        <DateInput disabled fullWidth source="createdAt" label="Criada em" />
      </SimpleForm>
    </Edit>
  )
}
