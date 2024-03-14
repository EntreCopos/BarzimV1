import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'
import { CarouselItem } from '@/components/ui/carousel'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getAvaliacoesByUser } from '@/data/avaliacao'
import { getUserReviewPics } from '@/data/user'
import { ListAvaliações } from '@/components/list-avaliacoes-user/list-view'

const UserPage = async ({ params }: { params: { username: string } }) => {
  const userPics = await getUserReviewPics(params.username)
  const userAvaliacoes = await getAvaliacoesByUser(params.username)

  console.log(userAvaliacoes)

  return (
    <>
      {/* carrossel removido temporariamente */}
      {/* <CarouselWrapper>
        {userPics &&
          userPics.length > 2 &&
          userPics.map((userPic) => {
            return (
              <CarouselItem key={userPic.asset_id} className="basis-1/3">
                <CarouselCard
                  altText={`Foto de @${params.username}`}
                  title={`Foto de @${params.username}`}
                  imageSrc={userPic.secure_url}
                />
              </CarouselItem>
            )
          })}
      </CarouselWrapper> */}
      <WrapperDefaultPadding>
        {userAvaliacoes && userAvaliacoes.length > 0 ? (
          <ListAvaliações userAvaliacoes={userAvaliacoes} />
        ) : (
          <h1 style={{ width: '100%', textAlign: 'center' }}>
            Parece que não há nada aqui
          </h1>
        )}
      </WrapperDefaultPadding>
    </>
  )
}

export default UserPage
