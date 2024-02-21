import type { Metadata } from 'next'
import '../globals.css'

import NavWrapper from '@/components/dashboard/nav-wrapper/nav-wrapper'
import { Toaster } from '@/components/ui/toaster'

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

      <MobileScreenDefaulWrapper>
        <NavWrapper />
        {children}
        <Toaster />
      </MobileScreenDefaulWrapper>
  )
}

const MobileScreenDefaulWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black-radial-gradient md:mx-auto md:max-w-[480px]">
      {children}
    </div>
  )
}
