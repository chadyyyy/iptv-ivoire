import { MetadataRoute } from 'next'

const blogSlugs = [
  'iptv-cote-divoire-coupe-du-monde-2026',
  'meilleur-abonnement-iptv-cote-divoire-2026',
  'comment-installer-iptv-smarters-pro',
  'iptv-vs-canal-plus-cote-divoire',
  'iptv-orange-money-wave-cote-divoire',
  'regarder-coupe-du-monde-2026-iptv',
  'iptv-abidjan-guide-complet',
  'iptv-smart-tv-samsung-lg-cote-divoire',
  'iptv-francophone-afrique-occidentale',
  'iptv-smarters-pro-apk-cote-divoire',
  'meilleur-iptv-afrique-2026',
  'iptv-4k-cote-divoire',
  'cote-divoire-coupe-du-monde-2026-streaming',
  'iptv-senegal-meilleur-abonnement-2026',
  'iptv-rdc-meilleur-abonnement-2026',
  'programme-coupe-du-monde-2026-calendrier-matchs',
  'france-vs-irak-coupe-du-monde-2026-streaming',
  'rdc-vs-colombie-coupe-du-monde-2026-streaming',
  'maroc-vs-haiti-coupe-du-monde-2026-streaming',
  'meilleur-fournisseur-iptv-cote-divoire',
]

const deviceSlugs = ['smart-tv', 'android', 'iphone', 'pc', 'iptv-smarters-pro']
const citySlugs = ['iptv-abidjan', 'iptv-bouake', 'iptv-yamoussoukro']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://iptvivoire.com'
  const now = new Date()

  const staticRoutes = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/abonnement-iptv-cote-divoire`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${base}/essai-gratuit`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/chaines`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: `${base}/paiement`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/revendeur`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/installation`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/appareils`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
  ]

  const blogRoutes = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const deviceRoutes = deviceSlugs.map(slug => ({
    url: `${base}/installation/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const cityRoutes = citySlugs.map(slug => ({
    url: `${base}/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...blogRoutes, ...deviceRoutes, ...cityRoutes]
}
