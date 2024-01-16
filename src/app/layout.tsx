import Nav from '@/components/Nav'
import type { Metadata } from 'next'
import { Inter, Single_Day } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

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
      <body className='w-full h-full wp-5 m-5'>
       <div className='p-5 m-5'>
        <Nav />
        <div className='flex gap-1'>
        <Sidebar />

        {children}
        </div>
       </div>
      </body>
    </html>
  )
}
