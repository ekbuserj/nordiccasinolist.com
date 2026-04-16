import './casinocard.css';

function Stars({ rating }) {
  const full = Math.floor(rating / 2);
  const half = (rating / 2) % 1 >= 0.4;
  return (
    <div className="stars-row">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`star-icon ${i < full ? 'full' : i === full && half ? 'half' : 'empty'}`}>
          ★
        </span>
      ))}
      <span className="rating-num">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function CasinoCard({ casino, rank }) {
  return (
    <div className={`casino-card ${casino.featured ? 'featured' : ''}`}>
      {rank && <div className="card-rank">#{rank}</div>}
      {casino.featured && <div className="featured-ribbon">Topvalgt</div>}

      <div className="card-header">
        <div className="card-logo-wrap">
          <img
            src={casino.logo}
            alt={`${casino.name} logo`}
            className="card-logo"
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div className="card-logo-fallback" style={{ display: 'none' }}>
            {casino.name.charAt(0)}
          </div>
        </div>
        <div className="card-title-area">
          <h3 className="card-name">{casino.name}</h3>
          <Stars rating={casino.rating} />
        </div>
      </div>

      <p className="card-description">{casino.description}</p>

      <div className="card-bonus">
        <span className="bonus-label">{casino.bonusType}</span>
        <span className="bonus-value">{casino.bonus}</span>
      </div>

      <div className="card-tags">
        {casino.tags.map(tag => (
          <span key={tag} className="badge badge-blue">{tag}</span>
        ))}
      </div>

      <div className="card-actions">
        <a
          href={casino.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="btn-primary card-cta"
        >
          Besøg {casino.name}
        </a>
        <span className="card-conditions">18+ · Vilkår gælder</span>
      </div>
    </div>
  );
}
