import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DEXENTRIK DEVs',
  description: 'Portafolio de desarrollo de software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-mx">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
