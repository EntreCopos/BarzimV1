import type { Metadata } from 'next'
import '../globals.css'

import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'

export const metadata: Metadata = {
  title: 'Barzim App',
  description: '',
}

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body style={{backgroundColor: 'var(--deep-vermillo)', minHeight: '100svh'}}>
        <MobileScreenDefaulWrapper>
          <NavWrapper/>
          <InnerContentWrapper>
            {children}
          </InnerContentWrapper>
        </MobileScreenDefaulWrapper>
      </body>
    </html>
  )
}

const MobileScreenDefaulWrapper = ({children}: {children: React.ReactNode}) => {
  return <section className="md:mx-auto w-full md:max-w-[480px] min-h-screen bg-black-radial-gradient flex flex-col" >{children}</section>
}

const InnerContentWrapper = ({children}: {children: React.ReactNode}) => {
  return <section className='py-6 px-4 w-full h-full'>{children}</section>
}