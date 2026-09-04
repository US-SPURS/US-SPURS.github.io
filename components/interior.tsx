import Link from 'next/link';

export function PageHero({ eyebrow, title, summary }: { eyebrow: string; title: string; summary: string }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, intro, children, dark = false }: { eyebrow?: string; title: string; intro?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <section className={`section ${dark ? 'dark-section' : ''}`}>
      <div className="shell">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function InfoGrid({ items }: { items: readonly { title: string; body: string; href?: string; meta?: string }[] }) {
  return (
    <div className="info-grid">
      {items.map((item) => (
        <article className="info-card" key={item.title}>
          {item.meta ? <p className="card-index">{item.meta}</p> : null}
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          {item.href ? <Link className="text-link" href={item.href}>Explore <span aria-hidden="true">→</span></Link> : null}
        </article>
      ))}
    </div>
  );
}

export function Split({ children }: { children: React.ReactNode }) {
  return <div className="split-grid">{children}</div>;
}

export function Callout({ title, body, href, label }: { title: string; body: string; href?: string; label?: string }) {
  return (
    <aside className="premium-callout">
      <div>
        <p className="eyebrow">US-SPURS</p>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {href && label ? <Link className="button button-primary" href={href}>{label}</Link> : null}
    </aside>
  );
}
