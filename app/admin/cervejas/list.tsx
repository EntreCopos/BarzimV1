import {
  BulkDeleteButton,
  Datagrid,
  DateField,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from 'react-admin'

export const CervejaList = () => (
  <List>
    <Datagrid
      rowClick="show"
      bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
    >
      <TextField source="nomeCerveja" label="Nome" />
      <ImageField source="mainImage" />
      <DateField source="createdAt" label="Criada em" />
      {/* <TextField
        className="max-w-xs"
        source="descriCerveja"
        label="Descrição"
      /> */}
      <NumberField source="teorAlcoolico" label="% Alcoólico" />
      <TextField source="tempIdeal" label="(°C) Ideal" />
      <NumberField source="valorIBU" label="IBU" />
      <TextField source="corpo" />
      <ReferenceField
        source="cervejariaId"
        reference="cervejaria"
        label="Cervejaria"
      />
      <ReferenceField
        source="tipoCervejaId"
        reference="tipoCerveja"
        label="Tipo"
      />
      <NumberField source="notaMedia" label="Nota" />
    </Datagrid>
  </List>
)
