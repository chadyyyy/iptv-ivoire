import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://iptvivoire.com/sitemap.xml',
  }
}
