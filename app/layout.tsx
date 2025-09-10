import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Too Hot To Walk',
  description: 'Protect paws. Hydrate pups. Celebrate stories.',
  openGraph: {
    title: 'Too Hot To Walk',
    description: 'Protect paws. Hydrate pups. Celebrate stories.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Too Hot To Walk',
    description: 'Protect paws. Hydrate pups. Celebrate stories.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
