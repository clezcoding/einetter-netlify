import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          alt="Modern home"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">Ihr Spezialist für Fenster, Türen, Sonnen- & Insektenschutz</h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Qualität und Handwerkskunst seit 1956</p>
          <Link
            to="/wer-sind-wir"
            className="inline-block bg-white text-primary-700 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-primary-50 transition duration-300"
          >
            Über uns
          </Link>
        </motion.div>
      </div>
    </div>
  );
}