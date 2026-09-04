import type { Metadata } from 'next';
import { Callout, InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Open Government' };

export default function OpenGovernmentPage() {
  return <main id="main-content">
    <PageHero eyebrow="Open Government" title="Public information should be findable, usable, and accountable." summary="This hub brings together transparency, accessibility, privacy, records, public participation, and open-source resources in one predictable location." />
    <Section eyebrow="Public access" title="Core transparency resources"><InfoGrid items={[
      { title: 'Freedom of Information Act', body: 'Public records access information, request guidance, and published materials should be available through a clear FOIA pathway.', meta: 'FOIA' },
      { title: 'Accessibility', body: 'Digital services should be designed for broad access and tested against applicable Section 508 and WCAG requirements.', meta: '508' },
      { title: 'Privacy', body: 'Privacy notices should explain what information is collected, why it is needed, how it is used, and how it is protected.', meta: 'PRIVACY' },
      { title: 'Records management', body: 'Public information systems should support defensible retention, disposition, and preservation practices.', meta: 'RECORDS' },
      { title: 'Open source', body: 'Reusable code, standards, and technical documentation should be published when legal, security, privacy, and operational constraints allow.', meta: 'CODE' },
      { title: 'Public participation', body: 'Clear channels should exist for feedback, issues, accessibility concerns, security reporting, and community contribution.', meta: 'ENGAGE' },
    ]} /></Section>
    <Section dark eyebrow="Publishing standard" title="Transparency without oversharing." intro="Open government requires both disclosure and judgment. Public-facing material should maximize useful transparency while protecting personal data, controlled information, security-sensitive implementation details, and other information that should not be publicly exposed." />
    <Section eyebrow="Digital public service" title="One front door, predictable pathways." intro="As the site matures, this hub should link directly to the agency’s authoritative privacy, accessibility, FOIA, records, inspector-general, procurement, and public-data resources rather than duplicating policy text across pages."><Callout title="Built in the open" body="US-SPURS public engineering resources live alongside the agency’s transparency model, making code, documentation, standards, and project activity easier to inspect and reuse." href="/projects/" label="Explore public projects" /></Section>
  </main>;
}
