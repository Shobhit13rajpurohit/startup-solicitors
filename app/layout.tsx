import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'startupsolicitors',
  description: 'startupsolicitors',
  generator: 'v0.dev',
  icons: {

    icon: '/logostart.jpg', 
   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}