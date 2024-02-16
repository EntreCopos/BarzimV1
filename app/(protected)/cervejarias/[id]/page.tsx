import SectionTitle from '@/components/dashboard/title-sections/title-section'
import { getCervejasByCervejaria } from '@/data/cervejas'

import ListaDeCervejas from '@/components/lists/lista-cervejas'

export default async function CervejariaByIdPage({
  params,
}: {
  params: { id: string }
}) {
  const cervejariaData = await getCervejasByCervejaria(params.id)

  console.log(cervejariaData?.CervejaShadow)


  if (!!cervejariaData) {
    return (
      <>
        <SectionTitle title={`Cervejas de ${cervejariaData?.nome}`} />
        <ListaDeCervejas cervejas={cervejariaData.CervejaShadow} />
      </>
    )

  }
  else throw new Error('faltou cerveja')
}


