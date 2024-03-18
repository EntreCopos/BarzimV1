import {
  BooleanField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from 'react-admin'

export const UserCervejaList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <DateField source="createdAt" />

      <ReferenceField source="usuarioId" reference="users" />
      <ReferenceField source="cervejaId" reference="cerveja" />
      <BooleanField source="favorita" />
      <BooleanField source="queroBeber" />
      <BooleanField source="jaBebida" />
      <TextField source="reviewTexto" />
      <NumberField source="nota" />
      {/* <TextField source="imagens" /> */}
    </Datagrid>
  </List>
)
