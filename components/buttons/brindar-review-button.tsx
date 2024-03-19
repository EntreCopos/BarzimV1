import { Button } from '../ui/button'
import BrindarIcon from './brindar-icon'

export const BrindarReviewButton: React.FC = () => {
  return (
    <Button variant="barzimPrimary" size="sm">
      <BrindarIcon />
      <span>Brindar avaliação</span>
    </Button>
  )
}
