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
    sameAs: [],
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
    priceRange: '2500-15000 FCFA',
    currenciesAccepted: 'XOF',
    paymentAccepted: 'Orange Money, Wave, MTN MoMo, Moov Money',
    areaServed: 'CI',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CI',
      addressLocality: 'Abidjan',
    },
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
    brand: { '@type': 'Brand', name: 'IPTV Ivoire' },
    offers: {
      '@type': 'Offer',
      price: plan.price,
      priceCurrency: 'XOF',
      availability: 'https://schema.org/InStock',
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
        text: 'Sélectionnez 1 mois (2 500 FCFA), 3 mois (2 000 FCFA/mois) ou 12 mois (1 500 FCFA/mois).',
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
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'Product',
      name: 'IPTV Ivoire Abonnement',
    },
    ratingValue: '4.9',
    reviewCount: '3000',
    bestRating: '5',
    worstRating: '1',
  }
}
