import type { Metadata } from 'next';
import { Callout, InfoGrid, PageHero, Section, Split } from '@/components/interior';

export const metadata: Metadata = { title: 'About' };

const principles = [
  { title: 'Unified by purpose', body: 'Coordinate across organizational and technical boundaries around a shared mission and measurable outcomes.', meta: '01' },
  { title: 'Built for readiness', body: 'Design people, processes, platforms, and infrastructure for sustained readiness rather than emergency improvisation.', meta: '02' },
  { title: 'Open where possible', body: 'Publish reusable code, standards, documentation, and decision context when security, privacy, or law do not require restriction.', meta: '03' },
  { title: 'Secure by architecture', body: 'Treat identity, policy, auditability, resilience, and supply-chain integrity as architecture—not after-market controls.', meta: '04' },
  { title: 'Human governed', body: 'Use automation and AI to expand capability while preserving appropriate authorization, oversight, and accountability.', meta: '05' },
  { title: 'Interoperable by default', body: 'Prefer open interfaces, portable data, shared semantics, and modular systems that can operate across environments.', meta: '06' },
] as const;

export default function AboutPage() {
  return <main id="main-content">
    <PageHero eyebrow="About US-SPURS" title="A unified operating model for complex public missions." summary="US-SPURS coordinates specialized projects, response capabilities, technology, data, infrastructure, and standards across domains that cannot be solved effectively in isolation." />
    <Section eyebrow="Mission" title="Coordinate complexity. Increase readiness. Deliver capability." intro="US-SPURS is organized around the idea that the hardest public challenges require shared command intent, interoperable systems, disciplined execution, and continuous learning.">
      <Split>
        <article><h3>Mission</h3><p>Coordinate specialized projects, unify response capabilities, and build interoperable systems that strengthen resilience, public service, and operational readiness.</p></article>
        <article><h3>Vision</h3><p>A public-service environment where organizations, people, infrastructure, data, and intelligent systems can securely operate as parts of one coordinated ecosystem.</p></article>
      </Split>
    </Section>
    <Section dark eyebrow="Operating doctrine" title="Principles designed to survive complexity."><InfoGrid items={principles} /></Section>
    <Section eyebrow="Headquarters" title="Joint Force Base Freedom Island" intro="US-SPURS headquarters serves as the agency’s primary coordination environment for operations, technology, infrastructure, training, research, and unified-response activities.">
      <Split>
        <article><h3>Location</h3><p>Alameda, California — on the former Naval Air Station Alameda site.</p></article>
        <article><h3>Role</h3><p>A multidisciplinary hub connecting strategic planning, technical development, response coordination, training, and resilient infrastructure.</p></article>
      </Split>
      <Callout title="Explore the operating portfolio" body="See the programs that turn this mission into concrete public capabilities." href="/programs/" label="View programs" />
    </Section>
  </main>;
}
