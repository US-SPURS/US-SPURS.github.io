import type { Metadata } from 'next';
import { Callout, InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Developers' };

export default function DevelopersPage() {
  return <main id="main-content">
    <PageHero eyebrow="Developers" title="Build against clear interfaces, shared standards, and verifiable systems." summary="The US-SPURS developer experience is designed to make public systems understandable, reusable, testable, and interoperable across organizations and environments." />
    <Section eyebrow="Start here" title="Developer entry points"><InfoGrid items={[
      { title: 'GitHub organization', body: 'Browse public repositories, issues, releases, and project activity.', href: 'https://github.com/US-SPURS', meta: 'CODE' },
      { title: 'Developer Hub', body: 'Developer documentation, integration guidance, and implementation resources.', href: 'https://github.com/US-SPURS/developer-hub', meta: 'DOCS' },
      { title: 'Shared documentation', body: 'Cross-project technical and operational documentation maintained in the public DOCS repository.', href: 'https://github.com/US-SPURS/DOCS', meta: 'KNOWLEDGE' },
    ]} /></Section>
    <Section dark eyebrow="Engineering contract" title="Every public interface should explain itself." intro="A production API, package, workflow, or service is incomplete until another engineer can discover it, understand it, authenticate correctly, test it, observe it, and recover from failure."><InfoGrid items={[
      { title: 'Discoverable', body: 'Machine-readable metadata, ownership, lifecycle, schemas, and searchable documentation.' },
      { title: 'Documented', body: 'Quick starts, architecture, API references, examples, error semantics, and operational guidance.' },
      { title: 'Versioned', body: 'Explicit compatibility rules, changelogs, migration guidance, and stable release practices.' },
      { title: 'Testable', body: 'Deterministic examples, validation tooling, conformance tests, and representative test environments.' },
      { title: 'Observable', body: 'Meaningful logs, metrics, traces, health information, and documented operational signals.' },
      { title: 'Secure', body: 'Least privilege, secret-free examples, dependency integrity, vulnerability reporting, and safe defaults.' },
    ]} /></Section>
    <Section eyebrow="Platform direction" title="Toward a machine-readable developer ecosystem" intro="The long-term model is a catalog where repositories, APIs, schemas, services, agents, workflows, and standards expose consistent metadata that both people and intelligent systems can query."><Callout title="Security is part of the developer experience" body="See the trust, disclosure, and software supply-chain principles that apply across the public engineering environment." href="/security/" label="Security & trust" /></Section>
  </main>;
}
