import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Chat gpt prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
          
          <main className=''>
          <Nav />  
          {children}
            
          </main>
        
        </div>
      </body>
    </html>
  )
}
