import SeoHead from '../components/seohead';
import CasinoCard from '../components/casinocard';
import DisclaimerBox from '../components/disclaimerbox';
import { casinos } from '../data/casinos';
import { BadgeCheck, Search, Sparkles, TriangleAlert } from 'lucide-react';
import './thematic.css';

const sorted = [...casinos].sort((a, b) => b.rating - a.rating);
const year = new Date().getFullYear();

export default function NyeCasinoer() {
  return (
    <>
      <SeoHead
        title={`Nye Casinoer i Danmark ${year} – Friske udbydere med dansk licens`}
        description="Opdagede de nyeste online casinoer i Danmark med dansk licens. Vi gennemgår nye udbydere, bonusser og spiloplevelser – opdateret løbende."
        ogTitle={`Nye Casinoer Danmark ${year} – NordicCasinoList`}
        ogDescription="Find de nyeste dansk-licenserede casinoer. Opdaterede anmeldelser, bonusser og ekspert­vurderinger til alle nye spillere."
        canonical="/nye-casinoer"
      />

      <section className="page-hero">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Sparkles className="icon-inline" aria-hidden="true" /> Nyeste udbydere
          </span>
          <h1>Nye casinoer i Danmark</h1>
          <p>
            Markedet for online casino i Danmark vokser konstant. Her finder du en oversigt over de nyeste og mest lovende udbydere, alle med gyldig licens fra Spillemyndigheden.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="thematic-intro">
            <div className="intro-card">
              <span className="intro-icon" aria-hidden="true"><Search /></span>
              <div>
                <h3>Hvad er et "nyt" casino?</h3>
                <p>Vi betragter et casino som nyt, hvis det for nylig har modtaget dansk licens, lanceret en ny platform eller gennemgået en større opgradering. Nye casinoer tilbyder ofte ekstra attraktive velkomsttilbud.</p>
              </div>
            </div>
            <div className="intro-card">
              <span className="intro-icon" aria-hidden="true"><BadgeCheck /></span>
              <div>
                <h3>Alle verificerede</h3>
                <p>Uanset om casinoet er nyt eller etableret, kontrollerer vi altid, at det har en gyldig tilladelse fra Spillemyndigheden, inden vi omtaler det her på sitet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><BadgeCheck className="icon-inline" aria-hidden="true" /> Vurderet af vores redaktion</span>
            <h2 className="section-title">Alle casinoer med dansk licens</h2>
            <p className="section-subtitle">
              Rangordnet efter samlet vurdering baseret på licens, bonus, spiludvalg og brugervenlighed.
            </p>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <DisclaimerBox title="18+ · Spil ansvarligt">
              Online gambling er kun for voksne. Brug grænseværktøjer, og tilmeld dig ROFUS, hvis du har brug for at stoppe.
            </DisclaimerBox>
          </div>
          <div className="casinos-full-list">
            {sorted.map((casino, i) => (
              <CasinoCard key={casino.id} casino={casino} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container thematic-info">
          <h2>Fordele ved at prøve et nyt casino</h2>
          <p>
            Nye casinoer har typisk interesse i at tiltrække spillere og tilbyder derfor ofte bedre velkomsttilbud end etablerede konkurrenter. Derudover er den tekniske platform typisk mere moderne.
          </p>

          <h2>Hvad skal du være opmærksom på?</h2>
          <p>
            Selvom nye casinoer kan tilbyde fristende bonusser, er det vigtigt at kontrollere omsætningskravene. Læs altid vilkårene, inden du indbetaler. Tjek også, at casinoet har dansk licens.
          </p>

          <h2>Dansk licens – et must</h2>
          <p>
            Alle casinoer på denne side har en gyldig licens fra <a href="https://www.spillemyndigheden.dk/" target="_blank" rel="noopener noreferrer">Spillemyndigheden</a>. En dansk licens sikrer fair play, lovpligtig adgang til <a href="https://www.rofus.nu" target="_blank" rel="noopener noreferrer">ROFUS</a> og overholdelse af danske spilleregler.
          </p>

          <div className="age-notice-box">
            <span aria-hidden="true"><TriangleAlert className="icon-inline-lg" /></span>
            <p>Online casino er kun for personer over 18 år. Spil ansvarligt. Hjælp tilgængelig på <a href="https://www.stopspillet.dk/" target="_blank" rel="noopener noreferrer">stopspillet.dk</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
