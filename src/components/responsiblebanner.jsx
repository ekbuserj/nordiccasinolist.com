import { ExternalLink, ShieldAlert, TriangleAlert } from 'lucide-react';
import './responsiblebanner.css';

export default function ResponsibleBanner() {
  return (
    <div className="rg-banner" role="note" aria-label="Ansvarligt spil og aldersgrænse">
      <div className="container rg-banner-inner">
        <div className="rg-banner-left">
          <span className="rg-badge">
            <ShieldAlert className="rg-ic" aria-hidden="true" />
            18+
          </span>
          <span className="rg-banner-text">
            <strong>Spil ansvarligt.</strong> Gambling kan være vanedannende. Sæt grænser og søg hjælp ved behov.
          </span>
        </div>

        <div className="rg-banner-links">
          <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer" className="rg-link">
            StopSpillet <ExternalLink className="rg-ext" aria-hidden="true" />
          </a>
          <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer" className="rg-link">
            ROFUS <ExternalLink className="rg-ext" aria-hidden="true" />
          </a>
          <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer" className="rg-link rg-link-muted">
            Spillemyndigheden <ExternalLink className="rg-ext" aria-hidden="true" />
          </a>
          <span className="rg-mini">
            <TriangleAlert className="rg-mini-ic" aria-hidden="true" /> Vilkår gælder
          </span>
        </div>
      </div>
    </div>
  );
}

