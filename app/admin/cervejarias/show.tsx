import {
  DateField,
  ImageField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const CervejariaShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="nome" />
      <DateField source="createdAt" />
      <ImageField source="logo" />
    </SimpleShowLayout>
  </Show>
)
