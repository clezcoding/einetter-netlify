import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const handleAddressClick = () => {
    window.open('https://maps.app.goo.gl/hTY5GVmyCRcHwLCV8', '_blank');
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">Kontakt</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.a
            href="tel:+434715391"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-primary-50 rounded-xl cursor-pointer transition-colors hover:bg-primary-100"
          >
            <Phone className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Büro</h3>
            <p className="text-gray-600">+43 4715391</p>
          </motion.a>
          <motion.a
            href="tel:+436607355966"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-primary-50 rounded-xl cursor-pointer transition-colors hover:bg-primary-100"
          >
            <Phone className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Elias Einetter</h3>
            <p className="text-gray-600">+43 660 7355966</p>
          </motion.a>
          <motion.a
            href="tel:+436606093930"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-primary-50 rounded-xl cursor-pointer transition-colors hover:bg-primary-100"
          >
            <Phone className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tobias Einetter</h3>
            <p className="text-gray-600">+43 660 6093930</p>
          </motion.a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.a
            href="mailto:office@einetter.at"
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-primary-50 rounded-xl cursor-pointer transition-colors hover:bg-primary-100"
          >
            <Mail className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">E-Mail</h3>
            <p className="text-gray-600">office@einetter.at</p>
          </motion.a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={handleAddressClick}
            className="flex flex-col items-center p-6 bg-primary-50 rounded-xl cursor-pointer transition-colors hover:bg-primary-100"
          >
            <MapPin className="w-8 h-8 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adresse</h3>
            <p className="text-gray-600 text-center">Kötschach 221<br />9640 Kötschach-Mauthen</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}