import './globals.css'

export const metadata = {
  title: 'Elite eSports - Where Champions Are Born',
  description: 'Premium Free Fire MAX & BGMI tournaments with massive prize pools. Your path to pro gaming starts here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}