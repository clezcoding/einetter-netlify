import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Star, Hammer, Sofa, BookOpen, Home } from 'lucide-react';

interface Product {
  title: string;
  subtitle: string;
  description: string[];
  icon: any;
}

interface Products {
  moebel: Product[];
  boeden: Product[];
}

type TabId = keyof Products;

const products: Products = {
  moebel: [
    {
      title: 'MASSIVHOLZMÖBEL',
      subtitle: 'Zeitlose Eleganz aus Naturmaterialien',
      description: [
        'Individuell nach Ihren Wünschen gefertigt',
        'Hochwertige Massivhölzer aus nachhaltiger Forstwirtschaft',
        'Traditionelle Handwerkskunst trifft modernes Design',
        'Langlebige Qualität für Generationen'
      ],
      icon: Sofa
    }
  ],
  boeden: [
    {
      title: 'HOLZBÖDEN',
      subtitle: 'Natürliche Schönheit unter Ihren Füßen',
      description: [
        'Hochwertige Massivholzböden',
        'Professionelle Verlegung und Renovierung',
        'Langlebige Oberflächenbehandlung',
        'Individuelle Gestaltungsmöglichkeiten'
      ],
      icon: Home
    }
  ]
};

function ProductCard({ product }: { product: Product }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
    >
      <div className="p-8">
        <div className="flex items-center mb-4">
          <product.icon className="w-8 h-8 text-primary-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
        </div>
        <h4 className="text-xl text-primary-600 mb-4">{product.subtitle}</h4>
        <ul className="space-y-3">
          {product.description.map((item, index) => (
            <li key={index} className="flex items-start">
              <ChevronRight className="w-5 h-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Tischlerei() {
  const [activeTab, setActiveTab] = useState<TabId>('moebel');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'moebel' as TabId, label: 'Möbel', icon: Sofa },
    { id: 'boeden' as TabId, label: 'Böden', icon: Home }
  ];

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              <div className="relative">
                <h1 className="text-5xl font-bold text-primary-900 relative z-10">
                  Tischlerei
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200 -z-10"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -right-12 -top-6 text-primary-200"
                >
                  <Hammer className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center text-primary-600 mb-8"
            >
              <Star className="w-6 h-6 mr-2" />
              <span className="font-semibold">Qualität seit 1956</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-8">
                  {products[activeTab].map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 