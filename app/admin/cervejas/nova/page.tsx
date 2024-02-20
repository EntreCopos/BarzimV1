import NewCervejaForm from "@/components/admin/register-cerveja"
import { db } from "@/lib/db"


const NewCervejaPage = async () => {
  const cervejarias = await db.cervejaria.findMany({
    select: {
      id: true,
      nome: true
    }
  })

  const tiposCerveja = await db.tipoCerveja.findMany({
    select: {
      id: true,
      nome: true
    }
  })

  return (
  <NewCervejaForm cervejarias={cervejarias} tiposCerveja={tiposCerveja}/>
  )
}

export default NewCervejaPage