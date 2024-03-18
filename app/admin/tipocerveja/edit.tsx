import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin'

export const TipoCervejaEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <h1 className="my-6 text-3xl">Editar Tipo</h1>
      <TextInput source="nome" />
      <TextInput multiline rows={3} resettable source="descricao" />
      <DateInput source="createdAt" />
    </SimpleForm>
  </Edit>
)
