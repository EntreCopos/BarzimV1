import { WrapperDefaultPadding } from "@/components/wrappers/wrapper-default-padding"

const UserPage = async ({
  params,
}: {
  params: { username: string }
}) => {
  return (
    <WrapperDefaultPadding>
      <h1 style={{ width: '100%', textAlign: 'center' }}>
        As últimas análises, carrossel de fotos e últimas interações do usuário irão aparecer aqui
      </h1>
    </WrapperDefaultPadding>
  )
}

export default UserPage