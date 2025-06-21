import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Sun, Shield, Blinds, Maximize as WindowMaximize, Home, ArrowDown, Umbrella, AlignEndVertical as AlignVertical, Star, LucideIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Lightbox from '../components/Lightbox';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Product {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  icon: LucideIcon;
}

interface Products {
  outside: Product[];
  inside: Product[];
}

interface ProductCardProps {
  product: Product;
  isInnerDoor: boolean;
}

const products: Products = {
  outside: [
    {
      title: 'Raffstores',
      subtitle: 'Perfekte Lichtlenkung für Ihr Zuhause',
      description: [
        'Stufenlos regulierbare Lamellen für präzise Lichtsteuerung',
        'Optimaler Hitze- und Blendschutz durch innovative Technologie',
        'Hochwertige Aluminium-Lamellen für maximale Langlebigkeit',
        'Energieeffizienz durch gezielte Lichtlenkung und Wärmedämmung'
      ],
      images: [
        '/images/sonnenschutz/aussen/raffstores/raffstores-1.jpg',
        '/images/sonnenschutz/aussen/raffstores/raffstores-2.jpg',
        '/images/sonnenschutz/aussen/raffstores/raffstores-3.jpg'
      ],
      icon: Blinds
    },
    {
      title: 'Rollläden',
      subtitle: 'Maximaler Schutz und Komfort',
      description: [
        'Effektive Verdunkelung für optimalen Schlafkomfort',
        'Wärmedämmung reduziert Heiz- und Kühlkosten',
        'Schallschutz für ein ruhiges Wohnambiente',
        'Erhöhte Einbruchhemmung durch robuste Konstruktion'
      ],
      images: [
        '/images/sonnenschutz/aussen/rolllaeden/rolllaeden-1.jpg',
        '/images/sonnenschutz/aussen/rolllaeden/rolllaeden-2.jpg',
        '/images/sonnenschutz/aussen/rolllaeden/rolllaeden-3.jpg'
      ],
      icon: Shield
    },
    {
      title: 'Außenjalousien',
      subtitle: 'Flexibler Sonnenschutz mit Stil',
      description: [
        'Stufenlos regulierbare Lamellen für individuelle Lichtsteuerung',
        'Zeitloses Design für alle Architekturstile',
        'Effektiver Hitzeschutz durch innovative Lamellentechnik',
        'Maßgeschneiderte Lösungen für Ihre spezifischen Bedürfnisse'
      ],
      images: [
        '/images/sonnenschutz/aussen/aussenjalousien/aussenjalousien-1.jpg',
        '/images/sonnenschutz/aussen/aussenjalousien/aussenjalousien-2.jpg',
        '/images/sonnenschutz/aussen/aussenjalousien/aussenjalousien-3.jpg'
      ],
      icon: ArrowDown
    },
    {
      title: 'Senkrechtmarkisen',
      subtitle: 'Transparenter Schutz für Ihre Fenster',
      description: [
        'Reduziert Überhitzung bei voller Transparenz',
        'Individuelle Farbauswahl für perfekte Lichtstimmung',
        'Windstabil und wetterbeständig durch innovative Technik',
        'Ideal für große Fensterflächen und Wintergärten'
      ],
      images: [
        '/images/sonnenschutz/aussen/senkrechtmarkisen/senkrechtmarkisen-1.jpg',
        '/images/sonnenschutz/aussen/senkrechtmarkisen/senkrechtmarkisen-2.jpg',
        '/images/sonnenschutz/aussen/senkrechtmarkisen/senkrechtmarkisen-3.jpg'
      ],
      icon: WindowMaximize
    },
    {
      title: 'Wintergartenmarkisen',
      subtitle: 'Maximaler Komfort für Ihren Wintergarten',
      description: [
        'Effektiver Schutz vor sommerlicher Hitze',
        'Hochwertige Materialien für maximale Langlebigkeit',
        'Maßgeschneiderte Lösungen für jeden Wintergarten',
        'Automatisierbar für maximalen Komfort und Energieeffizienz'
      ],
      images: [
        '/images/sonnenschutz/aussen/wintergartenmarkisen/wintergartenmarkisen-1.jpg',
        '/images/sonnenschutz/aussen/wintergartenmarkisen/wintergartenmarkisen-2.jpg',
        '/images/sonnenschutz/aussen/wintergartenmarkisen/wintergartenmarkisen-3.jpg'
      ],
      icon: Umbrella
    }
  ],
  inside: [
    {
      title: 'Plissee',
      subtitle: 'Der flexible Alleskönner für Ihr Zuhause',
      description: [
        'Maßanfertigung für jede Fensterform und -größe',
        'Unauffällig im aufgezogenen Zustand durch kompaktes Design',
        'Optimale Licht- und Sichtschutzlösung für jeden Raum',
        'Große Auswahl an hochwertigen Stoffen und trendigen Farben'
      ],
      images: [
        '/images/sonnenschutz/innen/plissee/plissee-1.jpg',
        '/images/sonnenschutz/innen/plissee/plissee-2.jpg',
        '/images/sonnenschutz/innen/plissee/plissee-3.jpg',
        '/images/sonnenschutz/innen/plissee/plissee-4.jpg'
      ],
      icon: WindowMaximize
    },
    {
      title: 'Plissee Duette',
      subtitle: 'Doppelte Effizienz für optimales Raumklima',
      description: [
        'Verbesserte Isolierung durch innovative Luftkammertechnik',
        'Sanfte Lichtfilterung für angenehme Raumstimmung',
        'Hervorragende Wärmedämmung im Winter und Sommer',
        'Ideal für große Fensterflächen und energieeffizientes Wohnen'
      ],
      images: [
        '/images/sonnenschutz/innen/plissee-duette/plissee-duette-1.jpg',
        '/images/sonnenschutz/innen/plissee-duette/plissee-duette-2.jpg',
        '/images/sonnenschutz/innen/plissee-duette/plissee-duette-3.jpg',
        '/images/sonnenschutz/innen/plissee-duette/plissee-duette-4.jpg'
      ],
      icon: WindowMaximize
    },
    {
      title: 'Rollos',
      subtitle: 'Der klassische und vielseitige Sonnenschutz',
      description: [
        'Klare Linien und reduziertes Design für moderne Räume',
        'Große Auswahl an hochwertigen Stoffen und trendigen Farben',
        'Perfekt für Standardfenster und große Glasfronten',
        'Einfache Bedienung und wartungsarme Konstruktion'
      ],
      images: [
        '/images/sonnenschutz/innen/rollos/rollos-1.jpg',
        '/images/sonnenschutz/innen/rollos/rollos-2.jpg',
        '/images/sonnenschutz/innen/rollos/rollos-3.jpg'
      ],
      icon: ArrowDown
    },
    {
      title: 'Vertikaljalousien',
      subtitle: 'Elegante Lösung für große Fensterflächen',
      description: [
        'Perfekte Blend- und Sichtschutzregulierung durch drehbare Lamellen',
        'Ideal für Büro- und Arbeitsräume mit hohen Anforderungen',
        'Moderne Optik für zeitgemäße Raumgestaltung',
        'Flexible Anpassung an verschiedene Lichtverhältnisse und Bedürfnisse'
      ],
      images: [
        '/images/sonnenschutz/innen/vertikaljalousien/vertikaljalousien-1.jpg',
        '/images/sonnenschutz/innen/vertikaljalousien/vertikaljalousien-2.jpg',
        '/images/sonnenschutz/innen/vertikaljalousien/vertikaljalousien-3.jpg'
      ],
      icon: AlignVertical
    },
    {
      title: 'Innenjalousien',
      subtitle: 'Klassischer Sonnenschutz mit modernem Touch',
      description: [
        'Präzise Lichtregulierung durch verstellbare Lamellen',
        'Vielfältige Farb- und Materialauswahl für individuelle Gestaltung',
        'Platzsparend und leicht zu reinigen durch innovative Konstruktion',
        'Ideal für alle Wohnbereiche und Anforderungen'
      ],
      images: [
        '/images/sonnenschutz/innen/innenjalousien/innenjalousien-1.jpg',
        '/images/sonnenschutz/innen/innenjalousien/innenjalousien-2.jpg',
        '/images/sonnenschutz/innen/innenjalousien/innenjalousien-3.jpg'
      ],
      icon: Blinds
    }
  ]
};

