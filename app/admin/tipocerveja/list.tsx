import {
  BulkDeleteButton,
  Datagrid,
  DeleteButton,
  List,
  TextField,
} from 'react-admin'

export const TipoCervejaList = () => (
  <List>
    <Datagrid
      rowClick="show"
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
    >
      {/* <TextField source="id" /> */}
      <TextField source="nome" />
      <TextField source="descricao" />
      <TextField source="createdAt" />
    </Datagrid>
  </List>
)
