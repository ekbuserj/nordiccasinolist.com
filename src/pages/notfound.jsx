import { Link } from 'react-router-dom';
import SeoHead from '../components/seohead';
import { Layers } from 'lucide-react';
import './notfound.css';

export default function NotFound() {
  return (
    <>
      <SeoHead
        title="Side ikke fundet – NordicCasinoList"
        description="Siden du leder efter findes ikke. Gå tilbage til forsiden for at finde de bedste danske casinoer."
        canonical="/404"
      />
      <div className="notfound">
        <span className="nf-icon" aria-hidden="true"><Layers /></span>
        <h1>404</h1>
        <p>Siden blev ikke fundet.</p>
        <Link to="/" className="btn-primary">← Tilbage til forsiden</Link>
      </div>
    </>
  );
}
