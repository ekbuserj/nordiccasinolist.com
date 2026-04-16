import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-icon" aria-hidden="true"><Layers /></span>
              <span className="footer-logo-text">Nordic<strong>CasinoList</strong></span>
            </Link>
            <p className="footer-tagline">
              Danmarks uafhængige guide til licenserede casinoer. Vi sammenligner, vurderer og hjælper dig med at finde det rigtige casino.
            </p>
            <div className="footer-age">
              <span className="age-badge">18+</span>
              <span>Spil er kun lovligt for personer over 18 år</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Forside</Link></li>
              <li><Link to="/nye-casinoer">Nye Casinoer</Link></li>
              <li><Link to="/casino-bonusser">Casino Bonusser</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Juridisk & Hjælp</h4>
            <ul>
              <li><Link to="/ansvarligt-spil">Ansvarligt Spil</Link></li>
              <li><Link to="/ansvarligt-spil#cookies">Cookiepolitik</Link></li>
              <li><Link to="/ansvarligt-spil#privatlivspolitik">Privatlivspolitik</Link></li>
              <li><Link to="/ansvarligt-spil#vilkar">Vilkår og betingelser</Link></li>
              <li><Link to="/kontakt">Hjælp & Support</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-safety">
            <h4>Sikker spil-ressourcer</h4>
            <p className="safety-intro">Oplever du problemer med spil? Disse organisationer kan hjælpe:</p>
            <div className="safety-links">
              <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="safety-link">
                <img src="/logos/Spillemyndigheden.jpg" alt="Spillemyndigheden" className="safety-logo" />
                <div>
                  <span className="safety-name">Spillemyndigheden</span>
                  <span className="safety-desc">Dansk spilleregulator</span>
                </div>
              </a>
              <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="safety-link">
                <img src="/logos/rofus.jpg" alt="ROFUS" className="safety-logo" />
                <div>
                  <span className="safety-name">ROFUS</span>
                  <span className="safety-desc">Register over frivilligt udelukkede</span>
                </div>
              </a>
              <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="safety-link">
                <img src="/logos/StopSpillet.jpg" alt="StopSpillet" className="safety-logo" />
                <div>
                  <span className="safety-name">StopSpillet</span>
                  <span className="safety-desc">Hjælp til spilleproblemer</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-legal">
            NordicCasinoList.com er et uafhængigt affiliatewebsted. Vi modtager provision fra casinoer, når du klikker på vores links, men dette påvirker ikke vores redaktionelle vurderinger. Alle casinoer på dette site er licenseret af <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">Spillemyndigheden</a>. Husk at spille ansvarligt. Gambling kan være vanedannende – søg hjælp hos <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">StopSpillet</a> eller <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored">ROFUS</a> om nødvendigt. Kun for +18.
          </p>
          <p className="footer-copy">© {new Date().getFullYear()} NordicCasinoList. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}
