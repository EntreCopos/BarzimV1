import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  ImageField,
  List,
  TextField,
} from 'react-admin'

export const CervejariaList = () => (
  <List>
    <Datagrid
      rowClick="show"
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
    >
      <TextField source="id" />
      <TextField source="nome" />
      <DateField source="createdAt" />
      <ImageField source="logo" />
    </Datagrid>
  </List>
)
