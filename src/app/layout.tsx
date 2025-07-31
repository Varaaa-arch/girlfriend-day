import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'National GF Day',
  description: 'Surprise for my girl 💖',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
