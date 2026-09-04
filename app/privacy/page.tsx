import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return <main id="main-content">
    <PageHero eyebrow="Privacy" title="Privacy-first public digital services." summary="This page carries forward the core privacy commitments from the prior US-SPURS website while the full policy is being modernized for the V2 platform." />
    <Section eyebrow="Policy" title="How information is handled" intro="The prior site states that US-SPURS may collect limited technical information for website operations, security, analytics, and user experience, along with information users voluntarily provide when contacting the agency.">
      <div className="policy-list">
        <article className="policy-item"><h3>Collection</h3><p>Only information needed for legitimate website, security, service, or communication purposes should be collected.</p></article>
        <article className="policy-item"><h3>Use</h3><p>Information may be used to respond to inquiries, improve services, monitor security, satisfy legal obligations, and understand aggregate website usage.</p></article>
        <article className="policy-item"><h3>Sharing</h3><p>Personal information is not intended for sale or commercial trade. Any disclosure should be limited to authorized governmental, legal, operational, or contracted purposes.</p></article>
        <article className="policy-item"><h3>Security</h3><p>Transmission and storage should use appropriate safeguards, access controls, and secure operational practices.</p></article>
        <article className="policy-item"><h3>External services</h3><p>Links to third-party sites may be governed by their own privacy practices; users should review those policies separately.</p></article>
      </div>
    </Section>
    <Section dark eyebrow="Modernization note" title="The V2 policy will be tied to the actual deployed stack." intro="Before production launch, this policy should be reconciled against the real analytics, forms, hosting, logging, cookies, third-party services, retention practices, and contact pathways used by spurs.gov so the published notice matches actual behavior." />
  </main>;
}
