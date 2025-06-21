import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryProps {
  title: string;
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ title, images, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset to first image when gallery is opened
  React.useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
              <h3 className="text-2xl font-bold text-primary-900">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={images[currentImageIndex]}
                alt={`${title} Referenz ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
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

export default function References() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);

  const galleryButtons = [
    {
      title: "Fenster",
      images: [
        '/images/referenzen/fenster/IMG_20230904_112628.jpg',
        '/images/referenzen/fenster/DSC_1965 (1).JPG',
        '/images/referenzen/fenster/DSC_2953 (1).JPG',
        '/images/referenzen/fenster/DSC_3141 (1).JPG',
        '/images/referenzen/fenster/DSC_3390 (1).JPG',
        '/images/referenzen/fenster/IMG-20230613-WA0003~2.jpg',
        '/images/referenzen/fenster/IMG_20201124_121226.jpg',
        '/images/referenzen/fenster/IMG_20210525_175052.jpg',
        '/images/referenzen/fenster/IMG_20210920_162731.jpg',
        '/images/referenzen/fenster/IMG_20211109_100221.jpg',
        '/images/referenzen/fenster/IMG_20221018_161352.jpg',
        '/images/referenzen/fenster/IMG_20230426_143400.jpg',
        '/images/referenzen/fenster/IMG_20230427_164954.jpg',
        '/images/referenzen/fenster/DSC_0098 (1).JPG',
        '/images/referenzen/fenster/IMG_20231219_160641.jpg'
      ],
      previewImage: '/images/referenzen/fenster/IMG_20230904_112628.jpg',
      description: "Entdecken Sie unsere Fenster-Referenzen",
    },
    {
      title: "Türen",
      images: [
        '/images/referenzen/tueren/DSC_1678 (1).JPG',
        '/images/referenzen/tueren/DSC_2241_(1) (1).JPG',
        '/images/referenzen/tueren/DSC_2855 (1).JPG',
        '/images/referenzen/tueren/DSC_2887 (1).JPG',
        '/images/referenzen/tueren/DSC_2893 (1).JPG',
        '/images/referenzen/tueren/DSC_3220 (1).JPG',
        '/images/referenzen/tueren/DSC_3301 (1).JPG',
        '/images/referenzen/tueren/DSC_3389 (1).JPG',
        '/images/referenzen/tueren/IMG-20240909-WA0009~2.jpg',
        '/images/referenzen/tueren/IMG-20240909-WA0012.jpg',
        '/images/referenzen/tueren/IMG-20250307-WA0001.jpg',
        '/images/referenzen/tueren/IMG_20210525_132240.jpg',
        '/images/referenzen/tueren/IMG_20210611_135047.jpg',
        '/images/referenzen/tueren/IMG_20210709_111012.jpg',
        '/images/referenzen/tueren/IMG_20211115_153154.jpg',
        '/images/referenzen/tueren/IMG_20211215_155007.jpg',
        '/images/referenzen/tueren/IMG_20220706_170139.jpg',
        '/images/referenzen/tueren/IMG_20221010_124934.jpg'
      ],
      previewImage: '/images/referenzen/tueren/DSC_1678 (1).JPG',
      description: "Entdecken Sie unsere Türen-Referenzen",
    },
    {
      title: "Sonnenschutz",
      images: [
        '/images/referenzen/sonnenschutz/IMG20221016115354.jpg',
        '/images/referenzen/sonnenschutz/IMG_20211222_121519.jpg',
        '/images/referenzen/sonnenschutz/20210701_191756.jpg',
        '/images/referenzen/sonnenschutz/IMG_20211222_121509.jpg',
        '/images/referenzen/sonnenschutz/IMG20230321150253.jpg',
        '/images/referenzen/sonnenschutz/IMG20230322110927.jpg',
        '/images/referenzen/sonnenschutz/IMG20230912102613.jpg',
        '/images/referenzen/sonnenschutz/IMG20230916193107.jpg',
        '/images/referenzen/sonnenschutz/IMG20240313160140.jpg',
        '/images/referenzen/sonnenschutz/IMG20240418114543.jpg',
        '/images/referenzen/sonnenschutz/IMG20240422164314.jpg'
      ],
      previewImage: '/images/referenzen/sonnenschutz/IMG20221016115354.jpg',
      description: "Entdecken Sie unsere Sonnenschutz-Referenzen",
    }
  ];

  return (
    <div id="references" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Unsere besten Arbeiten im Überblick</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {galleryButtons.map((gallery) => (
            <motion.button
              key={gallery.title}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveGallery(gallery.title.toLowerCase())}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-100">
                <img
                  src={gallery.previewImage}
                  alt={gallery.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{gallery.title}</h3>
                <p className="text-gray-600">{gallery.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
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