import type { Metadata } from 'next'

const BASE_URL = 'https://iptvivoire.com'

export function generateMetadata({
  title,
  description,
  slug = '',
  image = '/og/homepage.jpg',
}: {
  title: string
  description: string
  slug?: string
  image?: string
}): Metadata {
  const url = slug ? `${BASE_URL}/${slug}` : BASE_URL

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'fr-CI': url,
        'fr': url,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'fr_CI',
      url,
      siteName: 'IPTV Ivoire',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '33977195576'
export const WHATSAPP_MESSAGE = encodeURIComponent('Bonjour, je souhaite activer un abonnement IPTV.')
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
