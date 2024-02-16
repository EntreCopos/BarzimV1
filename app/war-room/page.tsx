import AvatarReview from "@/components/avatar/avatar-review/avatar-review"
import { AddImageButton } from "@/components/buttons/add-image-review-button"
import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { LogoCervejaria } from "@/components/logos/logo-cervejarias"
import ReviewHeader from "@/components/review/review-header/review-header"
import StarReviewsMini from "@/components/stars/startsMini/stars-mini"
import { IngredientsTag } from "@/components/tags/ingredients-tag"
import { BeerNameLarge } from "@/components/titles/beer-name-lg"
import { Textarea } from "@/components/ui/textareaReview"
import { BeerDescription } from "@/components/wrappers/beer-description-wrapper"
import { BeerImage } from "@/components/wrappers/beer-image-wrapper"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"
import { ReviewDescription } from "@/components/wrappers/review-description-wrapper"
import { ReviewWrapper } from "@/components/wrappers/review-wrapper"
import { getAllCervejas } from "@/data/cervejas"

export default async function War() {

  const cervejas = await getAllCervejas()

  const cerveja = {
    nomeCerveja: 'Nome da Cerveja',
    tipoCerveja: 'Tipo da Cerveja'
  }

  return (<div className='bg-black-radial-gradient min-h-svh bg-cover gap-10 flex justify-center items-center backdrop-blur-5'>



    <div className="flex flex-col gap-7">
      <div className="flex ">
        <BeerImage src="https://res.cloudinary.com/dvprux49g/image/upload/v1707497542/tjyxr8vuqy9qx9sjrgsb.png" />
        <div className="flex flex-col">
          <LogoCervejaria src="https://res.cloudinary.com/dvprux49g/image/upload/v1707930874/efz0qklqxbn84ugvhro3.png" />
          <BeerNameLarge
            variant="dark-mode"
            cerveja={cerveja}
          />
          <BeerDescription description="O processo de produção da Budweiser é diferenciado, por utilizar lascas de Beechwood (madeira especial) durante os processos de fermentação e maturação. O resultado é um cerveja de sabor único e com equilíbrio perfeito: marcante no início e suave no final." />
        </div>
      </div>

      <ButtonsWrapper>
        <BrindarButton />
        <AddtoListButton />
      </ButtonsWrapper>

      <div className=" flex gap-2">
        <IngredientsTag label="Água" />
        <IngredientsTag label="Malte" />
        <IngredientsTag label="Lúpulo" />
      </div>

      <ReviewWrapper>
        <AvatarReview avatarSrc={'https://res.cloudinary.com/dvprux49g/image/upload/v1708016390/pirk4g0flwwfgytrd669.png'} />
        <ReviewHeader userName="irina" beerName="Budweiser" />
        <StarReviewsMini nota={2} />
        <ReviewDescription description="esperava mais. Não que seja ruim, mas o sabor não me cativou. Faltou algo, sabe? Por isso, dou nota 2. Há espaço para evolução." />
        <BrindarReviewButton />
      </ReviewWrapper>

      <AddImageButton />

      <Textarea />
    </div >
  </div>
  )
}