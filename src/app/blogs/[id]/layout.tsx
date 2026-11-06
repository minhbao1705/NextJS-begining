import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'View Detail Blog',
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
