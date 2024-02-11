export default async function TiposDeCervejaPage({
  params,
}: {
  params: { tipoCervejaId: string }
}) {
  return <h1>Tipo de Cervjea: {params.tipoCervejaId}</h1>
}
