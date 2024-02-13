import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Social } from '../auth/social'

interface CardWrapperProps {
  headerTitle: React.ReactNode
  headerSubtitle: React.ReactNode
  formComponent: React.ReactNode
  showSocial: boolean
  footer: React.ReactNode
}

export const BoxRegister: React.FC<CardWrapperProps> = ({
  headerTitle,
  headerSubtitle,
  formComponent,
  showSocial,
  footer,
}) => {
  return (
    <Card className="flex h-fit w-[95%] flex-col rounded-lg bg-[#131313] bg-opacity-85 py-8 text-[#FFFEEE] backdrop-blur-lg md:w-[30rem]">
      <CardHeader>
        {headerTitle}
        {headerSubtitle}
      </CardHeader>
      <CardContent className="flex w-full items-center justify-center">
        {/* esse componente aqui poderia ser recebido como children */}
        {formComponent}
      </CardContent>
      {showSocial && <Social />}
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
