import type { Metadata } from 'next';
import './globals.css';
import './interior.css';
import { Footer, GovernmentBanner, Header } from '@/components/site-shell';
import { site } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://spurs.gov'),
  title: { default: `${site.shortName} | ${site.name}`, template: `%s | ${site.shortName}` },
  description: site.mission,
  applicationName: site.shortName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.shortName,
    title: site.name,
    description: site.mission,
    url: 'https://spurs.gov',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <GovernmentBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
