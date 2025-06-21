import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Configurators() {
  const configurators = [
    {
      title: 'LEHA Designer',
      description: 'Gestalten Sie Ihren individuellen Sonnenschutz in unserem 3D-Konfigurator. Visualisieren Sie verschiedene Designs und finden Sie die perfekte Lösung für Ihr Zuhause.',
      url: 'https://leha.at/designer/',
      image: 'https://i.ibb.co/cK7dj0km/LEHA.png',
    },
    {
      title: 'DOORS Designer',
      description: 'Entwerfen Sie Ihre maßgeschneiderte Haustür mit unserem interaktiven 3D-Tool. Wählen Sie aus vielfältigen Designs, Materialien und Ausstattungsoptionen.',
      url: 'https://configurator.varialis.net/?bpi=BC27B19A-C106-404F-96C2-60B7AC4C9FD0',
      image: 'https://i.ibb.co/B2z3dYZT/doors.png',
    },
    {
      title: 'Inotherm Designer',
      description: 'Konfigurieren Sie Ihre Premium-Aluminiumtür nach Ihren Wünschen. Erleben Sie modernste Technik und zeitloses Design in unserem 3D-Konfigurator.',
      url: 'https://doordesigner.inotherm-tuer.de/configurator/?partnerCode=48087',
      image: 'https://i.ibb.co/dsYWqznr/INOTHERM.png',
    },
  ];

  return (
    <div id="configurators" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Online Konfiguratoren</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gestalten Sie Ihre individuellen Lösungen mit den 3D-Konfiguratoren unserer Partner
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {configurators.map((config) => (
            <motion.a
              key={config.title}
              href={config.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 bg-white flex items-center justify-center h-48">
                <img 
                  src={config.image} 
                  alt={`${config.title} - 3D Konfigurator`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white border-t border-gray-100 flex-grow">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{config.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{config.description}</p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors mt-auto">
                  Jetzt konfigurieren
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}