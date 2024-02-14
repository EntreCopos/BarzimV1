import { AddtoListButton } from "@/components/buttons/add-to-list-button"
import { BrindarButton } from "@/components/buttons/brindar-button"
import { BrindarReviewButton } from "@/components/buttons/brindar-review-button"
import { ButtonsWrapper } from "@/components/wrappers/buttons-wrapper"

export default function War() {

  return (<div className='bg-black bg-cover h-svh flex items-center justify-center'>
    <ButtonsWrapper>
      <BrindarButton />
      <AddtoListButton />
      <BrindarReviewButton/>
    </ButtonsWrapper>
  </div>
  )
}