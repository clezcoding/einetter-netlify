import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Trees as Tree, Shield, Palette, Layers, Star, AppWindow as Window, LucideIcon } from 'lucide-react';
import ProductLightbox from '../components/ProductLightbox';

import 'swiper/css';
import 'swiper/css/effect-fade';

interface Product {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  icon: LucideIcon;
}

interface Products {
  holz: Product[];
  holzAlu: Product[];
  kunststoff: Product[];
  kunststoffAlu: Product[];
}

interface ProductCardProps {
  product: Product;
}

const products: Products = {
  holz: [
    {
      title: 'HOLZ HEISST WOHLGEFÜHL',
      subtitle: 'Natürliche Wärme für Ihr Zuhause',
      description: [
        'Natürliche Wärme und charmante Maserungen',
        'Angenehmes Wohnklima durch natürliche Materialien',
        '30 Jahre Gaulhofer-Garantie',
        'Nachhaltige und langlebige Investition'
      ],
      images: [
        '/images/fenster/holz/HolzFenster.jpg',
        '/images/fenster/holz/HolzFenster2.jpg',
        '/images/fenster/holz/HolzFenster_Klein.png'
      ],
      icon: Tree
    }
  ],
  holzAlu: [
    {
      title: 'WOHLFÜHLEN MIT HOLZ',
      subtitle: 'Die perfekte Kombination',
      description: [
        'Warme Optik von Holz im Innenbereich',
        'Robuste Alu-Schale für den Außenbereich',
        'Individuelle Fassadengestaltung möglich',
        '30 Jahre Garantie auf Langlebigkeit'
      ],
      images: [
        '/images/fenster/holz-alu/HolzAluFenster.jpg',
        '/images/fenster/holz-alu/HolzAluFenster2.jpg',
        '/images/fenster/holz-alu/HolzAluFenster_Klein.png'
      ],
      icon: Shield
    }
  ],
  kunststoff: [
    {
      title: 'FLEXIBEL & KOSTENGÜNSTIG',
      subtitle: 'Effiziente Lösung für jeden Bedarf',
      description: [
        'Preisbewusste Wahl für Neubau und Sanierung',
        'Technisch ausgereifte Profile',
        'Große Designvielfalt verfügbar',
        'Maximale Flexibilität bei der Gestaltung'
      ],
      images: [
        '/images/fenster/kunststoff/Kunststofffenster_1.jpg',
        '/images/fenster/kunststoff/Kunststofffenster_2.jpg',
        '/images/fenster/kunststoff/Kunststofffenster_Klein.png'
      ],
      icon: Palette
    }
  ],
  kunststoffAlu: [
    {
      title: 'VIELSEITIG & TOP-PREIS-LEISTUNG',
      subtitle: 'Modern und funktional',
      description: [
        'Kosteneffizienz trifft moderne Funktionalität',
        'Vielfältige Gestaltungsmöglichkeiten',
        'Alu-Schalen in verschiedenen Designs',
        'Dekorfolien für individuelle Optik'
      ],
      images: [
        '/images/fenster/kunststoff-alu/KunststoffAluFenster_1.jpg',
        '/images/fenster/kunststoff-alu/KunststoffAluFenster_2.jpg',
        '/images/fenster/kunststoff-alu/KunststoffAluFenster_Klein.png'
      ],
      icon: Layers
    }
  ]
};

function ProductCard({ product }: ProductCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Reset states when image changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [currentImageIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (isLightboxOpen) return; // Don't auto-advance when lightbox is open
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [product.images.length, isLightboxOpen]);

  const handleImageClick = () => {
    setIsLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
    >
      <div className="grid md:grid-cols-2 gap-8">
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
        <div className="relative h-[300px] md:h-[400px] bg-gray-50">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div 
            className="relative h-full w-full overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
            onClick={handleImageClick}
          >
            <img
              key={currentImageIndex}
              src={product.images[currentImageIndex]}
              alt={`${product.title} ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ objectPosition: 'center center' }}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                console.error(`Failed to load image: ${product.images[currentImageIndex]}`);
                setImageError(true);
                setImageLoaded(true);
              }}
            />
          </div>
          {imageError && (
            <div className="absolute bottom-0 left-0 right-0 bg-red-50 text-red-600 text-sm p-2 text-center">
              Failed to load image. Please check your connection.
            </div>
          )}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all md:hidden"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-primary-600" />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <ProductLightbox
          images={product.images}
          currentIndex={currentImageIndex}
          onClose={handleLightboxClose}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}
    </motion.div>
  );
}

export default function Fenster() {
  const [activeTab, setActiveTab] = useState<keyof Products>('holz');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabs = [
    { id: 'holz', label: 'Holzfenster', icon: Tree },
    { id: 'holzAlu', label: 'Holz-Alu Fenster', icon: Shield },
    { id: 'kunststoff', label: 'Kunststoff Fenster', icon: Palette },
    { id: 'kunststoffAlu', label: 'Kunststoff-Alu Fenster', icon: Layers }
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
                  Qualitätsfenster
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
                  <Window className="w-12 h-12" />
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
                <span className="font-semibold">Gaulhofer-Fachpartner</span>
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
                  Als <a 
                    href="https://www.gaulhofer.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    Gaulhofer Fachpartner
                  </a> bieten wir Qualitätsfenster aus Holz, Alu, Holz-Alu, Kunststoff und Kunststoff-Alu an.
                </p>
                <p className="text-lg text-gray-600">
                  Von der Beratung bis zur fachgerechten Montage – wir begleiten Sie bei Neubau und Sanierung. Kontaktieren Sie uns für individuelle Lösungen!
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
                onClick={() => setActiveTab(tab.id as keyof Products)}
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
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}