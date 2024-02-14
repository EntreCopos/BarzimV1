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
      <body className='bg-yellow-500 w-full min-h-screen'>{children}</body>
    </html>
  )
}
