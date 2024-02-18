import { auth } from "@/auth"
import { AvaliacaoForm } from "@/components/forms/add-review-form"
import { getCervejaById } from "@/data/cervejas"

const AvaliarCerveja = async({
  params,
}: {
  params: { cervejaId: string }
}) => {
  const session = await auth()
  if (!session) throw new Error('session messed up')
  
  const cerveja = await getCervejaById(params.cervejaId)
  const myId = session?.user.id

  return (
    <>
    <div style={{color: '#fffeef'}}>Avaliando cerveja: {cerveja?.nomeCerveja}</div>
    <AvaliacaoForm/>

    </>
  )
}



export default AvaliarCerveja