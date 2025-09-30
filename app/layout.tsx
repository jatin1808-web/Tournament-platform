import './globals.css'

export const metadata = {
  title: 'Elite eSports - Where Champions Are Born',
  description: 'Premium Free Fire MAX & BGMI tournaments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}