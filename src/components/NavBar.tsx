import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMainPageSectionClick = (e: React.MouseEvent, sectionId: string) => {
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
    closeMenu();
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/wer-sind-wir', label: 'Über uns' },
    { 
      to: '/#products', 
      label: 'Produkte',
      onClick: (e: React.MouseEvent) => handleMainPageSectionClick(e, 'products')
    },
    { 
      to: '/#configurators', 
      label: 'Konfiguratoren',
      onClick: (e: React.MouseEvent) => handleMainPageSectionClick(e, 'configurators')
    },
    { to: '/referenzen', label: 'Referenzen' },
    { 
      to: '/#contact', 
      label: 'Kontakt',
      onClick: (e: React.MouseEvent) => handleMainPageSectionClick(e, 'contact')
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <img
                src="/images/logos/logo_2.png"
                alt="Einetter Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.to.startsWith('/#') ? (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-gray-700 hover:text-primary-600 text-17"
                  onClick={link.onClick || closeMenu}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-primary-600 text-17"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.to.startsWith('/#') ? (
                  <a
                    key={link.to}
                    href={link.to}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-17"
                    onClick={link.onClick || closeMenu}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-3 py-2 text-gray-700 hover:text-primary-600 text-17"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}