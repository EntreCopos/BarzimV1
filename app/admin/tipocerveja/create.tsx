import { Create, SimpleForm, TextInput } from 'react-admin'

export const CreateTipoCerveja = () => (
  <Create>
    <SimpleForm>
      <h1 className="my-6 text-3xl">Novo Tipo de Cerveja</h1>
      <TextInput required source="nome" />
      <TextInput required rows={3} multiline resettable source="descricao" />
    </SimpleForm>
  </Create>
)
