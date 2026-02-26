import type { Metadata } from 'next'
import './globals.css'
import Providers from './providers'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Lekgegaj Consulting | Premium Law & Business Consulting in Durrës, Albania',
  description: 'Expert legal and business consulting services in Durrës, Albania. Representation in all courts, criminal, civil, administrative law, and strategic business consulting.',
  keywords: 'law consulting, business consulting, attorney, legal services, Durrës, Albania',
  authors: [{ name: 'Lekgegaj Consulting' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lekgegaj-consulting.com',
    siteName: 'Lekgegaj Consulting',
    title: 'Lekgegaj Consulting | Premium Law & Business Consulting',
    description: 'Expert legal and business consulting services in Durrës, Albania',
    images: [
      {
        url: 'https://lekgegaj-consulting.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lekgegaj Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lekgegaj Consulting',
    description: 'Premium Law & Business Consulting in Durrës, Albania',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f1b3c" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&family=Cormorant+Garamond:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-cream text-charcoal" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}