export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IPTV Ivoire',
    url: 'https://iptvivoire.com',
    logo: 'https://iptvivoire.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'French',
      contactOption: 'TollFree',
    },
    areaServed: [
      { '@type': 'Country', name: "Côte d'Ivoire" },
      { '@type': 'Country', name: 'Sénégal' },
      { '@type': 'Country', name: 'Mali' },
      { '@type': 'Country', name: 'Burkina Faso' },
    ],
    sameAs: [
      'https://web.facebook.com/iptvabidjan/'
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'IPTV Ivoire',
    description: "Service IPTV premium en Côte d'Ivoire — +22 000 chaînes, paiement Orange Money et Wave",
    url: 'https://iptvivoire.com',
    image: 'https://iptvivoire.com/og/homepage.jpg',
    priceRange: '5900-24900 FCFA',
    currenciesAccepted: 'XOF',
    paymentAccepted: 'Orange Money, Wave, MTN MoMo, Moov Money',
    areaServed: 'CI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Boulevard Latrille, Cocody',
      addressLocality: 'Abidjan',
      addressRegion: "District Autonome d'Abidjan",
      addressCountry: 'CI',
    },
    sameAs: [
      'https://web.facebook.com/iptvabidjan/'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }
}

export function getProductSchema(plan: {
  name: string
  price: string
  description: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: plan.name,
    description: plan.description,
    image: 'https://iptvivoire.com/og/meilleur-abonnement-iptv-cote-divoire-2026.png',
    brand: { '@type': 'Brand', name: 'IPTV Ivoire' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3000',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: { '@type': 'Person', name: 'Konan Yao' },
      reviewBody: 'Meilleur service IPTV en Côte d\'Ivoire. Chaînes stables, prix abordable, activation rapide via Orange Money.',
    },
    offers: {
      '@type': 'Offer',
      price: plan.price,
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
      url: 'https://iptvivoire.com/abonnement-iptv-cote-divoire',
      seller: { '@type': 'Organization', name: 'IPTV Ivoire' },
    },
  }
}


export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getArticleSchema(post: {
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    url: `https://iptvivoire.com/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Organization', name: 'IPTV Ivoire' },
    publisher: {
      '@type': 'Organization',
      name: 'IPTV Ivoire',
      logo: { '@type': 'ImageObject', url: 'https://iptvivoire.com/logo.png' },
    },
    inLanguage: 'fr-CI',
  }
}

export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: "Comment activer un abonnement IPTV en Côte d'Ivoire",
    description: "Activez votre abonnement IPTV en 3 étapes simples via Orange Money ou Wave.",
    step: [
      {
        '@type': 'HowToStep',
        name: 'Choisissez votre forfait',
        text: 'Sélectionnez 2 mois (5 900 FCFA), 3 mois (7 900 FCFA) ou 12 mois (24 900 FCFA).',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Payez par mobile money',
        text: 'Réglez via Orange Money, Wave ou MTN MoMo en moins de 2 minutes.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Regardez immédiatement',
        text: 'Recevez vos codes d\'accès sur WhatsApp dans les 5 minutes. Profitez de +22 000 chaînes.',
        position: 3,
      },
    ],
  }
}

export function getReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IPTV Ivoire Abonnement',
    image: 'https://iptvivoire.com/og/meilleur-abonnement-iptv-cote-divoire-2026.png',
    description: "Abonnement IPTV premium en Côte d'Ivoire. +22 000 chaînes HD/4K. Paiement Orange Money et Wave.",
    brand: { '@type': 'Brand', name: 'IPTV Ivoire' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3000',
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IPTV Ivoire',
    url: 'https://iptvivoire.com',
    potentialAction: {
      '@type': 'SearchAction',
      'query-input': 'required name=search_term_string',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://iptvivoire.com/blog?q={search_term_string}',
      },
    },
  }
}

