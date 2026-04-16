import SeoHead from '../components/seohead';
import './kontakt.css';

export default function Kontakt() {
  return (
    <>
      <SeoHead
        title="Kontakt NordicCasinoList – Få svar på dine spørgsmål"
        description="Kontakt NordicCasinoList med spørgsmål om casinoanmeldelser, bonusser, ansvarligt spil eller teknisk hjælp. Vi svarer hurtigst muligt på dansk."
        ogTitle="Kontakt os – NordicCasinoList"
        ogDescription="Vi er klar til at hjælpe. Kontakt NordicCasinoList via e-mail med spørgsmål om vores casinoanmeldelser eller generelle henvendelser."
        canonical="/kontakt"
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>✉ Kontakt & Support</span>
          <h1>Kontakt os</h1>
          <p>
            Har du spørgsmål om vores anmeldelser, casinoer, bonusser eller ansvarligt spil? Vi er klar til at hjælpe.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container kontakt-layout">
          <div className="kontakt-info">
            <div className="ki-block">
              <h2>Om NordicCasinoList</h2>
              <p>
                NordicCasinoList er en uafhængig dansk informationsside om online casinoer. Vi er ikke en operatør og tilbyder ikke direkte spilmuligheder. Vores formål er at hjælpe danske spillere med at finde licenserede, sikre og fair udbydere.
              </p>
              <p>
                Vores redaktion arbejder uafhængigt og vurderer casinoer på baggrund af licens, bonus, spiludvalg, betalinger og kundesupport.
              </p>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="cc-icon">✉</span>
                <div>
                  <h3>E-mail</h3>
                  <p>Skriv til os på e-mail – vi svarer inden for 1-2 hverdage.</p>
                  <a href="mailto:kontakt@nordiccasinolist.com" className="cc-link">
                    kontakt@nordiccasinolist.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-icon">✏</span>
                <div>
                  <h3>Redaktionel henvendelse</h3>
                  <p>For spørgsmål om vores metode, faktuelt indhold eller rettelser kontakt os via mail med emnet "Redaktion".</p>
                </div>
              </div>
              <div className="contact-card">
                <span className="cc-icon">🤝</span>
                <div>
                  <h3>Affiliate & Partnerskab</h3>
                  <p>Ønsker du at samarbejde med NordicCasinoList? Skriv til os med emnet "Partnerskab".</p>
                </div>
              </div>
            </div>

            <div className="ki-block">
              <h2>Hjælp til ansvarligt spil</h2>
              <p>
                Oplever du problemer med spil, er følgende officielle ressourcer tilgængelige – uafhængige af NordicCasinoList:
              </p>
              <div className="help-links">
                <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="help-link">
                  <strong>StopSpillet.dk</strong>
                  <span>Hjælp og rådgivning ved spilleproblemer</span>
                </a>
                <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="help-link">
                  <strong>ROFUS.nu</strong>
                  <span>Frivillig udelukkelse fra alle dansk-licenserede casinoer</span>
                </a>
                <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="help-link">
                  <strong>Spillemyndigheden.dk</strong>
                  <span>Danmarks officielle spilleregulator</span>
                </a>
              </div>
            </div>

            <div className="ki-block faq-mini">
              <h2>Hyppige spørgsmål</h2>
              <div className="faq-mini-list">
                <div className="faq-mini-item">
                  <h4>Samarbejder I med casinoerne?</h4>
                  <p>Vi modtager affiliatekommission via links på sitet. Dette påvirker ikke vores redaktionelle vurderinger, som er baseret på objektive testkriterier.</p>
                </div>
                <div className="faq-mini-item">
                  <h4>Kan I anbefale et casino til mig personligt?</h4>
                  <p>Vi tilbyder ikke personlig rådgivning. Brug vores oversigter og sammenligningsværktøjer til at finde det rette casino ud fra dine egne præferencer.</p>
                </div>
                <div className="faq-mini-item">
                  <h4>Hvad gør jeg, hvis et casino ikke betaler ud?</h4>
                  <p>Kontakt casinoets kundesupport direkte. Kan problemet ikke løses, kan du indberette det til <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">Spillemyndigheden</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
