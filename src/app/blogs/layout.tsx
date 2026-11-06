import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs List',
  description: 'Generate by Ara',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
    </>
  )
}
