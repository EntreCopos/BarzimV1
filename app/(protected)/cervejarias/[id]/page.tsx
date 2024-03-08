import SectionTitle from '@/components/dashboard/title-sections/title-section'
import { getCervejasByCervejaria } from '@/data/cervejas'

import ListaDeCervejas from '@/components/lists/lista-cervejas'
import {WrapperDefaultPadding} from '@/components/wrappers/wrapper-default-padding'

export default async function CervejariaByIdPage({
  params,
}: {
  params: { id: string }
}) {
  const cervejariaData = await getCervejasByCervejaria(params.id)


  if (!!cervejariaData) {
    return (
      <WrapperDefaultPadding>
        <SectionTitle title={`Cervejas de ${cervejariaData?.nome}`} />
        <ListaDeCervejas cervejas={cervejariaData.cervejas} />
      </WrapperDefaultPadding>
    )

  }
  else throw new Error('faltou cerveja')
}


