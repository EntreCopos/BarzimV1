import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Social } from '../auth/social'

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
    <Card className="flex flex-col items-center justify-center rounded-lg bg-[#131313] bg-opacity-85 md:py-8 text-[#FFFEEE] backdrop-blur-lg md:w-[30rem]" style={{ margin: '8px' }}>
      <style>
        {`
          @media (max-width: 640px) {
            .flex-col {
              /* Remova a altura máxima e use o minHeight para permitir crescimento */
              max-height: none;
            }
            .bg-opacity-85 {
              /* Ajuste a opacidade do fundo para melhor visualização em telas menores */
              background-color: rgba(19, 19, 19, 0.9);
            }
            .py-4 {
              /* Ajuste o espaçamento interno para celulares */
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
          }
        `}
      </style>
      <CardHeader>
        {headerTitle}
        {headerSubtitle}
      </CardHeader>
      <CardContent className="flex w-full items-center justify-center">
        {children}
      </CardContent>
      {showSocial && <Social />}
      <CardFooter>{footer}</CardFooter>
    </Card>
  )
}
