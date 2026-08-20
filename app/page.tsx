import Link from 'next/link';
import { site } from '@/content/site';

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">United States Government • Public Digital Front Door</p>
            <h1>Built for the missions that cross boundaries.</h1>
            <p className="lede">{site.mission}</p>
            <div className="actions">
              <Link className="button button-primary" href="/programs/">Explore capabilities</Link>
              <Link className="button button-secondary" href="/technology/">Technology & AI</Link>
            </div>
            <div className="motto" aria-label="Agency motto">
              <strong>{site.motto}</strong>
              <span>{site.latinMotto}</span>
            </div>
          </div>
          <aside className="mission-panel" aria-label="Operating model">
            <span className="panel-kicker">OPERATING MODEL</span>
            <ol>
              <li><span>01</span> Understand the mission</li>
              <li><span>02</span> Integrate capabilities</li>
              <li><span>03</span> Execute with control</li>
              <li><span>04</span> Verify outcomes</li>
              <li><span>05</span> Improve continuously</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="signal-bar" aria-label="Strategic principles">
        <div className="shell signal-grid">
          <span>INTEROPERABLE</span><span>SECURE</span><span>RESILIENT</span><span>OPEN-BY-DEFAULT</span><span>MISSION-READY</span>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="eyebrow">Capability architecture</p>
          <h2>One mission layer. Multiple specialized capabilities.</h2>
          <p>US-SPURS is designed as an integrated operating ecosystem rather than a collection of isolated programs.</p>
        </div>
        <div className="card-grid">
          {site.capabilities.map(([title, description], index) => (
            <article className="capability-card" key={title}>
              <span className="card-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell architecture-grid">
          <div>
            <p className="eyebrow">Technology architecture</p>
            <h2>ATLANTIS AI + OmniCode + trusted execution.</h2>
            <p className="lede-small">A unified architecture for capability discovery, semantic interoperability, multi-AI orchestration, autonomous task execution, policy enforcement, and auditable outcomes.</p>
            <Link className="text-link" href="/technology/">Explore the technology architecture →</Link>
          </div>
          <div className="stack" aria-label="Architecture layers">
            {['Mission & User Intent','Experience & Access','Semantic Interoperability','AI Orchestration','Execution Fabric','Identity • Policy • Trust • Audit'].map((item, i) => (
              <div className="stack-layer" key={item}><span>0{i + 1}</span>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell callout">
        <p className="eyebrow">Build in the open</p>
        <h2>Engineering that can be inspected, reused, and improved.</h2>
        <p>Public repositories, standards, architecture, security guidance, and developer resources are connected through the US-SPURS GitHub organization.</p>
        <div className="actions">
          <a className="button button-primary" href="https://github.com/US-SPURS">Explore GitHub</a>
          <Link className="button button-secondary" href="/developers/">Developer portal</Link>
        </div>
      </section>
    </main>
  );
}
