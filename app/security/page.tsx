import type { Metadata } from 'next';
import { InfoGrid, PageHero, Section } from '@/components/interior';

export const metadata: Metadata = { title: 'Security' };

export default function SecurityPage() {
  return <main id="main-content">
    <PageHero eyebrow="Security & Trust" title="Security is a system property, not a badge." summary="US-SPURS public engineering emphasizes identity, least privilege, supply-chain integrity, continuous verification, observability, and responsible vulnerability handling." />
    <Section eyebrow="Trust architecture" title="Defense across identity, software, infrastructure, and data."><InfoGrid items={[
      { title: 'Identity & access', body: 'Strong authentication, least privilege, explicit authorization, and periodic access review.' },
      { title: 'Software supply chain', body: 'Dependency review, code analysis, SBOMs, provenance, signed artifacts, and protected release paths.' },
      { title: 'Repository controls', body: 'Protected branches, review requirements, CODEOWNERS, secret scanning, push protection, and auditable change history.' },
      { title: 'Runtime trust', body: 'Environment separation, workload identity, secure configuration, observability, and controlled deployment paths.' },
      { title: 'Data protection', body: 'Classification-aware access, minimization, encryption where appropriate, and retention aligned with policy.' },
      { title: 'Recovery', body: 'Documented incident handling, rollback paths, resilient design, and explicit failure recovery procedures.' },
    ]} /></Section>
    <Section dark eyebrow="Vulnerability disclosure" title="Report vulnerabilities privately." intro="Do not publish suspected vulnerabilities in GitHub issues, discussions, pull requests, commits, or other public channels.">
      <div className="policy-list">
        <article className="policy-item"><h3>Primary contact</h3><p>Use the security contact and repository-specific SECURITY.md guidance published by US-SPURS.</p></article>
        <article className="policy-item"><h3>Good-faith research</h3><p>Reports should include enough detail to reproduce and assess the issue while minimizing unnecessary exposure of sensitive information.</p></article>
        <article className="policy-item"><h3>No unsupported claims</h3><p>Public pages should describe implemented controls accurately and should not claim certifications or compliance statuses that have not been formally established.</p></article>
      </div>
    </Section>
    <Section eyebrow="Engineering controls" title="Public repositories should continuously raise the floor." intro="The target baseline includes automated code analysis, dependency review, secret scanning, reproducible builds, release attestations, SBOM generation, accessibility testing, and auditable CI/CD." />
  </main>;
}
