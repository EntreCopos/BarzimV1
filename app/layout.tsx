import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'
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
      <body className={font.className}>{children}</body>
    </html>
  )
}
