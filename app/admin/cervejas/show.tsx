import {
  DateField,
  ImageField,
  NumberField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const CervejaShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="nomeCerveja" />
      <TextField source="descriCerveja" label="Descrição" />
      <ImageField source="mainImage" label="Imagem" />
      <NumberField source="teorAlcoolico" label="% Alcoólico" />
      <TextField source="tempIdeal" label="(°C) Ideal" />
      <NumberField source="valorIBU" label="IBU" />
      <TextField source="corpo" />
      <ReferenceField source="cervejariaId" reference="cervejaria" />
      <ReferenceField source="tipoCervejaId" reference="tipoCerveja" />
      <TextField source="notaMedia" label="Nota média dos usuários" />
      <TextField source="ingredientesCerveja" label="Ingredientes" />
      <TextField source="harmonizacoesCerveja" label="Harmonizações" />
      <DateField source="createdAt" label="Criada em" />
    </SimpleShowLayout>
  </Show>
)
