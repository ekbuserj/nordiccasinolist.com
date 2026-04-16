import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TriangleAlert, ExternalLink, Layers } from 'lucide-react';
import './header.css';

const nav = [
  { label: 'Forside', to: '/' },
  { label: 'Nye Casinoer', to: '/nye-casinoer' },
  { label: 'Casino Bonusser', to: '/casino-bonusser' },
  { label: 'Kontakt', to: '/kontakt' },
  { label: 'Ansvarligt Spil', to: '/ansvarligt-spil' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <span className="age-notice">
            <TriangleAlert className="topbar-icon" aria-hidden="true" />
            Kun for spillere over 18 år
          </span>
          <div className="trust-links">
            <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer">
              Spillemyndigheden <ExternalLink className="ext-icon" aria-hidden="true" />
            </a>
            <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer">
              ROFUS <ExternalLink className="ext-icon" aria-hidden="true" />
            </a>
            <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer">
              StopSpillet <ExternalLink className="ext-icon" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-inner">
          <Link to="/" className="header-logo">
            <span className="logo-icon" aria-hidden="true">
              <Layers />
            </span>
            <span className="logo-text">
              Nordic<strong>CasinoList</strong>
            </span>
          </Link>

          <nav className={`header-nav ${open ? 'open' : ''}`}>
            {nav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setOpen(false)}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta">
            <a href="https://www.unibet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="btn-primary header-cta-btn">
              Top casino →
            </a>
          </div>

          <button
            className={`hamburger ${open ? 'active' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Åbn menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
