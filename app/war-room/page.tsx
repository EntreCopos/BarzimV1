import { BeerFilter } from "@/components/beer-filter"
import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { LogoCervejaria } from "@/components/logos/logo-cervejarias"
import { IngredientsTag } from "@/components/tags/ingredients-tag"
import { BeerNameLarge } from "@/components/titles/beer-name-lg"
import { BeerDescription } from "@/components/wrappers/beer-description-wrapper"
import { BeerImage } from "@/components/wrappers/beer-image-wrapper"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"
import { getAllCervejas } from "@/data/cervejas"

export default async function War() {

  const cervejas = await getAllCervejas()

  const cerveja = {
    nomeCerveja: 'Nome da Cerveja',
    tipoCerveja: 'Tipo da Cerveja'
  }

  return (<div className='bg-black-radial-gradient bg-cover h-svh gap-10 flex justify-center items-center'>

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

      <BeerFilter cervejas={cervejas} />
    </div >
  </div>
  )
}