import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, Home, Award, Star } from 'lucide-react';

interface GalleryProps {
  title: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset to first image when gallery is opened
  React.useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsZoomed(false);
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-lg max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-primary-900 text-center w-full">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 absolute right-4"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div 
              className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={images[currentImageIndex]}
                alt={`${title} Referenz ${currentImageIndex + 1}`}
                className={`w-full h-full object-contain transition-transform duration-300 ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Bild {currentImageIndex + 1} von {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Referenzen() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const galleryButtons = [
    {
      title: "Fenster",
      images: [
        '/images/referenzen/fenster/IMG_20230904_112628.jpg',
        '/images/referenzen/fenster/DSCPDC_0000_BURST20200311140326862.JPG',
        '/images/referenzen/fenster/DSC_0119_1 (1).JPG',
        '/images/referenzen/fenster/DSC_0144_1 (1).JPG',
        '/images/referenzen/fenster/DSC_1102 (1).JPG',
        '/images/referenzen/fenster/DSC_1105 (1).JPG',
        '/images/referenzen/fenster/DSC_1341-1655264762418.JPG',
        '/images/referenzen/fenster/DSC_1649 (1).JPG',
        '/images/referenzen/fenster/DSC_1657-1655264614973.JPG',
        '/images/referenzen/fenster/DSC_1691.JPG',
        '/images/referenzen/fenster/DSC_1823 (1).JPG',
        '/images/referenzen/fenster/DSC_1959 (1).JPG',
        '/images/referenzen/fenster/DSC_1961 (1).JPG',
        '/images/referenzen/fenster/DSC_2330-1655264687818.JPG',
        '/images/referenzen/fenster/DSC_2567-1655264545234.JPG',
        '/images/referenzen/fenster/DSC_2855 (1).JPG',
        '/images/referenzen/fenster/DSC_2949 (1).JPG',
        '/images/referenzen/fenster/DSC_2961 (1).JPG',
        '/images/referenzen/fenster/DSC_3141 (1).JPG',
        '/images/referenzen/fenster/DSC_3142 (1).JPG',
        '/images/referenzen/fenster/DSC_3181 (1).JPG',
        '/images/referenzen/fenster/DSC_3183 (1).JPG',
        '/images/referenzen/fenster/DSC_3273 (1).JPG',
        '/images/referenzen/fenster/IMG-20230613-WA0003~2.jpg',
        '/images/referenzen/fenster/IMG-20230828-WA0005~2.jpg',
        '/images/referenzen/fenster/IMG-20231220-WA0007~2.jpg',
        '/images/referenzen/fenster/IMG-20240403-WA0009~2.jpg',
        '/images/referenzen/fenster/IMG-20240730-WA0005.jpeg',
        '/images/referenzen/fenster/IMG_20201203_170838.jpg',
        '/images/referenzen/fenster/IMG_20210525_175052.jpg',
        '/images/referenzen/fenster/IMG_20210609_160812.jpg',
        '/images/referenzen/fenster/IMG_20210709_111012.jpg',
        '/images/referenzen/fenster/IMG_20210920_162731.jpg',
        '/images/referenzen/fenster/IMG_20210923_181223.jpg',
        '/images/referenzen/fenster/IMG_20211109_100221.jpg',
        '/images/referenzen/fenster/IMG_20211109_100223.jpg',
        '/images/referenzen/fenster/IMG_20211109_161220.jpg',
        '/images/referenzen/fenster/IMG_20211115_153154.jpg',
        '/images/referenzen/fenster/IMG_20211222_121839.jpg',
        '/images/referenzen/fenster/IMG_20220704_162807.jpg',
        '/images/referenzen/fenster/IMG_20220708_150549.jpg',
        '/images/referenzen/fenster/IMG_20220805_175417.jpg',
        '/images/referenzen/fenster/IMG_20220805_175431.jpg',
        '/images/referenzen/fenster/IMG_20220908_142024.jpg',
        '/images/referenzen/fenster/IMG_20220908_142444.jpg',
        '/images/referenzen/fenster/IMG_20221004_162539.jpg',
        '/images/referenzen/fenster/IMG_20221018_161352.jpg',
        '/images/referenzen/fenster/IMG_20230325_103601.jpg',
        '/images/referenzen/fenster/IMG_20230414_200739.jpg',
        '/images/referenzen/fenster/IMG_20230418_171904.jpg',
        '/images/referenzen/fenster/IMG_20230426_143400.jpg',
        '/images/referenzen/fenster/IMG_20230426_170326.jpg',
        '/images/referenzen/fenster/IMG_20230426_170332.jpg',
        '/images/referenzen/fenster/IMG_20230427_164954.jpg',
        '/images/referenzen/fenster/IMG_20230427_165505.jpg',
        '/images/referenzen/fenster/IMG_20230525_133539.jpg',
        '/images/referenzen/fenster/IMG_20230525_133652.jpg',
        '/images/referenzen/fenster/IMG_20230726_123256.jpg',
        '/images/referenzen/fenster/IMG_20230904_112627.jpg',
        '/images/referenzen/fenster/IMG_20231023_165952.jpg',
        '/images/referenzen/fenster/IMG_20231128_093816.jpg',
        '/images/referenzen/fenster/IMG_20231128_093906.jpg',
        '/images/referenzen/fenster/IMG_20231213_130723.jpg',
        '/images/referenzen/fenster/IMG_20240703_101827.jpg',
        '/images/referenzen/fenster/IMG_20241107_143015.jpg',
        '/images/referenzen/fenster/IMG_20241108_145843.jpg',
        '/images/referenzen/fenster/IMG_20241113_093105.jpg',
        '/images/referenzen/fenster/IMG_20241113_093114.jpg',
        '/images/referenzen/fenster/IMG_20241113_093127.jpg',
        '/images/referenzen/fenster/IMG_20250403_153229.jpg',
        '/images/referenzen/fenster/IMG_20250403_153318.jpg',
        '/images/referenzen/fenster/IMG_20201124_121226.jpg',
        '/images/referenzen/fenster/DSC_0098 (1).JPG',
        '/images/referenzen/fenster/DSC_1965 (1).JPG',
        '/images/referenzen/fenster/DSC_2953 (1).JPG',
        '/images/referenzen/fenster/DSC_3390 (1).JPG',
        '/images/referenzen/fenster/IMG_20231219_160641.jpg'
      ],
      previewImage: '/images/referenzen/fenster/IMG_20230904_112628.jpg',
      description: "Moderne Fensterlösungen für optimales Raumklima und Energieeffizienz",
    },
    {
      title: "Haustüren",
      images: [
        '/images/referenzen/tueren/IMG_20221010_124934.jpg',
        '/images/referenzen/tueren/DSC_0118_1 (1).JPG',
        '/images/referenzen/tueren/DSC_0121 (1).JPG',
        '/images/referenzen/tueren/DSC_1677 (1).JPG',
        '/images/referenzen/tueren/DSC_1822 (1).JPG',
        '/images/referenzen/tueren/DSC_1963 (1).JPG',
        '/images/referenzen/tueren/DSC_2065 (1).JPG',
        '/images/referenzen/tueren/DSC_2068 (1).JPG',
        '/images/referenzen/tueren/DSC_2120 (1).JPG',
        '/images/referenzen/tueren/DSC_2240_(1) (1).JPG',
        '/images/referenzen/tueren/DSC_2890.JPG',
        '/images/referenzen/tueren/DSC_2893 (1).JPG',
        '/images/referenzen/tueren/DSC_2953 (1).JPG',
        '/images/referenzen/tueren/DSC_2954 (1).JPG',
        '/images/referenzen/tueren/DSC_3219 (1).JPG',
        '/images/referenzen/tueren/DSC_3220 (1).JPG',
        '/images/referenzen/tueren/DSC_3389 (1).JPG',
        '/images/referenzen/tueren/DSC_3391.JPG',
        '/images/referenzen/tueren/IMG-20220330-WA0003~2.jpg',
        '/images/referenzen/tueren/IMG-20220330-WA0006~2.jpg',
        '/images/referenzen/tueren/IMG-20231119-WA0002~2.jpg',
        '/images/referenzen/tueren/IMG-20240909-WA0005~2.jpg',
        '/images/referenzen/tueren/IMG-20240909-WA0006.jpg',
        '/images/referenzen/tueren/IMG-20240909-WA0011.jpg',
        '/images/referenzen/tueren/IMG-20250122-WA0000.jpg',
        '/images/referenzen/tueren/IMG-20250122-WA0001.jpg',
        '/images/referenzen/tueren/IMG-20250307-WA0001.jpg',
        '/images/referenzen/tueren/IMG_20210520_194247.jpg',
        '/images/referenzen/tueren/IMG_20210525_132240.jpg',
        '/images/referenzen/tueren/IMG_20210611_135045.jpg',
        '/images/referenzen/tueren/IMG_20220706_170139.jpg',
        '/images/referenzen/tueren/IMG_20220920_154246.jpg',
        '/images/referenzen/tueren/IMG_20221010_124930.jpg',
        '/images/referenzen/tueren/IMG_20221125_142445.jpg',
        '/images/referenzen/tueren/IMG_20221207_155439.jpg',
        '/images/referenzen/tueren/IMG_20230303_091910.jpg',
        '/images/referenzen/tueren/IMG_20230303_091950.jpg',
        '/images/referenzen/tueren/IMG_20230303_111633.jpg',
        '/images/referenzen/tueren/IMG_20230303_114747.jpg',
        '/images/referenzen/tueren/IMG_20230303_114822.jpg',
        '/images/referenzen/tueren/IMG_20230303_114839.jpg',
        '/images/referenzen/tueren/IMG_20230303_114852.jpg',
        '/images/referenzen/tueren/IMG_20230303_130512.jpg',
        '/images/referenzen/tueren/IMG_20230414_200746.jpg',
        '/images/referenzen/tueren/IMG_20230907_140919.jpg',
        '/images/referenzen/tueren/IMG_20230919_155843.jpg',
        '/images/referenzen/tueren/IMG_20231012_094309.jpg',
        '/images/referenzen/tueren/IMG_20231012_094310.jpg',
        '/images/referenzen/tueren/IMG_20231012_154507.jpg',
        '/images/referenzen/tueren/IMG_20231025_123958.jpg',
        '/images/referenzen/tueren/IMG_20240131_162928.jpg',
        '/images/referenzen/tueren/IMG_20240417_162546.jpg',
        '/images/referenzen/tueren/IMG_20240528_173819.jpg',
        '/images/referenzen/tueren/IMG_20240606_145755.jpg',
        '/images/referenzen/tueren/IMG_20240625_163345.jpg',
        '/images/referenzen/tueren/IMG_20240709_105652.jpg',
        '/images/referenzen/tueren/IMG_20240709_133504.jpg',
        '/images/referenzen/tueren/IMG_20240709_133521.jpg',
        '/images/referenzen/tueren/IMG_20240801_120911.jpg',
        '/images/referenzen/tueren/IMG_20240909_160119.jpg',
        '/images/referenzen/tueren/IMG_20240918_181334.jpg',
        '/images/referenzen/tueren/IMG_20240925_153616_1.jpg',
        '/images/referenzen/tueren/IMG_20240926_172148.jpg',
        '/images/referenzen/tueren/IMG_20241008_113108.jpg',
        '/images/referenzen/tueren/IMG_20241029_161225.jpg',
        '/images/referenzen/tueren/IMG_20241106_162016.jpg',
        '/images/referenzen/tueren/IMG_20250312_114922.jpg',
        '/images/referenzen/tueren/IMG_20250408_142250.jpg',
        '/images/referenzen/tueren/DSC_1678 (1).JPG',
        '/images/referenzen/tueren/DSC_2241_(1) (1).JPG',
        '/images/referenzen/tueren/DSC_2855 (1).JPG',
        '/images/referenzen/tueren/DSC_2887 (1).JPG',
        '/images/referenzen/tueren/DSC_3301 (1).JPG',
        '/images/referenzen/tueren/IMG-20240909-WA0009~2.jpg',
        '/images/referenzen/tueren/IMG-20240909-WA0012.jpg',
        '/images/referenzen/tueren/IMG_20210611_135047.jpg',
        '/images/referenzen/tueren/IMG_20210709_111012.jpg',
        '/images/referenzen/tueren/IMG_20211115_153154.jpg',
        '/images/referenzen/tueren/IMG_20211215_155007.jpg'
      ],
      previewImage: '/images/referenzen/tueren/IMG_20221010_124934.jpg',
      description: "Individuelle Haustüren - Sicherheit und Ästhetik in Perfektion",
    },
    {
      title: "Sonnenschutz",
      images: [
        '/images/referenzen/sonnenschutz/IMG-20221201-WA0001~2.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230624_122640.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230624_122801.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230721_114658.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230721_114709.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230906_154202.jpg',
        '/images/referenzen/sonnenschutz/IMG_20230906_154237.jpg',
        '/images/referenzen/sonnenschutz/IMG_20250226_105331.jpg',
        '/images/referenzen/sonnenschutz/IMG_20250407_140439.jpg',
        '/images/referenzen/sonnenschutz/20210701_191756.jpg',
        '/images/referenzen/sonnenschutz/IMG20221016115354.jpg',
        '/images/referenzen/sonnenschutz/IMG20230321150253.jpg',
        '/images/referenzen/sonnenschutz/IMG20230322110927.jpg',
        '/images/referenzen/sonnenschutz/IMG20230912102613.jpg',
        '/images/referenzen/sonnenschutz/IMG20230916193107.jpg',
        '/images/referenzen/sonnenschutz/IMG20240313160140.jpg',
        '/images/referenzen/sonnenschutz/IMG20240418114543.jpg',
        '/images/referenzen/sonnenschutz/IMG20240422164314.jpg',
        '/images/referenzen/sonnenschutz/IMG_20211222_121509.jpg',
        '/images/referenzen/sonnenschutz/IMG_20211222_121519.jpg'
      ],
      previewImage: '/images/referenzen/sonnenschutz/IMG-20221201-WA0001~2.jpg',
      description: "Intelligente Sonnenschutzsysteme für mehr Wohnkomfort",
    },
    {
      title: "Tischlerei",
      images: [
        '/images/referenzen/tischlerei/DSCPDC_0003_BURST20200204133317131_COVER.JPG',
        '/images/referenzen/tischlerei/DSC_0131_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0136_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0138_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0139_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0143_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0145 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0148 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0149_1 (1).JPG',
        '/images/referenzen/tischlerei/DSC_0779 (1).JPG',
        '/images/referenzen/tischlerei/DSC_1276 (1).JPG',
        '/images/referenzen/tischlerei/DSC_1277 (1).JPG',
        '/images/referenzen/tischlerei/DSC_2225.JPG',
        '/images/referenzen/tischlerei/DSC_2247 (1).JPG',
        '/images/referenzen/tischlerei/IMG-20220330-WA0004~2.jpg',
        '/images/referenzen/tischlerei/IMG-20230227-WA0000~2.jpg',
        '/images/referenzen/tischlerei/IMG-20230227-WA0001~2.jpg',
        '/images/referenzen/tischlerei/IMG-20230712-WA0000~2.jpg',
        '/images/referenzen/tischlerei/IMG-20230926-WA0002~2.jpg',
        '/images/referenzen/tischlerei/IMG-20230926-WA0003~2.jpg',
        '/images/referenzen/tischlerei/IMG-20240730-WA0007.jpeg',
        '/images/referenzen/tischlerei/IMG-20250318-WA0008.jpg',
        '/images/referenzen/tischlerei/IMG_20210311_114009.jpg',
        '/images/referenzen/tischlerei/IMG_20230503_141558.jpg',
        '/images/referenzen/tischlerei/IMG_20230706_163756.jpg',
        '/images/referenzen/tischlerei/IMG_20231023_165953.jpg',
        '/images/referenzen/tischlerei/IMG_20231213_131713.jpg',
        '/images/referenzen/tischlerei/IMG_20231219_160641.jpg',
        '/images/referenzen/tischlerei/IMG_20231219_160648.jpg',
        '/images/referenzen/tischlerei/IMG_20231219_160656.jpg',
        '/images/referenzen/tischlerei/IMG_20240731_161351.jpg',
        '/images/referenzen/tischlerei/IMG_20240731_161516.jpg'
      ],
      previewImage: '/images/referenzen/tischlerei/IMG_20240731_161516.jpg',
      description: "Individuelle Möbel und Einbauten Handwerkskunst auf höchstem Niveau",
    }
  ];

  const stats = [
    { icon: Building2, number: "Zahlreiche", label: "Fertiggestellte Projekte" },
    { icon: Home, number: "Viele", label: "Zufriedene Kunden" },
    { icon: Award, number: "69", label: "Jahre Erfahrung" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Unsere besten Arbeiten im Überblick</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto mb-16">
          {galleryButtons.map((gallery) => (
            <motion.button
              key={gallery.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGallery(gallery.title.toLowerCase())}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full"
            >
              <div className="aspect-video bg-gray-100 rounded-t-xl overflow-hidden flex-shrink-0">
                <img
                  src={gallery.previewImage}
                  alt={gallery.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-2">{gallery.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{gallery.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl p-8 mb-16 relative overflow-hidden shadow-lg"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-primary-500"></div>
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Unsere Referenzen sprechen für sich</h3>
          <p className="text-gray-700 mb-4">
            Jedes Projekt ist einzigartig und spiegelt unsere Leidenschaft für Qualität und Präzision wider. 
            Von modernen Wohnhäusern bis hin zu gewerblichen Objekten - wir setzen Maßstäbe in Sachen 
            Handwerkskunst und Kundenzufriedenheit.
          </p>
          <p className="text-gray-700">
            In unserer Galerie finden Sie eine Auswahl unserer erfolgreichsten Projekte. 
            Jedes Bild erzählt eine Geschichte von Herausforderungen, die wir gemeistert haben, 
            und von Kunden, die mit unseren Lösungen zufrieden sind.
          </p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -right-4 -top-4 w-12 h-12 text-primary-200 transform rotate-12"
          >
            <Star className="w-full h-full" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {activeGallery && (
        <Gallery
          title={activeGallery.charAt(0).toUpperCase() + activeGallery.slice(1)}
          images={galleryButtons.find(g => g.title.toLowerCase() === activeGallery)?.images || []}
          isOpen={!!activeGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </div>
  );
} 