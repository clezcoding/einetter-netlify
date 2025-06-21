import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, AppWindow as Window, DoorOpen, Bug, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: true
  });

  const products = [
    { icon: Window, title: 'Fenster', description: 'Energieeffiziente Fenster in höchster Qualität', link: '/fenster' },
    { icon: DoorOpen, title: 'Türen', description: 'Sichere und stilvolle Eingangslösungen', link: '/tueren' },
    { icon: Sun, title: 'Sonnenschutz', description: 'Moderne Beschattungslösungen für Ihr Zuhause', link: '/sonnenschutz' },
    { icon: Bug, title: 'Insektenschutz', description: 'Effektiver Schutz vor unerwünschten Gästen', link: '/insektenschutz' },
    { icon: Hammer, title: 'Tischlerei', description: 'Hochwertige Möbel und Einrichtungslösungen', link: '/tischlerei' }
  ];

  return (
    <div id="products" className="py-16 md:py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-8 md:mb-16">Unsere Produkte</h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {products.map((product, index) => (
            <Link
              key={product.title}
              to={product.link}
              className="relative group h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="h-full"
              >
                <div className="relative bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div>
                    <product.icon className="w-10 h-10 md:w-12 md:h-12 text-primary-600 mb-3 md:mb-4" />
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{product.description}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
                      Mehr erfahren
                      <svg 
                        className="w-4 h-4 ml-2" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}