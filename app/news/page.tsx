import type { Metadata } from 'next';
import { PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'News' };

const updates = [
  {
    date: 'August 2026',
    title: 'spurs.gov V2 enters public-site modernization development',
    body: 'The public web platform is being rebuilt around a modern static-export architecture with stronger accessibility, engineering, and open-government foundations.',
  },
  {
    date: 'August 2026',
    title: 'US-SPURS GitHub portfolio moves toward a unified public catalog',
    body: 'The Projects experience now reflects repositories that actually exist in the US-SPURS GitHub organization and is designed to evolve into a machine-readable enterprise catalog.',
  },
] as const;

export default function NewsPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="News" title="Public updates from US-SPURS." summary="Release notes, public announcements, engineering updates, and significant changes to US-SPURS public programs and technology." />
      <Section eyebrow="Latest" title="Recent updates" intro="Entries published here should represent verifiable public developments. Operationally sensitive information is intentionally excluded.">
        <div className="timeline-list">
          {updates.map((item) => (
            <article className="timeline-item" key={item.title}>
              <p className="card-index">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
