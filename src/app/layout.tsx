
import './globals.css'

export const metadata = {
  title: 'National GF Day',
  description: 'Surprise for my girl 💖',
  icons: {
    icon: "/favicon.ico", 
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <audio
            src="/audio/lagu.mp3"
            autoPlay
            loop
            controls={false}
            style={{ display: "none" }}
          />
        </main>
      </body>
    </html>
  )
}
