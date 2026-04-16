import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  CreditCard,
  Gamepad2,
  Gift,
  Headphones,
  Info,
  Lock,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  UserX,
} from 'lucide-react';
import SeoHead from '../components/seohead';
import CasinoCard from '../components/casinocard';
import DisclaimerBox from '../components/disclaimerbox';
import { casinos } from '../data/casinos';
import './home.css';

const topCasinos = [...casinos].sort((a, b) => b.rating - a.rating);
const year = new Date().getFullYear();

const faqs = [
  {
    q: 'Hvad er et licenseret dansk casino?',
    a: 'Et licenseret dansk casino er en spilleudbyder, der har fået godkendt licens af Spillemyndigheden. Det betyder, at casinoet overholder dansk spillelovgivning og tilbyder sikker og fair spilunderholdning.'
  },
  {
    q: 'Hvordan finder jeg det bedste casino i Danmark?',
    a: 'Vi vurderer casinoer ud fra licens, bonustilbud, spiludvalg, udbetalingshastighed, kundesupport og ansvarlig spilpolitik. Vores topvurderinger giver et godt udgangspunkt.'
  },
  {
    q: 'Er casinoer på NordicCasinoList sikre at spille på?',
    a: 'Ja – vi omtaler udelukkende casinoer med gyldig licens fra Spillemyndigheden. Alle dansk-licenserede casinoer er underlagt strenge krav til fair play, databeskyttelse og ansvarligt spil.'
  },
  {
    q: 'Kan jeg udelukke mig selv fra dansk casino?',
    a: 'Ja. Gennem ROFUS (Register Over Frivilligt Udelukkede Spillere) kan du spærre dig selv fra alle dansklicenserede spillesider. Besøg rofus.nu for at tilmelde dig.'
  },
  {
    q: 'Hvad sker der med min bonus, hvis jeg lukker min konto?',
    a: 'Bonusvilkår varierer fra casino til casino. Generelt mister du ubrugte bonuspenge og free spins ved kontolukning. Læs altid casinoets vilkår, inden du accepterer en bonus.'
  },
];

