import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Partners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      id: 'gaulhofer',
      name: 'Gaulhofer',
      logo: '/public/images/logos/Gaulhofer.png',
      description: 'Hochwertige Fenster- und Türsysteme aus Holz und Holz-Alu. Über 100 Jahre Erfahrung in Design und Nachhaltigkeit.',
      link: 'https://www.gaulhofer.com/'
    },
    {
      id: 'leha',
      name: 'LEHA',
      logo: 'https://i.ibb.co/cK7dj0km/LEHA.png',
      description: 'Führender Anbieter von Rollläden, Raffstores und Sonnenschutzsystemen. Innovativ und langlebig.',
      link: 'https://leha.at/'
    },
    {
      id: 'woundwo',
      name: 'WO&WO',
      logo: 'https://i.ibb.co/jvjy6Kz1/WoundWo.png',
      description: 'Maßgeschneiderte Lösungen für Fenster, Türen und Fassaden. Modernes Design und höchste Energieeffizienz.',
      link: 'https://www.woundwo.com/de_at'
    },
    {
      id: 'schlotterer',
      name: 'Schlotterer',
      logo: 'https://i.ibb.co/Df51SGy0/schlotterer.png',
      description: 'Spezialist für Insektenschutzsysteme und Sonnenschutzlösungen. Individuell anpassbar und funktional.',
      link: 'https://www.schlotterer.com/de'
    },
    {
      id: 'inotherm',
      name: 'Inotherm',
      logo: 'https://i.ibb.co/dsYWqznr/INOTHERM.png',
      description: 'Hochwertige Aluminium-Türen und -Fenster. Vereinigt Sicherheit, Design und Energieeffizienz.',
      link: 'https://www.inotherm-tuer.de'
    },
    {
      id: 'doors',
      name: 'DOORS',
      logo: 'https://i.ibb.co/B2z3dYZT/doors.png',
      description: 'Innovative Türlösungen aus Holz, Alu und Verbundmaterialien. Perfekt für moderne Wohnkonzepte.',
      link: 'https://www.haustueren-doors.de/'
    },
    {
      id: 'eder',
      name: 'Eder',
      logo: 'https://i.ibb.co/B5HVBStg/Eder.png',
      description: 'Hochwertige Fensterbänke und Zubehör. Qualität und Design aus Österreich.',
      link: 'https://www.eder-fensterbank.at/'
    },
    {
      id: 'nuki',
      name: 'Nuki',
      logo: 'https://i.ibb.co/9kJHH73G/nuki.png',
      description: 'Innovative Smart Lock Lösungen für intelligente Haustüren. Sicherheit und Komfort aus Österreich.',
      link: 'https://nuki.io/de-at'
    }
  ];

  return (
    <div id="partners" className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-6">
            Unsere Partner – Für höchste Qualität und Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir arbeiten mit führenden Herstellern zusammen, um Ihnen Produkte von höchster Qualität und modernster Technologie zu bieten. Unsere Partner stehen für Innovation, Nachhaltigkeit und herausragendes Design.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl relative overflow-hidden h-full"
              >
                <div className="relative aspect-[3/2] mb-4 flex items-center justify-center">
                  <a 
                    href={partner.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-4/5 h-4/5 flex items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}