import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { PHProvider } from './ph_providers'
import { cn } from '@/lib/utils'
import { Providers } from './providers'

import '../public/globals.css'

const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Vem pro Barzim',
  description:
    'Uma comunidade para quem ama compartilhar suas experiências cervejeiras com os amigos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <PHProvider>
        <body className={cn(font.className, 'min-h-screen bg-zinc-900')}>
          <Providers>
            <main className={cn('flex h-full flex-col justify-start')}>
              {children}
            </main>
          </Providers>
        </body>
      </PHProvider>
    </html>
  )
}
