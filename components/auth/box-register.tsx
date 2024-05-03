import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Social } from './social-buttons'

interface CardWrapperProps {
  headerTitle: React.ReactNode
  headerSubtitle: React.ReactNode
  showSocial: boolean
  footer: React.ReactNode
  children: React.ReactNode
}

export const BoxRegister: React.FC<CardWrapperProps> = ({
  headerTitle,
  headerSubtitle,
  showSocial,
  footer,
  children,
}) => {
  return (
    <Card
      style={{ maxWidth: 396 }}
      className="mx-auto rounded-lg border-none bg-[#131313]/90 py-6 text-marfim-barzim backdrop-blur-lg md:bg-[#131313]/65"
    >
      <CardHeader>
        {headerTitle}
        {headerSubtitle}
      </CardHeader>
      <CardContent className="w-full items-center justify-center px-6">
        {children}
      </CardContent>
      {showSocial && <Social />}
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
