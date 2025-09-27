import './globals.css'

export const metadata = {
  title: 'Tournament Platform',
  description: 'Host and compete in esports tournaments',
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