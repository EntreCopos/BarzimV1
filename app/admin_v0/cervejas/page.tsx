import { cn } from '@/lib/utils'
import { getAllCervejas } from '@/data/cervejas'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default async function Cervejas() {
  const listaDeCervejas = await getAllCervejas()
  if (!!listaDeCervejas?.length) {
    return (
      <Table>
        <TableCaption>Cervejas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Cervejaria</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>IBU</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listaDeCervejas?.map((cerveja) => (
            <TableRow key={cerveja.id}>
              <TableCell>{cerveja.nomeCerveja}</TableCell>
              <TableCell>{cerveja.cervejaria.nome}</TableCell>
              <TableCell>{cerveja.tipoCerveja.nome}</TableCell>
              <TableCell>{cerveja.valorIBU}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  } else return <h1>oops, faltou cerveja</h1>
}
