import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="eyebrow">404 · Not Found</p>
      <h1>That page is not available.</h1>
      <p>The address may have changed, or the resource may not be part of the public US-SPURS website.</p>
      <div className="actions">
        <Link className="button button-primary" href="/">Return home</Link>
        <Link className="button button-secondary" href="/projects/">Explore projects</Link>
      </div>
    </main>
  );
}
