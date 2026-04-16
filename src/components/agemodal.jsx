import { useState, useEffect } from 'react';
import { ShieldCheck, LogOut, ExternalLink } from 'lucide-react';
import './agemodal.css';

export default function AgeModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const confirmed = sessionStorage.getItem('ncl_age');
    if (!confirmed) setVisible(true);
  }, []);

  const confirm = () => {
    sessionStorage.setItem('ncl_age', 'confirmed');
    setVisible(false);
  };

  const deny = () => {
    window.location.href = 'https://www.google.dk/';
  };

  if (!visible) return null;

  return (
    <div className="age-modal-overlay">
      <div className="age-modal" role="dialog" aria-modal="true" aria-label="Aldersbekræftelse">
        <div className="age-modal-icon" aria-hidden="true"><ShieldCheck /></div>
        <h2>Er du over 18 år?</h2>
        <p>
          Dette websted indeholder information om online gambling. Adgang er kun tilladt for personer over 18 år.
          Husk: spil kan være vanedannende. Spil ansvarligt.
        </p>
        <div className="age-modal-links">
          <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer">
            ROFUS – frivillig udelukkelse <ExternalLink className="age-ext" aria-hidden="true" />
          </a>
          <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer">
            StopSpillet – hjælp til spilleproblemer <ExternalLink className="age-ext" aria-hidden="true" />
          </a>
        </div>
        <div className="age-modal-actions">
          <button className="btn-primary age-confirm" onClick={confirm}>Ja, jeg er over 18</button>
          <button className="age-deny" onClick={deny}>
            <LogOut className="age-leave" aria-hidden="true" /> Nej, forlad siden
          </button>
        </div>
      </div>
    </div>
  );
}
