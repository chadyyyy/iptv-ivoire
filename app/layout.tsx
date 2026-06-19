import type { Metadata } from 'next'
import './globals.css'
import { getOrganizationSchema, getLocalBusinessSchema } from '@/lib/schema'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://iptvivoire.com'),
  title: {
    default: "IPTV Côte d'Ivoire — +22 000 Chaînes HD/4K | Orange Money & Wave",
    template: '%s | IPTV Ivoire',
  },
  description:
    "Meilleur abonnement IPTV en Côte d'Ivoire. +22 000 chaînes HD/4K, VOD illimitée. Paiement Orange Money, Wave, MTN. Activation immédiate. Essai gratuit 24h.",
  keywords: [
    "IPTV Côte d'Ivoire",
    "abonnement IPTV Côte d'Ivoire",
    'IPTV Abidjan',
    "IPTV Orange Money Côte d'Ivoire",
    'IPTV Wave CI',
    "IPTV smarters pro Côte d'Ivoire",
    'IPTV coupe du monde 2026',
    "regarder TV internet Côte d'Ivoire",
    'IPTV FCFA',
    'meilleur IPTV Afrique',
  ],
  authors: [{ name: 'IPTV Ivoire', url: 'https://iptvivoire.com' }],
  creator: 'IPTV Ivoire',
  publisher: 'IPTV Ivoire',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CI',
    url: 'https://iptvivoire.com',
    siteName: 'IPTV Ivoire',
    title: "IPTV Côte d'Ivoire — +22 000 Chaînes HD/4K | Orange Money & Wave",
    description: '+22 000 chaînes HD/4K. Paiement Orange Money & Wave. Activation immédiate.',
    images: [
      {
        url: '/og/homepage.jpg',
        width: 1200,
        height: 630,
        alt: "IPTV Côte d'Ivoire — iptvivoire.com",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "IPTV Côte d'Ivoire — +22 000 Chaînes HD/4K",
    description: '+22 000 chaînes HD/4K. Paiement Orange Money & Wave. Activation immédiate.',
    images: ['/og/homepage.jpg'],
  },
  alternates: {
    canonical: 'https://iptvivoire.com',
    languages: {
      'fr-CI': 'https://iptvivoire.com',
      'fr': 'https://iptvivoire.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = getOrganizationSchema()
  const bizSchema = getLocalBusinessSchema()

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
