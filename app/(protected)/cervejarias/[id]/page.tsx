export default async function CervejariaByIdPage({
  params,
}: {
  params: { id: string }
}) {
  return <h1>Cervejaria: {params.id}</h1>
}
