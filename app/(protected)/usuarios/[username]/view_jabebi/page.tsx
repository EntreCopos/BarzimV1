import ListaDeCervejas from '@/components/lists/lista-cervejas'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getUserCervejasJaBebidas } from '@/data/avaliacao'
import { getUserByUsername } from '@/data/user'

const JaBebidas = async ({ params }: { params: { username: string } }) => {
  const jabebidas = await getUserCervejasJaBebidas(params.username)
  if (jabebidas && jabebidas.length > 0) {
    return (
      <WrapperDefaultPadding>
        <ListaDeCervejas cervejas={jabebidas} />
      </WrapperDefaultPadding>
    )
  } else
    return (
      <WrapperDefaultPadding>
        <h1 style={{ width: '100%', textAlign: 'center' }}>
          Parece que não há nada aqui
        </h1>
      </WrapperDefaultPadding>
    )
}

export default JaBebidas
