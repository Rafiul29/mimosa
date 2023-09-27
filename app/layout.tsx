import './globals.css'
import type { Metadata } from 'next'
import { Bai_Jamjuree,  } from 'next/font/google'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { cn } from '@/lib/utils'
import MasterProvider from '@/providers/MasterProvider'


const bai_Jamjuree = Bai_Jamjuree({ subsets: ['latin'],weight:["200","300","400","500","600","700"] })

export const metadata: Metadata = {
  title: 'Mimosa | Home',
  description:'A beauty salon and spa website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(bai_Jamjuree.className, "bg-light text-dark antialiased")}>
       
       <MasterProvider>
       {children}
       </MasterProvider>
       
        </body>
    </html>
  )
}
