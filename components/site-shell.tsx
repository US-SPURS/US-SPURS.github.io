import Link from 'next/link';
import { site } from '@/content/site';

export function GovernmentBanner() {
  return (
    <div className="gov-banner" role="region" aria-label="Official government website">
      <div className="shell gov-banner__inner">
        <span aria-hidden="true">🇺🇸</span>
        <span>An official website of the United States government</span>
        <a href="#official-government-sites">How you know</a>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="US-SPURS home">
          <span className="brand-mark" aria-hidden="true">US</span>
          <span>
            <strong>US-SPURS</strong>
            <small>Special Projects & Unified Response Services</small>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            {site.navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">{site.shortName}</p>
          <h2>{site.motto}</h2>
          <p>{site.latinMotto}</p>
        </div>
        <div>
          <h3>Public resources</h3>
          <ul>
            <li><Link href="/accessibility/">Accessibility</Link></li>
            <li><Link href="/privacy/">Privacy</Link></li>
            <li><Link href="/security/">Security</Link></li>
            <li><a href="https://github.com/US-SPURS">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="shell footer-bottom" id="official-government-sites">
        <span>United States Department of Special Projects and Unified Response Services</span>
        <span>spurs.gov</span>
      </div>
    </footer>
  );
}
