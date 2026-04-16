import { ExternalLink, TriangleAlert } from 'lucide-react';
import './disclaimerbox.css';

export default function DisclaimerBox({ title, children }) {
  return (
    <div className="disclaimer-box" role="note" aria-label="Ansvarligt spil disklemer">
      <div className="disclaimer-head">
        <TriangleAlert className="disc-ic" aria-hidden="true" />
        <div>
          <div className="disc-title">{title || '18+ · Spil ansvarligt'}</div>
          <div className="disc-sub">
            Gambling kan være vanedannende. Brug grænser og søg hjælp ved behov.
          </div>
        </div>
      </div>
      {children ? <div className="disc-body">{children}</div> : null}
      <div className="disc-links">
        <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="disc-link">
          StopSpillet <ExternalLink className="disc-ext" aria-hidden="true" />
        </a>
        <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="disc-link">
          ROFUS <ExternalLink className="disc-ext" aria-hidden="true" />
        </a>
        <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="disc-link disc-link-muted">
          Spillemyndigheden <ExternalLink className="disc-ext" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

