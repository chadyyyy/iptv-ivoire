import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Fix common short URLs Google might have crawled
      {
        source: '/abonnement',
        destination: '/abonnement-iptv-cote-divoire',
        permanent: true,
      },
      {
        source: '/blog/iptv-cote-divoire-coupe-du-monde-2026-streaming',
        destination: '/blog/cote-divoire-coupe-du-monde-2026-streaming',
        permanent: true,
      },
    ]
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ],
}

export default config
