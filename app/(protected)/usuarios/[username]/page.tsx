import CarouselWrapper from '@/components/dashboard/carousel/carousel'
import CarouselCard from '@/components/dashboard/carousel/carousel-card/carousel-card'
import SectionTitle from '@/components/dashboard/title-sections/title-section'
import { CarouselItem } from '@/components/ui/carousel'
import { WrapperDefaultPadding } from '@/components/wrappers/wrapper-default-padding'
import { getUserReviewPics } from '@/data/user'

const UserPage = async ({ params }: { params: { username: string } }) => {
  const userPics = await getUserReviewPics(params.username)

  console.log('userpics é::::', userPics)

  return (
    <>
      <WrapperDefaultPadding>
        <SectionTitle title={`As mais recentes de @${params.username}`} />
      </WrapperDefaultPadding>
      <CarouselWrapper>
        {userPics &&
          userPics.length > 2 &&
          userPics?.map((userPic) => {
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
      </CarouselWrapper>
      <WrapperDefaultPadding>
        <h1 style={{ width: '100%', textAlign: 'center' }}>
          As últimas análises, carrossel de fotos e últimas interações do
          usuário irão aparecer aqui
        </h1>
      </WrapperDefaultPadding>
    </>
  )
}

export default UserPage
