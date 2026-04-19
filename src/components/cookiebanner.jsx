import { useState } from 'react';
import './cookiebanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    try {
      return !localStorage.getItem('ncl_cookies');
    } catch {
      return true;
    }
  });

  const accept = () => {
    localStorage.setItem('ncl_cookies', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('ncl_cookies', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookiesamtykke">
      <div className="cookie-content">
        <div className="cookie-text">
          <strong>Vi bruger cookies</strong>
          <p>
            Vi anvender cookies til at forbedre din oplevelse, analysere trafikken og vise relevante tilbud.
            Læs vores{' '}
            <a href="/ansvarligt-spil#cookies">cookiepolitik</a> for mere information.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="btn-primary" onClick={accept}>Accepter alle</button>
          <button className="cookie-decline" onClick={decline}>Kun nødvendige</button>
        </div>
      </div>
    </div>
  );
}
