import type { Metadata } from 'next';
import './globals.css';
import './interior.css';
import './experience.css';
import { Footer, GovernmentBanner, Header } from '@/components/site-shell';
import { StructuredData } from '@/components/structured-data';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://spurs.gov'),
  title: { default: `${site.shortName} | ${site.name}`, template: `%s | ${site.shortName}` },
  description: site.mission,
  applicationName: site.shortName,
  alternates: { canonical: '/' },
  icons: { icon: '/brand/us-spurs-mark.svg' },
  openGraph: {
    type: 'website',
    siteName: site.shortName,
    title: site.name,
    description: site.mission,
    url: 'https://spurs.gov',
    images: [{ url: '/brand/og-card.svg', width: 1200, height: 630, alt: `${site.shortName} — ${site.motto}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.mission,
    images: ['/brand/og-card.svg'],
  },
  robots: { index: true, follow: true },
  manifest: '/manifest.webmanifest',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <GovernmentBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
