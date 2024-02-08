import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Barzim App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