function ProductCard({ product, isInnerDoor }: ProductCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentImageIndex]);

  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2">
        <div className="p-8">
          <div className="flex items-center mb-6">
            <product.icon className="w-10 h-10 text-primary-600 mr-4" />
            <div>
              <h3 className="text-2xl font-bold text-primary-900">{product.title}</h3>
              <p className="text-lg text-primary-600">{product.subtitle}</p>
            </div>
          </div>
          <ul className="space-y-4">
            {product.description.map((item: string, index: number) => (
              <li key={index} className="flex items-start">
                <Star className="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[400px] bg-gray-50">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div className="relative h-full w-full overflow-hidden cursor-pointer" onClick={handleImageClick}>
            <img
              key={currentImageIndex}
              src={product.images[currentImageIndex]}
              alt={`${product.title} ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.error(`Failed to load image: ${product.images[currentImageIndex]}`);
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </div>
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentImageIndex === index
                      ? 'bg-primary-600 scale-125'
                      : 'bg-white/80 hover:bg-white'
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isLightboxOpen && (
        <Lightbox
          images={product.images}
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          initialIndex={currentImageIndex}
        />
      )}
    </motion.div>
  );
}

export default function Sonnenschutz() {
  const [activeTab, setActiveTab] = useState<'outside' | 'inside'>('outside');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'outside' as const, label: 'Außensonnenschutz', icon: Sun },
    { id: 'inside' as const, label: 'Innensonnenschutz', icon: Blinds }
  ];

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-primary-50 overflow-x-hidden"
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
                  Hochwertiger Sonnenschutz
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
                  <Sun className="w-12 h-12" />
                </motion.div>
              </div>
            </motion.div>
            
            <div className="flex justify-center items-center gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center text-primary-600"
              >
                <Star className="w-6 h-6 mr-2" />
                <span className="font-semibold">LEHA & WO&WO Partner</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Als offizieller Partner von <a 
                    href="https://leha.at/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    LEHA
                  </a> und <a 
                    href="https://www.woundwo.com/de_at" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    WO&WO
                  </a> bieten wir hochwertige Sonnenschutzlösungen an, die höchste Ansprüche an Design, Funktionalität und Energieeffizienz erfüllen.
                </p>
                <p className="text-lg text-gray-600">
                  Unsere Sonnenschutzsysteme sind perfekt für Neubau und Sanierung – kontaktieren Sie uns für individuelle Lösungen!
                </p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -right-4 -top-4 w-12 h-12 text-primary-200 transform rotate-12"
                >
                  <Star className="w-full h-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors mb-2 flex items-center ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-primary-600 hover:bg-primary-50'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div ref={ref} className="space-y-8">
                {products[activeTab].map((product, index) => (
                  <ProductCard 
                    key={product.title} 
                    product={product} 
                    isInnerDoor={activeTab === 'inside'}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <Lightbox
          images={[...products.outside.flatMap(p => p.images)]}
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          initialIndex={selectedImageIndex}
        />
      </motion.div>
    </div>
  );
}