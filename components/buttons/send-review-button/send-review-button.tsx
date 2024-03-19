import { BeatLoader } from 'react-spinners'
import { Button } from '@/components/ui/button'

const SendReviewButton: React.FC<{
  isSubmitting: boolean
  onClick: () => Promise<void>
}> = ({ isSubmitting, onClick }) => {
  return (
    <Button
      className="text-md w-full p-4 md:text-lg"
      disabled={isSubmitting}
      onClick={onClick}
      variant="barzimPrimary"
      size="barzimXl"
    >
      {isSubmitting ? (
        <BeatLoader className="mr-2" size={14} color="black" />
      ) : (
        'Enviar Avaliação'
      )}
    </Button>
  )
}

export default SendReviewButton
