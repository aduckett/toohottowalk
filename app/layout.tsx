import type { Metadata } from 'next'
import './globals.css'
import { Inter, Fredoka } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-display' });

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
  icons: {
    // Favicon / general icon (SVG)
    icon: [
      {
        url: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757613783/THTWpaw512_bmyorn.svg',
        type: 'image/svg+xml',
      },
    ],
    // Apple touch icon (must be PNG 180x180)
    apple: [
      {
        url: 'https://res.cloudinary.com/dizmpjrdk/image/upload/v1757613841/THTWpaw180_y3syrw.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fredoka.variable}>
      {/* Inter on body; Fredoka available via CSS var */}
      <body className={`${inter.className} bg-white text-gray-900`}>{children}</body>
    </html>
  )
}

