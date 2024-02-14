import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { LogoCervejaria } from "@/components/logos/logo-cervejarias"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"

export default function War() {

  return (<div className='bg-black-radial-gradient bg-cover h-svh flex items-center justify-center gap-10'>
    <LogoCervejaria src="https://res.cloudinary.com/dvprux49g/image/upload/v1707930874/efz0qklqxbn84ugvhro3.png" width={100} height={90} />

    <ButtonsWrapper>
      <BrindarButton />
      <AddtoListButton />
      <BrindarReviewButton />
    </ButtonsWrapper>
  </div>
  )
}