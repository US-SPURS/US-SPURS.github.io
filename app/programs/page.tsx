import type { Metadata } from 'next';
import { Callout, InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Programs' };

const programs = [
  { title: 'Special Projects', body: 'Long-horizon, high-complexity initiatives requiring sustained coordination, specialized expertise, and disciplined delivery.', meta: 'SPD' },
  { title: 'Unified Response', body: 'Rapid coordination architecture for emergencies, disruptions, infrastructure failures, and complex multi-party response operations.', meta: 'URC' },
  { title: 'Technology & Innovation', body: 'AI, automation, secure digital platforms, developer infrastructure, research, and reusable public-interest technology.', meta: 'FTIO' },
  { title: 'Data & Intelligence Integration', body: 'Standards-driven data integration, analytics, knowledge systems, decision support, and shared situational awareness.', meta: 'DIIC' },
  { title: 'Infrastructure & Resilience', body: 'Modernization and hardening of physical and digital infrastructure, with resilience engineered into the operating model.', meta: 'IRP' },
  { title: 'Standards & Compliance', body: 'Interoperability standards, policy-aware implementation patterns, accessibility, security, and reusable compliance tooling.', meta: 'ISCO' },
] as const;

export default function ProgramsPage() {
  return <main id="main-content">
    <PageHero eyebrow="Programs" title="Mission capability, organized for execution." summary="US-SPURS programs combine operational response, technology, data, infrastructure, standards, and specialized project delivery into one interoperable portfolio." />
    <Section eyebrow="Portfolio" title="Core program areas" intro="Each program is designed to stand on its own while integrating cleanly with the rest of the agency operating model."><InfoGrid items={programs} /></Section>
    <Section dark eyebrow="Integration" title="Programs are connected by shared infrastructure." intro="Common identity, policy, data, engineering standards, automation, observability, and documentation reduce duplication and make cross-program collaboration practical.">
      <InfoGrid items={[
        { title: 'Shared trust plane', body: 'Identity, authorization, policy, audit, and security controls designed to work across program boundaries.' },
        { title: 'Shared execution fabric', body: 'Reusable services, workflows, APIs, containers, data systems, and automation patterns.' },
        { title: 'Shared knowledge layer', body: 'Structured documentation, semantic metadata, standards, and machine-readable operating context.' },
      ]} />
    </Section>
    <Section eyebrow="Next" title="See the systems behind the programs."><Callout title="Technology is the connective tissue" body="Explore ATLANTIS AI, OmniCode, interoperability architecture, developer tooling, and the engineering principles behind the portfolio." href="/technology/" label="Explore technology" /></Section>
  </main>;
}
