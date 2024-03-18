import {
  BooleanField,
  Datagrid,
  DateField,
  EmailField,
  ImageField,
  List,
  TextField,
} from 'react-admin'

export const UserList = () => (
  <List>
    <Datagrid bulkActionButtons={false}>
      {/* <TextField source="id" /> */}
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="username" />
      <ImageField source="image" />
      <TextField source="bio" />
      <TextField source="link" />
      <TextField source="role" />
      <DateField source="dateOfBirth" />
      <DateField source="createdAt" />
      <BooleanField source="isTwoFactorEnabled" />
      <BooleanField source="isPrivate" />
      <TextField source="genero" />
      <TextField source="cep" />
      <DateField source="emailVerified" />
    </Datagrid>
  </List>
)
