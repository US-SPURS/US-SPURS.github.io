import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Roadmap' };

const phases = [
  { phase: '01', title: 'Foundation', body: 'Standardize architecture, strengthen security controls, migrate content, establish accessibility and quality gates, and modernize the public web platform.' },
  { phase: '02', title: 'Integration', body: 'Connect repositories, documentation, standards, APIs, identity, status, and operational metadata through shared schemas and interfaces.' },
  { phase: '03', title: 'Intelligence', body: 'Expand ATLANTIS-driven discovery, routing, orchestration, validation, and knowledge capabilities across approved public technical workflows.' },
  { phase: '04', title: 'Continuum', body: 'Continuously measure, learn, recover, adapt, and improve while preserving human authorization and public accountability.' },
] as const;

export default function RoadmapPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Roadmap" title="Build the foundation. Integrate the system. Advance continuously." summary="The public roadmap describes strategic direction rather than promising fixed delivery dates. Detailed implementation tracking belongs in GitHub Projects and repository milestones." />
      <Section eyebrow="Strategic sequence" title="Four operating phases">
        <div className="roadmap-grid">
          {phases.map((item) => (
            <article className="roadmap-card" key={item.phase}>
              <span>{item.phase}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
