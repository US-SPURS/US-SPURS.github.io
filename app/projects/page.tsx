import type { Metadata } from 'next';
import Link from 'next/link';
import { Callout, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Projects' };

const repos = [
  { name: 'ATLANTIS-AI', href: 'https://github.com/US-SPURS/ATLANTIS-AI', body: 'Unified multi-AI orchestration and autonomous execution architecture.', status: 'Public', tags: ['AI', 'Orchestration', 'Agents'] },
  { name: 'SWARM', href: 'https://github.com/US-SPURS/SWARM', body: 'Distributed multi-agent execution capability within the broader ATLANTIS ecosystem.', status: 'Public', tags: ['Agents', 'Distributed Systems'] },
  { name: 'HITMAN', href: 'https://github.com/US-SPURS/HITMAN', body: 'Task delegation, execution, and resolution framework integrated with the ATLANTIS system model.', status: 'Public', tags: ['Execution', 'Automation'] },
  { name: 'HELIOS', href: 'https://github.com/US-SPURS/HELIOS', body: 'US-SPURS technology project under active public development.', status: 'Public', tags: ['Platform'] },
  { name: 'developer-hub', href: 'https://github.com/US-SPURS/developer-hub', body: 'Developer-facing documentation, integration guidance, and public technical resources.', status: 'Public', tags: ['Docs', 'Developers'] },
  { name: 'DOCS', href: 'https://github.com/US-SPURS/DOCS', body: 'Shared documentation and knowledge resources for US-SPURS systems and programs.', status: 'Public', tags: ['Documentation'] },
  { name: 'github-mcp-server', href: 'https://github.com/US-SPURS/github-mcp-server', body: 'GitHub integration infrastructure for model-context and agent workflows.', status: 'Public', tags: ['GitHub', 'MCP', 'Automation'] },
  { name: 'dns', href: 'https://github.com/US-SPURS/dns', body: 'DNS and domain infrastructure resources supporting the US-SPURS environment.', status: 'Public', tags: ['DNS', 'Infrastructure'] },
  { name: 'idmanagement', href: 'https://github.com/US-SPURS/idmanagement', body: 'Identity-management technology and supporting implementation resources.', status: 'Public', tags: ['Identity', 'Security'] },
] as const;

export default function ProjectsPage() {
  return <main id="main-content">
    <PageHero eyebrow="Projects" title="Public systems, code, and infrastructure." summary="This catalog highlights repositories that are actually present in the US-SPURS GitHub organization. Public listings are curated to avoid exposing controlled or sensitive implementation detail." />
    <Section eyebrow="GitHub portfolio" title="Featured repositories" intro="Repository status and technical details should ultimately be generated from machine-readable repository metadata so this page remains current automatically.">
      <div className="repo-grid">
        {repos.map((repo) => <article className="repo-card" key={repo.name}>
          <div className="repo-card__meta"><span>US-SPURS</span><span>{repo.status}</span></div>
          <h3><a href={repo.href}>{repo.name}</a></h3>
          <p>{repo.body}</p>
          <div className="tag-row">{repo.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        </article>)}
      </div>
      <p style={{marginTop:'28px'}}><Link className="text-link" href="https://github.com/US-SPURS">View the complete US-SPURS organization on GitHub →</Link></p>
      <Callout title="From catalog to live enterprise map" body="The next evolution is a machine-readable repository registry covering ownership, lifecycle, security posture, dependencies, APIs, SBOMs, documentation, and deployment state." href="/developers/" label="Developer resources" />
    </Section>
  </main>;
}
