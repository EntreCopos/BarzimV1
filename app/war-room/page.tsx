"use client"

import AvatarReview from "@/components/avatar/avatar-review/avatar-review"
import { AddImageButton } from "@/components/buttons/add-image-review-button"
import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { LogoCervejaria } from "@/components/logos/logo-cervejarias"
import ReviewDate from "@/components/review/review-date"
import ReviewHeader from "@/components/review/review-header/review-header"
import ReviewTitle from "@/components/review/reviewPage-title"
import StarReviewsMini from "@/components/stars/startsMini/stars-mini"
import { IngredientsTag } from "@/components/tags/ingredients-tag"
import { BeerNameLarge } from "@/components/titles/beer-name-lg"
import { BeerDescription } from "@/components/wrappers/beer-description-wrapper"
import { BeerImage } from "@/components/wrappers/beer-image-wrapper"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"
import { ReviewDescription } from "@/components/wrappers/review-description-wrapper"
import { TitleAvatarWrapper } from "@/components/wrappers/review-title-avatar-wrapper"
import { ReviewWrapper } from "@/components/wrappers/review-wrapper"
import { ReviewPageDescription } from "@/components/wrappers/reviewPage-description-wrapper"
import BackgroundReview from "@/components/background/background-review/background-review"
import BackgroundReviewImg from '../../components/assets/imgs-beers/Captura de tela 2024-02-22 020629.png'

import imgSuccess from '../../components/assets/icons/success.png'
import AvatarConfig from "@/components/avatar/avatar-config/avatar-config"
import avatarSrcFoto from '../../components/assets/icons/Designer (21) 1 (1).png'


export default function War() {

  const cerveja = {
    nomeCerveja: 'Nome da Cerveja',
    tipoCerveja: 'Tipo da Cerveja'
  }

  const description = "Ao deparar-me com a Bud Light da Seltzer, \n não posso deixar de notar a sua tentativa quase poética de ser uma cerveja. O aroma, apesar de sutil, não deixa de ser clichê, como se tentasse compensar a falta de personalidade com uma fragrância discreta. O sabor, embora se esforce para ser equilibrado, acaba sendo tão genérico que se mistura com tantas outras opções de mercado.A textura, infelizmente, é tão leve que chega a ser quase inexistente, como se a cerveja estivesse tentando passar despercebida. A finalização, embora limpa, não \n deixa uma impressão duradoura, perdendo-se rapidamente na busca por uma identidade que nunca se destaca. Em suma, a Bud Light da Seltzer parece ser mais uma tentativa de agradar as massas do que uma verdadeira expressão artística cervejeira. Talvez funcione para aqueles que buscam algo seguro e convencional, mas para os paladares mais exigentes, essa opção pode deixar a desejar."

  return (
    <>
      <div className='bg-black-radial-gradient min-h-svh bg-cover gap-10 flex justify-center items-center backdrop-blur-5'>
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

          <BackgroundReview imageUrl={BackgroundReviewImg.src} />
          
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

          <TitleAvatarWrapper>
            <ReviewTitle user="erlich69" />
            <AvatarReview avatarSrc={'https://res.cloudinary.com/dvprux49g/image/upload/v1708016390/pirk4g0flwwfgytrd669.png'} />
          </TitleAvatarWrapper>


          <ReviewPageDescription description={description} />

          <AvatarConfig avatarSrc={avatarSrcFoto}/>


        </div >
    </>
  )
}