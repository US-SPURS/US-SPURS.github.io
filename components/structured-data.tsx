import { site } from '@/content/site';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    name: site.name,
    alternateName: site.shortName,
    url: `https://${site.domain}`,
    description: site.mission,
    sameAs: ['https://github.com/US-SPURS'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
