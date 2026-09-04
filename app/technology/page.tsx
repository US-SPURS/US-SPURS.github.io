import type { Metadata } from 'next';
import { Callout, InfoGrid, PageHero, Section, Split } from '@/components/interior';

export const metadata: Metadata = { title: 'Technology' };

export default function TechnologyPage() {
  return <main id="main-content">
    <PageHero eyebrow="Technology" title="Interoperable systems for missions that cross boundaries." summary="US-SPURS technology strategy centers on secure orchestration, shared semantics, reusable infrastructure, and machine-verifiable trust." />
    <Section eyebrow="ATLANTIS AI" title="One multi-AI system, many coordinated capabilities." intro="ATLANTIS AI is the unified architecture for capability discovery, request normalization, multi-AI arbitration, planning, execution, verification, memory, and policy-aware automation.">
      <InfoGrid items={[
        { title: 'Capability intelligence', body: 'Discover and understand available tools, models, services, systems, and execution pathways.' },
        { title: 'Strategic arbitration', body: 'Route work across models, agents, workflows, and tools based on mission needs, policy, capability, and trust.' },
        { title: 'Autonomous task graphs', body: 'Decompose complex goals into dependency-aware, observable, and verifiable execution plans.' },
        { title: 'Human authorization', body: 'Preserve appropriate approval boundaries for consequential actions and sensitive operations.' },
        { title: 'Persistent knowledge', body: 'Retain structured mission context, decisions, outcomes, and reusable operational knowledge.' },
        { title: 'Verification & recovery', body: 'Validate results, detect failures, retry safely, and surface unresolved risk instead of silently proceeding.' },
      ]} />
    </Section>
    <Section dark eyebrow="OmniCode" title="Shared meaning without forcing identical systems." intro="OmniCode is the semantic interoperability initiative for expressing intent, capabilities, data relationships, operations, and system meaning across heterogeneous environments.">
      <Split>
        <article><h3>Semantic translation</h3><p>Represent meaning in a form that can be mapped across APIs, schemas, tools, agents, and legacy systems.</p></article>
        <article><h3>Composable interoperability</h3><p>Allow different systems to cooperate without requiring them to share the same internal implementation.</p></article>
      </Split>
    </Section>
    <Section eyebrow="Engineering model" title="Security, observability, and portability are built in.">
      <InfoGrid items={[
        { title: 'Zero-trust architecture', body: 'Identity and policy are evaluated continuously rather than inferred from network location.' },
        { title: 'Open interfaces', body: 'Documented APIs, schemas, events, and standards reduce lock-in and expand reuse.' },
        { title: 'Software supply-chain trust', body: 'Signed artifacts, dependency review, SBOMs, provenance, and automated analysis support verifiable releases.' },
      ]} />
      <Callout title="See the systems in GitHub" body="Explore the real repositories behind the public US-SPURS technology portfolio." href="/projects/" label="View projects" />
    </Section>
  </main>;
}
