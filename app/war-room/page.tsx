import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { LogoCervejaria } from "@/components/logos/logo-cervejarias"
import { IngredientsTag } from "@/components/tags/ingredients-tag"
import { BeerNameLarge } from "@/components/titles/beer-name-lg"
import { BeerImage } from "@/components/wrappers/beer-image-wrapper"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"

export default function War() {

  const cerveja = {
    nomeCerveja: 'Nome da Cerveja',
    tipoCerveja: 'Tipo da Cerveja'
  }

  return (<div className='bg-black-radial-gradient bg-cover h-svh flex items-center justify-center gap-10'>

    <div className="flex ">
      <BeerImage src="https://res.cloudinary.com/dvprux49g/image/upload/v1707497542/tjyxr8vuqy9qx9sjrgsb.png" />

      <div className="flex flex-col">
        <LogoCervejaria src="https://res.cloudinary.com/dvprux49g/image/upload/v1707930874/efz0qklqxbn84ugvhro3.png" />
        <BeerNameLarge
          variant="dark-mode"
          cerveja={cerveja}
        />
      </div>
    </div>

    <div className=" flex gap-2">
      <IngredientsTag label="Água" />
      <IngredientsTag label="Malte" />
      <IngredientsTag label="Lúpulo" />
    </div>

    <ButtonsWrapper>
      <BrindarButton />
      <AddtoListButton />
      <BrindarReviewButton />
    </ButtonsWrapper>
  </div >
  )
}