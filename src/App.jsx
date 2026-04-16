import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/header';
import Footer from './components/footer';
import CookieBanner from './components/cookiebanner';
import AgeModal from './components/agemodal';
import ResponsibleBanner from './components/responsiblebanner';
import Home from './pages/home';
import NyeCasinoer from './pages/nyecasinoer';
import CasinoBonusser from './pages/casinobonusser';
import Kontakt from './pages/kontakt';
import AnsvarligtSpil from './pages/ansvarligtspil';
import NotFound from './pages/notfound';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AgeModal />
        <CookieBanner />
        <Header />
        <ResponsibleBanner />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nye-casinoer" element={<NyeCasinoer />} />
            <Route path="/casino-bonusser" element={<CasinoBonusser />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ansvarligt-spil" element={<AnsvarligtSpil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