export default function Home() {
  return (
    <>
      <SeoHead
        title={`Bedste Online Casinoer i Danmark ${year} – NordicCasinoList`}
        description="Find Danmarks bedste licenserede online casinoer. Vi sammenligner bonusser, spiludvalg og sikkerhed – kun godkendte udbydere med dansk licens."
        ogTitle="NordicCasinoList – Danskernes guide til online casinoer"
        ogDescription="Uafhængige anmeldelser og sammenligninger af de bedste dansk-licenserede online casinoer. Opdaterede bonustilbud og ekspertvurderinger."
        canonical="/"
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-shape s1" />
          <div className="hero-shape s2" />
          <div className="hero-shape s3" />
        </div>
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <BadgeCheck className="icon-inline" aria-hidden="true" /> Danmarks uafhængige casino-guide
            </div>
            <h1 className="hero-title">
              Find de bedste <br />
              <span className="hero-highlight">danske casinoer</span> i {year}
            </h1>
            <p className="hero-subtitle">
              Vi gennemgår og sammenligner alle dansk-licenserede online casinoer, så du kan spille trygt og ansvarligt. Kun udbydere godkendt af Spillemyndigheden.
            </p>
            <div className="hero-actions">
              <Link to="/nye-casinoer" className="btn-primary hero-btn">
                Se top casinoer →
              </Link>
              <Link to="/casino-bonusser" className="btn-outline-white">
                Sammenlign bonusser
              </Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <CheckCircle2 className="trust-icon" aria-hidden="true" />
                <span>Kun dansk-licenserede casinoer</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="trust-icon" aria-hidden="true" />
                <span>Uafhængige anmeldelser</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 className="trust-icon" aria-hidden="true" />
                <span>Opdateret løbende</span>
              </div>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-num">{casinos.length}+</span>
              <span className="stat-label">Anmeldte casinoer</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Med dansk licens</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">18+</span>
              <span className="stat-label">Aldersgrænse</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">Gratis</span>
              <span className="stat-label">Uafhængig guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLOSURE STRIP */}
      <div className="disclosure-strip">
        <div className="container disclosure-inner">
          <span className="disclosure-icon" aria-hidden="true"><Info /></span>
          <p>
            <strong>Affiliateoplysning:</strong> NordicCasinoList modtager kommission fra casinoer via affiliate-links. Dette påvirker ikke vores vurderinger. Alle omtalte casinoer er licenseret af{' '}
            <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored">Spillemyndigheden</a>.
            Spil ansvarligt – kun for +18.
          </p>
        </div>
      </div>

      {/* TOP CASINOS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><BadgeCheck className="icon-inline" aria-hidden="true" /> Ekspertvurderinger</span>
            <h2 className="section-title">Danmarks bedst vurderede casinoer</h2>
            <p className="section-subtitle">
              Alle casinoer er personligt testet og vurderet af vores redaktion. Rangordning baseret på bonus, sikkerhed, support og spiludvalg.
            </p>
          </div>
          <div className="casinos-grid">
            {topCasinos.map((casino, i) => (
              <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
            ))}
          </div>
          <div className="home-disclaimer">
            <DisclaimerBox title="18+ · Spil ansvarligt · Affiliateoplysning">
              Vi kan modtage kommission, når du klikker på links. Spil kun for penge, du har råd til at tabe, og brug ROFUS/StopSpillet hvis du har brug for en pause eller hjælp.
            </DisclaimerBox>
          </div>
          <div className="section-cta">
            <Link to="/nye-casinoer" className="btn-secondary">
              Se alle casinoer →
            </Link>
          </div>
        </div>
      </section>

      {/* BONUS HIGHLIGHT */}
      <section className="section bonus-section">
        <div className="container">
          <div className="bonus-header">
            <span className="section-label"><Gift className="icon-inline" aria-hidden="true" /> Aktuelle tilbud</span>
            <h2 className="section-title">Bedste velkomsttilbud denne uge</h2>
            <p className="section-subtitle">
              Disse bonusser er eksklusivt tilgængelige for nye spillere. Husk altid at læse vilkår og betingelser.
            </p>
          </div>
          <div className="bonus-cards">
            {topCasinos.slice(0, 3).map(c => (
              <div className="bonus-highlight-card" key={c.id}>
                <div className="bhc-logo">
                  <img src={c.logo} alt={c.name} onError={e => { e.currentTarget.style.display='none'; }} />
                </div>
                <div className="bhc-body">
                  <h3>{c.name}</h3>
                  <p className="bhc-bonus">{c.bonus}</p>
                  <div className="bhc-tags">
                    {c.tags.slice(0, 2).map(t => (
                      <span key={t} className="badge badge-orange">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="btn-primary bhc-cta"
                >
                  Hent tilbud
                </a>
              </div>
            ))}
          </div>
          <p className="bonus-disclaimer">18+ · Ansvarligt spil · Vilkår og betingelser gælder hos den pågældende udbyder</p>
        </div>
      </section>

      {/* HOW WE REVIEW */}
      <section className="section section-alt">
        <div className="container">
          <div className="review-grid">
            <div className="review-text">
              <span className="section-label"><ClipboardList className="icon-inline" aria-hidden="true" /> Vores metode</span>
              <h2 className="section-title">Sådan vurderer vi casinoer</h2>
              <p className="section-subtitle">
                Vores redaktion anvender en struktureret metode med over 50 testpunkter for at sikre, at du kun ser de bedste og sikreste muligheder.
              </p>
              <Link to="/nye-casinoer" className="btn-primary" style={{ marginTop: '24px' }}>
                Se vores anmeldelser
              </Link>
            </div>
            <div className="review-steps">
              {[
                { icon: Lock, title: 'Licens & Sikkerhed', desc: 'Vi kontrollerer dansk licens, SSL-kryptering og ansvarlig spilpolitik.' },
                { icon: Gift, title: 'Bonus & Vilkår', desc: 'Vi gennemgår bonusbeløb, omsætningskrav og øvrige betingelser.' },
                { icon: Gamepad2, title: 'Spiludvalg', desc: 'Vi tester slots, live casino, sports­betting og mobilkompatibilitet.' },
                { icon: CreditCard, title: 'Ind- og udbetaling', desc: 'Vi vurderer tilgængelige betalingsmetoder og udbetalingstider.' },
                { icon: Headphones, title: 'Kundesupport', desc: 'Vi tester live chat, e-mail og svartider på dansk.' },
                { icon: Smartphone, title: 'Mobiloplevelse', desc: 'Vi tester app og mobilsite på iOS og Android.' },
              ].map(step => (
                <div className="review-step" key={step.title}>
                  <span className="step-icon" aria-hidden="true"><step.icon /></span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY LICENSED */}
      <section className="section why-section">
        <div className="container">
          <div className="why-inner">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}><Scale className="icon-inline" aria-hidden="true" /> Beskyttelse af spillere</span>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>Hvorfor vælge et licenseret casino?</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Alle dansk-licenserede casinoer er underlagt streng regulering fra Spillemyndigheden.
            </p>
            <div className="why-grid">
              {[
                { icon: ShieldCheck, title: 'Officiel licens', desc: 'Spillemyndigheden godkender og fører tilsyn med alle licenserede udbydere.' },
                { icon: Scale, title: 'Fair play', desc: 'Lovpligtig brug af certificerede tilfældighedsgeneratorer (RNG).' },
                { icon: LockKeyhole, title: 'Databeskyttelse', desc: 'Krav om GDPR-overholdelse og krypteret datahåndtering.' },
                { icon: UserX, title: 'Selvudelukkelse', desc: 'Adgang til ROFUS og egne grænseværktøjer på alle licenserede sider.' },
              ].map(item => (
                <div className="why-card" key={item.title}>
                  <span className="why-icon" aria-hidden="true"><item.icon /></span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMBLING */}
      <section className="section section-alt">
        <div className="container">
          <div className="rg-block">
            <div className="rg-text">
              <span className="section-label" style={{ color: 'var(--accent)' }}><TriangleAlert className="icon-inline" aria-hidden="true" /> Ansvarligt spil</span>
              <h2 className="section-title">Spil sikkert og ansvarligt</h2>
              <p>
                Gambling bør altid være underholdning – ikke en løsning på økonomiske problemer. Sæt grænser for dig selv og søg hjælp, hvis du oplever problemer.
              </p>
              <ul className="rg-tips">
                <li>Sæt et fast budget og overhold det</li>
                <li>Tag pauser og undgå at spille under pres</li>
                <li>Brug casinoets egne grænseværktøjer</li>
                <li>Tilmeld dig ROFUS for frivillig udelukkelse</li>
              </ul>
              <Link to="/ansvarligt-spil" className="btn-secondary">
                Læs vores guide til ansvarligt spil
              </Link>
            </div>
            <div className="rg-orgs">
              <h4>Officielle hjælpeorganisationer</h4>
              <div className="rg-org-links">
                <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-org">
                  <img src="/logos/Spillemyndigheden.jpg" alt="Spillemyndigheden" />
                  <span>Spillemyndigheden.dk</span>
                </a>
                <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-org">
                  <img src="/logos/rofus.jpg" alt="ROFUS" />
                  <span>rofus.nu</span>
                </a>
                <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="rg-org">
                  <img src="/logos/StopSpillet.jpg" alt="StopSpillet" />
                  <span>stopspillet.dk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="faq-header">
            <span className="section-label"><CircleHelp className="icon-inline" aria-hidden="true" /> Spørgsmål & svar</span>
            <h2 className="section-title">Ofte stillede spørgsmål</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="faq-toggle">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

