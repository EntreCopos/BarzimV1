import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'
const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})


const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
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
        <body className={font.className}>
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  )
}
