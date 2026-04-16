import SeoHead from '../components/seohead';
import { AlertOctagon, ExternalLink, LifeBuoy, Scale, ShieldCheck, TriangleAlert, UserX } from 'lucide-react';
import './ansvarligtspil.css';

export default function AnsvarligtSpil() {
  return (
    <>
      <SeoHead
        title="Ansvarligt Spil – Råd, redskaber og hjælp i Danmark"
        description="Guide til ansvarligt spil i Danmark. Lær om grænseværktøjer, selvudelukkelse via ROFUS, og hvor du finder hjælp til spilleproblemer."
        ogTitle="Ansvarligt Spil – NordicCasinoList"
        ogDescription="Alt om ansvarligt spil på NordicCasinoList. Officielle ressourcer, grænseværktøjer og information om ROFUS og StopSpillet til danske spillere."
        canonical="/ansvarligt-spil"
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <TriangleAlert className="icon-inline" aria-hidden="true" /> Spil sikkert
          </span>
          <h1>Ansvarligt spil</h1>
          <p>
            Online casino skal være sjovt og underholdende. Er det ikke det, er det tid til at søge hjælp. Her finder du redskaber, information og officielle ressourcer.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <div className="rg-layout">
            <div className="rg-main prose">

              <div className="rg-warning-box">
                <span className="rw-icon" aria-hidden="true"><AlertOctagon /></span>
                <div>
                  <strong>Brug for hjælp nu?</strong>
                  <p>Ring til <a href="tel:70222825">StopSpillet: 70 22 28 25</a> (gratis) eller besøg <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">stopspillet.dk</a> for at chatte med en rådgiver.</p>
                </div>
              </div>

              <h2>Hvad er ansvarligt spil?</h2>
              <p>
                Ansvarligt spil handler om at holde gambling som underholdning – inden for dine egne grænser. Det er aldrig en løsning på gæld eller andre problemer. De fleste spillere nyder casino og sports­betting som fritidsaktivitet uden negative konsekvenser. For en mindre andel kan spil dog udvikle sig til et problem.
              </p>

              <h2>Tegn på spilleproblemer</h2>
              <p>Det er vigtigt at kende advarselstegnene:</p>
              <ul>
                <li>Du spiller for penge, du ikke har råd til at tabe</li>
                <li>Du låner penge for at spille</li>
                <li>Du forsøger at vinde tab tilbage ved at spille mere</li>
                <li>Spil fylder mange af dine tanker i løbet af dagen</li>
                <li>Du lyver over for familie og venner om dine spillevaner</li>
                <li>Du forsømmer arbejde, skole eller relationer på grund af spil</li>
              </ul>
              <p>
                Oplever du et eller flere af ovenstående, opfordrer vi dig til at søge hjælp.
              </p>

              <h2>Selvudelukkelse via ROFUS</h2>
              <p>
                <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored">ROFUS (Register Over Frivilligt Udelukkede Spillere)</a> er et gratis register, hvor du kan udelukke dig selv fra alle dansk-licenserede spillesider på én gang. Udelukkelsen kan sættes fra 1 dag til permanent.
              </p>
              <p>
                Alle casinoer med dansk licens er forpligtet til at tjekke ROFUS og afvise spillere, der er registreret.
              </p>

              <h2 id="grænseværktøjer">Grænseværktøjer på casinoer</h2>
              <p>
                Alle dansk-licenserede casinoer skal tilbyde følgende grænseværktøjer:
              </p>
              <ul>
                <li><strong>Indbetalingsgrænser:</strong> Daglig, ugentlig og månedlig grænse for indbetalinger</li>
                <li><strong>Tabsgrænser:</strong> Maksimum tab i en given periode</li>
                <li><strong>Tidsgrænser:</strong> Begræns din spilletid pr. session eller dag</li>
                <li><strong>Selvevaluering:</strong> Test til at vurdere dine spillevaner</li>
                <li><strong>Pause:</strong> Tag en pause fra sitet i en bestemt periode</li>
              </ul>

              <h2>Officielle hjælpeorganisationer</h2>
              <div className="rg-official-links">
                <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-off-link">
                  <img src="/logos/Spillemyndigheden.jpg" alt="Spillemyndigheden" />
                  <div>
                    <strong>Spillemyndigheden</strong>
                    <span>Danmarks officielle spilleregulator – kan modtage klager over licenserede operatører</span>
                  </div>
                </a>
                <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-off-link">
                  <img src="/logos/rofus.jpg" alt="ROFUS" />
                  <div>
                    <strong>ROFUS</strong>
                    <span>Gratis selvudelukkelsesregister – blokér dig selv fra alle dansk-licenserede spillesider</span>
                  </div>
                </a>
                <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-off-link">
                  <img src="/logos/StopSpillet.jpg" alt="StopSpillet" />
                  <div>
                    <strong>StopSpillet</strong>
                    <span>Gratis og fortrolig hjælp til spilleproblemer – telefon, chat og personlig rådgivning</span>
                  </div>
                </a>
              </div>

              <h2 id="cookies">Cookiepolitik</h2>
              <p>
                NordicCasinoList anvender cookies til at forbedre brugeroplevelsen og analysere trafik. Vi anvender følgende typer cookies:
              </p>
              <ul>
                <li><strong>Nødvendige cookies:</strong> Sikrer grundlæggende funktionalitet som aldersbekræftelse og cookiesamtykke</li>
                <li><strong>Analytiske cookies:</strong> Hjælper os med at forstå, hvordan besøgende bruger sitet (f.eks. Google Analytics)</li>
                <li><strong>Marketingcookies:</strong> Bruges til at vise relevante affiliate-tilbud</li>
              </ul>
              <p>
                Du kan til enhver tid ændre dine cookieindstillinger via vores cookie-banner eller ved at slette cookies i din browser.
              </p>

              <h2 id="privatlivspolitik">Privatlivspolitik</h2>
              <p>
                NordicCasinoList indsamler kun de data, der er nødvendige for driften af sitet. Vi deler ikke personoplysninger med tredjeparter uden dit samtykke, undtagen hvor det er påkrævet af lovgivningen.
              </p>
              <p>
                Sitet anvender affiliate-links. Når du klikker på et casinolink, kan vi modtage provision fra den pågældende udbyder. Vi registrerer ikke personlige spillerdata fra casino-partnere.
              </p>
              <p>
                I henhold til GDPR har du ret til indsigt i, rettelse og sletning af dine personoplysninger. Kontakt os på <a href="mailto:kontakt@nordiccasinolist.com">kontakt@nordiccasinolist.com</a> for datarelaterede henvendelser.
              </p>

              <h2 id="vilkar">Vilkår og betingelser</h2>
              <p>
                Ved at bruge NordicCasinoList accepterer du følgende vilkår:
              </p>
              <ul>
                <li>Sitet er udelukkende informativt og udgør ikke tilbud om at spille</li>
                <li>Vi omtaler kun casinoer med gyldig dansk licens</li>
                <li>Bonusoplysninger er vejledende og kan ændres – tjek altid den pågældende udbyder for aktuelle vilkår</li>
                <li>NordicCasinoList påtager sig intet ansvar for tab opstået ved brug af de omtalte casinoer</li>
                <li>Du skal være 18 år eller derover for at benytte dette site</li>
              </ul>

              <div className="age-notice-box">
                <span aria-hidden="true"><TriangleAlert className="icon-inline-lg" /></span>
                <p>
                  <strong>18+ · Spil ansvarligt.</strong> Gambling kan skabe afhængighed.
                  Brug af dette site forudsætter, at du er myndig og overholder gældende dansk lovgivning.
                  Ekstern hjælp: <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">StopSpillet</a> · <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored">ROFUS</a>
                </p>
              </div>
            </div>

            <aside className="rg-sidebar">
              <div className="rgs-block">
                <h4>Hurtig hjælp</h4>
                <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rgs-btn">
                  <LifeBuoy className="rgs-ic" aria-hidden="true" /> StopSpillet hjælpelinje <ExternalLink className="rgs-ext" aria-hidden="true" />
                </a>
                <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rgs-btn">
                  <UserX className="rgs-ic" aria-hidden="true" /> Udeluk dig selv via ROFUS <ExternalLink className="rgs-ext" aria-hidden="true" />
                </a>
                <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rgs-btn">
                  <Scale className="rgs-ic" aria-hidden="true" /> Spillemyndigheden <ExternalLink className="rgs-ext" aria-hidden="true" />
                </a>
              </div>
              <div className="rgs-block">
                <h4>På denne side</h4>
                <ul className="rgs-toc">
                  <li><a href="#grænseværktøjer">Grænseværktøjer</a></li>
                  <li><a href="#cookies">Cookiepolitik</a></li>
                  <li><a href="#privatlivspolitik">Privatlivspolitik</a></li>
                  <li><a href="#vilkar">Vilkår og betingelser</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
