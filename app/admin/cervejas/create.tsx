import { useImagePreview } from '@/hooks/useImagePreview'
import { Label } from '@radix-ui/react-label'
import Image from 'next/image'
import {
  Create,
  FileInput,
  NumberInput,
  ReferenceInput,
  SimpleForm,
  TextInput,
  required,
} from 'react-admin'

export const CreateCerveja = () => {
  const { imagePreview, handleImagePreview } = useImagePreview(
    800,
    '/images/imagem-cerveja-placeholder.png'
  )
  return (
    <Create>
      <SimpleForm>
        <h1 className="my-6 text-3xl">Criando Nova Cerveja</h1>
        <TextInput validate={required()} fullWidth source="nomeCerveja" />
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
            <Label>Imagem</Label>
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
          validate={required()}
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
      </SimpleForm>
    </Create>
  )
}
