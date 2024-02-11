export default async function UserPage({
  params,
}: {
  params: { username: string }
}) {
  return <h1>Visitando a página de {params.username}</h1>
}
