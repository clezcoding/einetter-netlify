import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Einetter</h3>
            <p className="text-primary-100">Ihr Spezialist für Fenster,Türen,Sonnen- & Insektenschutz seit über 69 Jahren.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <p className="text-primary-100">Mo-Do: 08:00 - 17:00<br />Fr: 08:00 - 12:00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 text-primary-100">
              <li><a href="/#products" onClick={handleSectionClick('products')} className="hover:text-white">Produkte</a></li>
              <li><a href="/#partners" onClick={handleSectionClick('partners')} className="hover:text-white">Partner</a></li>
              <li><Link to="/referenzen" className="hover:text-white">Referenzen</Link></li>
              <li><a href="/#configurators" onClick={handleSectionClick('configurators')} className="hover:text-white">Konfiguratoren</a></li>
              <li><a href="/#contact" onClick={handleSectionClick('contact')} className="hover:text-white">Kontakt</a></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-800 text-center text-primary-100">
          <p>&copy; {new Date().getFullYear()} Einetter. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}