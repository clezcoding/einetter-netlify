import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true
    });
    localStorage.setItem('cookiesAccepted', 'all');
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookiesAccepted', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const declineAll = () => {
    setPreferences({
      essential: false,
      analytics: false,
      marketing: false
    });
    localStorage.setItem('cookiesAccepted', 'none');
    setIsVisible(false);
  };

  const toggleCategory = (category: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Cookie className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Cookie-Einstellungen</h3>
                    <p className="text-sm text-gray-600">
                      Wir verwenden Cookies, um Ihnen das beste Nutzererlebnis zu bieten. 
                      Durch die weitere Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <ChevronDown className={`w-4 h-4 mr-1 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                  Detaillierte Einstellungen
                </button>
                <div className="flex space-x-4">
                  <button
                    onClick={declineAll}
                    className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                  >
                    Alle ablehnen
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>

              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 pt-4 border-t border-gray-200"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Notwendige Cookies</h4>
                        <p className="text-sm text-gray-600">Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.essential}
                          onChange={() => toggleCategory('essential')}
                          className="sr-only peer"
                          disabled
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:content-[''] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Analyse-Cookies</h4>
                        <p className="text-sm text-gray-600">Diese Cookies helfen uns, die Nutzung der Website zu verstehen und zu verbessern.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => toggleCategory('analytics')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:content-[''] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Marketing-Cookies</h4>
                        <p className="text-sm text-gray-600">Diese Cookies werden verwendet, um Werbung relevanter für Sie zu machen.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => toggleCategory('marketing')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:content-[''] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <Link
                      to="/datenschutz"
                      className="text-sm text-primary-600 hover:text-primary-700 underline"
                    >
                      Datenschutzerklärung
                    </Link>
                    <button
                      onClick={acceptSelected}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                    >
                      Ausgewählte Einstellungen speichern
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}