import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CookieBanner from './components/CookieBanner';
import './i18n/config';
import { LanguageSwitcher } from './components/LanguageSwitcher';

// Import pages directly without lazy loading for now
import Home from './pages/Home';
import Fenster from './pages/Fenster';
import Tueren from './pages/Tueren';
import Sonnenschutz from './pages/Sonnenschutz';
import Insektenschutz from './pages/Insektenschutz';
import Tischlerei from './pages/Tischlerei';
import WerSindWir from './pages/WerSindWir';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Impressum from './pages/Impressum';
import Referenzen from './pages/Referenzen';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fenster" element={<Fenster />} />
            <Route path="/tueren" element={<Tueren />} />
            <Route path="/sonnenschutz" element={<Sonnenschutz />} />
            <Route path="/insektenschutz" element={<Insektenschutz />} />
            <Route path="/tischlerei" element={<Tischlerei />} />
            <Route path="/wer-sind-wir" element={<WerSindWir />} />
            <Route path="/datenschutz" element={<PrivacyPolicy />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/referenzen" element={<Referenzen />} />
          </Routes>
        </main>
      </Layout>
      <CookieBanner />
    </div>
  );
}

export default App;