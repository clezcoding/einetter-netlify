import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Bug, Star, Frame, RotateCw, MoveHorizontal, ArrowDownUp, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Lightbox from '../components/Lightbox';

interface Product {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  icon: LucideIcon;
}

interface Products {
  spannrahmen: Product[];
  drehrahmen: Product[];
  schieberahmen: Product[];
  insektenrollo: Product[];
}

interface ProductCardProps {
  product: Product;
}

type TabId = keyof Products;

const products = {
  spannrahmen: [
    {
      title: 'SPANNRAHMEN – EINFACH UND PRAKTISCH',
      subtitle: 'Die ideale Lösung für Fenster',
      description: [
        'Montage ohne Bohren und Schrauben',
        'Einfaches Ein- und Aushängen vom Innenraum',
        'Perfekt für Mietwohnungen',
        'Maßgefertigte Rahmen für optimalen Sitz'
      ],
      images: [
        '/images/insektenschutz/Spannrahmen.webp'
      ],
      icon: Frame
    }
  ],
  drehrahmen: [
    {
      title: 'DREHRAHMEN – FLEXIBEL UND ROBUST',
      subtitle: 'Ideal für Türen und Wintergärten',
      description: [
        'Flexibel einsetzbar für Außentüren',
        'Optional mit Katzenklappe erhältlich',
        'Robust und langlebig',
        'Perfekt für Terrassen und Balkone'
      ],
      images: [
        '/images/insektenschutz/Drehrahmen.jpg'
      ],
      icon: RotateCw
    }
  ],
  schieberahmen: [
    {
      title: 'SCHIEBERAHMEN – PLATZSPAREND UND STABIL',
      subtitle: 'Perfekt für große Öffnungen',
      description: [
        'Ideal für große, mehrflügelige Türen',
        'Platzsparende Konstruktion',
        'Perfekt für Balkone und Wintergärten',
        'Stabile und langlebige Ausführung'
      ],
      images: [
        '/images/insektenschutz/Schieberahmen.webp'
      ],
      icon: MoveHorizontal
    }
  ],
  insektenrollo: [
    {
      title: 'INSEKTENROLLO – SAISONALE FLEXIBILITÄT',
      subtitle: 'Die praktische Saisonlösung',
      description: [
        'Perfekt für saisonalen Einsatz',
        'Sicher im Rollokasten verstaut',
        'Wettergeschützt im Winter',
        'Einfache Bedienung'
      ],
      images: [
        '/images/insektenschutz/Insektenrollo.webp',
        '/images/insektenschutz/Insektenrollo_2.webp'
      ],
      icon: ArrowDownUp
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
            <div className="bg-primary-50 p-3 rounded-lg mr-4">
              <product.icon className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
          </div>
          <h4 className="text-xl text-primary-600 mb-8 font-medium">
            {product.subtitle}
          </h4>
          <ul className="space-y-5">
            {product.description.map((item: string, index: number) => (
              <li key={index} className="flex items-start group">
                <div className="bg-primary-50 p-1 rounded-full mr-3 mt-1">
                  <ChevronRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {product.images.length > 0 && (
          <div className="relative h-[300px] md:h-[400px] bg-gray-50">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
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
            {product.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-primary-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all md:hidden"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-primary-600" />
            </button>
          </div>
        )}
      </div>

      {isLightboxOpen && product.images.length > 0 && (
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

export default function Insektenschutz() {
  const [activeTab, setActiveTab] = useState<TabId>('spannrahmen');
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
    { id: 'spannrahmen', label: 'Spannrahmen', icon: Frame },
    { id: 'drehrahmen', label: 'Drehrahmen', icon: RotateCw },
    { id: 'schieberahmen', label: 'Schieberahmen', icon: MoveHorizontal },
    { id: 'insektenrollo', label: 'Insektenrollo', icon: ArrowDownUp }
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
                  Insektenschutz
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
                  <Bug className="w-12 h-12" />
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
                <span className="font-semibold">Schlotterer Partner</span>
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
                  Mit den hochwertigen Insektenschutzsystemen von <a 
                    href="https://www.schlotterer.com/de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                  >
                    Schlotterer
                  </a> genießen Sie Ihr Zuhause ohne lästige Insekten.
                </p>
                <p className="text-lg text-gray-600">
                  Unsere Lösungen sind für alle Fenster- und Türtypen erhältlich – ob Kunststoff, Alu oder Holz, eckig oder rund. Spezielle Pollenschutzgewebe bieten zusätzlichen Komfort für Allergiker.
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
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <Lightbox
          images={[...products[activeTab].flatMap(p => p.images)]}
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
          initialIndex={selectedImageIndex}
        />
      </motion.div>
    </div>
  );
}