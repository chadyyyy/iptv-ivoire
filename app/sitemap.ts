import { MetadataRoute } from 'next'

// Only include indexable, high-quality blog content
// Noindexed articles (CDM match guides) are intentionally excluded
const blogSlugs = [
  'meilleur-abonnement-iptv-cote-divoire-2026',
  'meilleur-fournisseur-iptv-cote-divoire',
  'meilleur-iptv-afrique-2026',
  'iptv-abidjan-guide-complet',
  'iptv-vs-canal-plus-cote-divoire',
  'iptv-orange-money-wave-cote-divoire',
  'iptv-smart-tv-samsung-lg-cote-divoire',
  'iptv-francophone-afrique-occidentale',
  'iptv-smarters-pro-apk-cote-divoire',
  'comment-installer-iptv-smarters-pro',
  'iptv-smarters-pro-vs-tivimate-vs-gse',
  'iptv-4k-cote-divoire',
  'iptv-senegal-meilleur-abonnement-2026',
  'iptv-rdc-meilleur-abonnement-2026',
  'comment-installer-wesopro-iptv-pro',
  'iptv-pour-pc-windows-mac-cote-divoire',
  'comment-installer-hot-player-iptv',
  'iptv-gratuit-danger-solutions',
  'iptv-abidjan-prix-abonnement',
  // World Cup general articles (not match-specific) — kept as evergreen content
  'iptv-cote-divoire-coupe-du-monde-2026',
  'regarder-coupe-du-monde-2026-iptv',
  'cote-divoire-coupe-du-monde-2026-streaming',
]

const deviceSlugs = ['smart-tv', 'android', 'iphone', 'pc', 'iptv-smarters-pro']

// Only iptv-abidjan is kept in sitemap — others are noindex
const citySlugs = ['iptv-abidjan']

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
    { url: `${base}/devenir-revendeur-iptv`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/installation`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${base}/appareils`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${base}/prix-iptv-abidjan`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
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
