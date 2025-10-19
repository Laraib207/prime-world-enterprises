import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Prime World Enterprises | 24/7 AC, Cooler, Car & Freeze Services',
  description: 'Door-to-door repair and maintenance services for AC, Coolers, Cars, and Freezers. Available 24/7 across India.',
  keywords: 'AC repair, cooler service, car repair, freeze repair, 24/7 service, door to door service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
