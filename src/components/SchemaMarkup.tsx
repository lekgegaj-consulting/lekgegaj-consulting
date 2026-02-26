export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://lekgegaj-consulting.com',
    name: 'Lekgegaj Consulting',
    image: 'https://lekgegaj-consulting.com/og-image.jpg',
    description: 'Premium law and business consulting services in Durrës, Albania',
    url: 'https://lekgegaj-consulting.com',
    telephone: ['+355 69 208 2624', '+355 68 208 2624'],
    email: 'info@lekgegaj-consulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lagjia nr.11, Rr. "Aleksander Goga", Pazari Bizantin',
      addressLocality: 'Durrës',
      addressCountry: 'AL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.3167,
      longitude: 19.4567,
    },
    sameAs: [
      'https://www.facebook.com/lekgegajconsulting',
      'https://www.linkedin.com/company/lekgegaj-consulting',
    ],
    priceRange: '$$',
    areaServed: ['AL', 'EU'],
    serviceType: ['Legal Services', 'Business Consulting'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LegalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lekgegaj Consulting - Legal Services',
    description: 'Comprehensive legal services including criminal, civil, administrative, and family law',
    url: 'https://lekgegaj-consulting.com/services',
    telephone: '+355 69 208 2624',
    email: 'info@lekgegaj-consulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lagjia nr.11, Rr. "Aleksander Goga", Pazari Bizantin',
      addressLocality: 'Durrës',
      addressCountry: 'AL',
    },
    areaServed: 'AL',
    availableLanguage: ['en', 'sq'],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProfessionalServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lekgegaj Consulting',
    description: 'Premium law and business consulting',
    url: 'https://lekgegaj-consulting.com',
    telephone: '+355 69 208 2624',
    email: 'info@lekgegaj-consulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Lagjia nr.11, Rr. "Aleksander Goga", Pazari Bizantin',
      addressLocality: 'Durrës',
      addressCountry: 'AL',
    },
    knowsAbout: [
      'Criminal Law',
      'Civil Law',
      'Administrative Law',
      'Family Law',
      'Business Consulting',
      'Commercial Contracts',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
