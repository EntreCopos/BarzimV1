import {
  DatagridBody,
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const TipoCervejaShow = () => {
  return (
    <Show title="Tipo de Cerveja">
      <SimpleShowLayout>
        <TextField source="nome" />
        <TextField source="descricao" />
        <DateField source="createdAt" />
      </SimpleShowLayout>
    </Show>
  )
}
