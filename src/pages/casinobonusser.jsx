import SeoHead from '../components/seohead';
import { casinos } from '../data/casinos';
import { BookOpen, Gift, RotateCcw, BadgePercent, Sparkles, Coins, Trophy, TriangleAlert } from 'lucide-react';
import DisclaimerBox from '../components/disclaimerbox';
import './thematic.css';
import './casinobonusser.css';

const sorted = [...casinos].sort((a, b) => b.rating - a.rating);
const year = new Date().getFullYear();

const bonusTypes = [
  {
    icon: Gift,
    name: 'Velkomstbonus',
    desc: 'Den mest almindelige bonustype – gives til nye spillere ved første indbetaling. Typisk en match på 100% op til et vist beløb.'
  },
  {
    icon: Sparkles,
    name: 'Free spins',
    desc: 'Gratis omdrejninger på udvalgte spillemaskiner. Oftest inkluderet i velkomstpakken eller som et selvstændigt tilbud.'
  },
  {
    icon: Coins,
    name: 'Gratis spilpenge',
    desc: 'Penge du modtager uden indbetaling. Mulighed for at afprøve casinoet uden risiko. Omsætningskrav varierer.'
  },
  {
    icon: RotateCcw,
    name: 'Reload-bonus',
    desc: 'Bonus ved efterfølgende indbetalinger for eksisterende spillere. Ofte en lavere matchprocent end velkomstbonussen.'
  },
  {
    icon: BadgePercent,
    name: 'Cashback',
    desc: 'En procent af dine tab refunderes typisk ugentligt. Populær bonustype, da den reducerer risikoen ved spil.'
  },
  {
    icon: Trophy,
    name: 'Loyalitetsprogram',
    desc: 'Point samles op ved spil og kan veksles til bonuspenge, free spins eller eksklusive fordele.'
  },
];

export default function CasinoBonusser() {
  return (
    <>
      <SeoHead
        title={`Casino Bonusser Danmark ${year} – Oversigt over de bedste tilbud`}
        description="Komplet oversigt over casino bonusser i Danmark. Velkomstbonusser, free spins, cashback og loyalitetsprogrammer – sammenlign og find det bedste tilbud."
        ogTitle={`Casino Bonusser ${year} – NordicCasinoList.com`}
        ogDescription="Find de bedste casino bonusser i Danmark. Vi sammenligner velkomstbonusser, free spins og løbende tilbud hos alle dansk-licenserede casinoer."
        canonical="/casino-bonusser"
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Gift className="icon-inline" aria-hidden="true" /> Aktuelle tilbud {year}
          </span>
          <h1>Casino bonusser i Danmark</h1>
          <p>
            Find de bedste bonustilbud hos dansk-licenserede casinoer. Vi sammenligner velkomstbonusser, free spins og løbende kampagner – og forklarer, hvad du skal lægge mærke til i vilkårene.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><BookOpen className="icon-inline" aria-hidden="true" /> Bonusguide</span>
            <h2 className="section-title">Typer af casino bonusser</h2>
            <p className="section-subtitle">
              Der findes mange former for casinobonusser. Her er en oversigt over de mest udbredte typer i Danmark.
            </p>
          </div>
          <div className="bonus-types-grid">
            {bonusTypes.map(b => (
              <div className="bonus-type-card" key={b.name}>
                <span className="bt-icon" aria-hidden="true"><b.icon /></span>
                <h3>{b.name}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><Coins className="icon-inline" aria-hidden="true" /> Sammenlign tilbud</span>
            <h2 className="section-title">Aktuelle velkomsttilbud</h2>
            <p className="section-subtitle">
              Alle bonusser er hos dansk-licenserede udbydere. 18+ · Vilkår og betingelser gælder.
            </p>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <DisclaimerBox title="18+ · Bonusvilkår gælder · Spil ansvarligt">
              Bonusser kan have omsætningskrav. Spil aldrig for at vinde tab tilbage. Brug StopSpillet eller ROFUS, hvis spil ikke længere føles som underholdning.
            </DisclaimerBox>
          </div>
          <div className="bonus-compare-table">
            <div className="bct-header">
              <span>Casino</span>
              <span>Bonustilbud</span>
              <span>Type</span>
              <span>Vurdering</span>
              <span></span>
            </div>
            {sorted.map(c => (
              <div className="bct-row" key={c.id}>
                <div className="bct-casino">
                  <div className="bct-logo">
                    <img src={c.logo} alt={c.name} onError={e => { e.currentTarget.style.display='none'; }} />
                  </div>
                  <span className="bct-name">{c.name}</span>
                </div>
                <div className="bct-bonus">{c.bonus}</div>
                <div className="bct-type">
                  <span className="badge badge-orange">{c.bonusType}</span>
                </div>
                <div className="bct-rating">
                  <span className="rating-score">{c.rating.toFixed(1)}</span>
                  <span className="rating-max">/10</span>
                </div>
                <div className="bct-action">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow sponsored"
                    className="btn-primary bct-btn"
                  >
                    Hent bonus
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="bonus-disclaimer" style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            18+ · Kun nye spillere · Bonusvilkår gælder hos den enkelte udbyder · Spil ansvarligt
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container thematic-info">
          <h2>Hvad er omsætningskrav?</h2>
          <p>
            Omsætningskrav (også kaldet wagering requirements) er det beløb, du skal spille for, inden du kan hæve en bonus. Et omsætningskrav på 30x en bonus på 500 kr. betyder, at du skal spille for 15.000 kr., inden bonus-gevinster udbetales.
          </p>
          <p>
            Vores anbefaling: vælg altid bonusser med lave omsætningskrav – helst under 30x – og læs altid vilkårene grundigt.
          </p>

          <h2>Bonusser og ansvarligt spil</h2>
          <p>
            Alle dansk-licenserede casinoer er forpligtet til at tilbyde redskaber til ansvarligt spil. Du kan til enhver tid sætte grænser for indbetalinger, tab og spilletid direkte på det pågældende casino.
          </p>
          <p>
            Har du brug for hjælp, kan du tilmelde dig <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored">ROFUS</a> for frivillig udelukkelse fra alle dansk-licenserede spillesider, eller kontakte <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">StopSpillet</a>.
          </p>

          <div className="age-notice-box">
            <span aria-hidden="true"><TriangleAlert className="icon-inline-lg" /></span>
            <p>Casino bonusser er kun tilgængelige for nye spillere over 18 år med konto hos den pågældende udbyder.</p>
          </div>
        </div>
      </section>
    </>
  );
}
