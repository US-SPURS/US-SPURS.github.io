export const site = {
  name: 'United States Department of Special Projects and Unified Response Services',
  shortName: 'US-SPURS',
  domain: 'spurs.gov',
  motto: 'Prepare Always. Always Prepared.',
  latinMotto: 'Semper Para. Semper Paratus.',
  mission:
    'Coordinate specialized projects, unify response capabilities, and build interoperable systems that strengthen resilience, public service, and operational readiness.',
  navigation: [
    { label: 'About', href: '/about/' },
    { label: 'Programs', href: '/programs/' },
    { label: 'Technology', href: '/technology/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Developers', href: '/developers/' },
    { label: 'Security', href: '/security/' },
    { label: 'Open Government', href: '/open-government/' },
  ],
  utilityNavigation: [
    { label: 'News', href: '/news/' },
    { label: 'Roadmap', href: '/roadmap/' },
    { label: 'Status', href: '/status/' },
    { label: 'Contact', href: '/contact/' },
  ],
  capabilities: [
    ['Special Projects', 'Long-horizon, cross-domain initiatives requiring sustained coordination and disciplined delivery.'],
    ['Unified Response', 'Rapid, integrated response architecture designed around shared situational awareness and interoperable execution.'],
    ['Technology & AI', 'Secure digital platforms, automation, AI orchestration, developer tooling, and reusable public-interest infrastructure.'],
    ['Data & Intelligence', 'Standards-driven data integration, analytics, knowledge systems, and decision-support capabilities.'],
    ['Infrastructure & Resilience', 'Modernization of physical and digital infrastructure with resilience engineered into the operating model.'],
    ['Standards & Interoperability', 'Open specifications, shared schemas, policy-aware interfaces, and reusable cross-system integration patterns.'],
  ],
} as const;

export const publicRoutes = [
  '/',
  '/about/',
  '/programs/',
  '/technology/',
  '/projects/',
  '/developers/',
  '/security/',
  '/open-government/',
  '/news/',
  '/roadmap/',
  '/status/',
  '/privacy/',
  '/accessibility/',
  '/contact/',
] as const;
