import type { Metadata } from 'next';
import { InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return <main id="main-content">
    <PageHero eyebrow="Contact" title="Connect with the right US-SPURS channel." summary="Use the appropriate contact pathway for general information, open-source collaboration, security reporting, partnerships, press, contracting, accessibility, or public-information requests." />
    <Section eyebrow="Contact directory" title="Public contact channels"><InfoGrid items={[
      { title: 'General inquiries', body: 'General information and public questions.', href: 'mailto:info@spurs.gov', meta: 'info@spurs.gov' },
      { title: 'Open source', body: 'GitHub, public code, contribution, and licensing questions.', href: 'mailto:opensource@spurs.gov', meta: 'opensource@spurs.gov' },
      { title: 'Security', body: 'Private reporting of suspected vulnerabilities and security concerns.', href: 'mailto:security@spurs.gov', meta: 'security@spurs.gov' },
      { title: 'Partnerships', body: 'Interagency, research, technical, and external partnership inquiries.', href: 'mailto:partnerships@spurs.gov', meta: 'partnerships@spurs.gov' },
      { title: 'Press & media', body: 'Media inquiries and public-affairs coordination.', href: 'mailto:press@spurs.gov', meta: 'press@spurs.gov' },
      { title: 'Contracting', body: 'Procurement, acquisition, and vendor inquiries.', href: 'mailto:contracts@spurs.gov', meta: 'contracts@spurs.gov' },
      { title: 'Accessibility', body: 'Report digital accessibility barriers or request accessibility assistance.', href: 'mailto:accessibility@spurs.gov', meta: 'accessibility@spurs.gov' },
      { title: 'FOIA', body: 'Freedom of Information Act requests and public-records inquiries.', href: 'mailto:foia@spurs.gov', meta: 'foia@spurs.gov' },
    ]} /></Section>
    <Section dark eyebrow="Security notice" title="Do not report vulnerabilities through public issues." intro="Potential security vulnerabilities should be sent through the private security contact pathway and handled according to the applicable repository SECURITY.md and agency vulnerability-disclosure guidance." />
  </main>;
}
