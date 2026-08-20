import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'System Status' };

const systems = [
  { name: 'spurs.gov', state: 'Development', detail: 'V2 is under active development on an isolated GitHub branch. The production site remains unchanged until review and merge.' },
  { name: 'GitHub public organization', state: 'Operational', detail: 'Public repositories remain accessible through the US-SPURS GitHub organization.' },
  { name: 'Public project catalog', state: 'Development', detail: 'Repository listings are curated today and designed to become machine-generated from repository metadata.' },
  { name: 'Developer resources', state: 'Development', detail: 'Developer documentation and integration entry points are being consolidated into a unified public experience.' },
] as const;

export default function StatusPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Status" title="Public systems and development state." summary="This page reports only externally supportable public status. It does not represent classified, internal, restricted, or emergency operational readiness." />
      <Section eyebrow="Public services" title="Current status">
        <div className="status-list">
          {systems.map((system) => (
            <article className="status-row" key={system.name}>
              <div>
                <h3>{system.name}</h3>
                <p>{system.detail}</p>
              </div>
              <span className={`status-pill status-pill--${system.state.toLowerCase()}`}>{system.state}</span>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
