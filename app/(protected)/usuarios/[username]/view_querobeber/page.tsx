import ListaDeCervejas from '@/components/lists/lista-cervejas'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getUserCerverjasQueroBeber } from '@/data/avaliacao'

const QueroBeber = async ({ params }: { params: { username: string } }) => {
  const querobeber = await getUserCerverjasQueroBeber(params.username)
  if (querobeber && querobeber.length > 0) {
    return (
      <WrapperDefaultPadding>
        <ListaDeCervejas cervejas={querobeber} />
      </WrapperDefaultPadding>
    )
  }
  else
  return (
    <WrapperDefaultPadding>
      <h1 style={{width: '100%', textAlign: 'center'}}>Parece que não há nada aqui</h1>
    </WrapperDefaultPadding>
  )
}

export default QueroBeber
