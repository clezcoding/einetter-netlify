import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { 
    code: 'en', 
    name: 'English',
    flag: '🇬🇧'
  },
  { 
    code: 'nl', 
    name: 'Nederlands',
    flag: '🇳🇱'
  },
  { 
    code: 'it', 
    name: 'Italiano',
    flag: '🇮🇹'
  }
];

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 rounded-lg bg-white text-primary-600 shadow-sm hover:bg-gray-50 transition-colors flex items-center space-x-2"
        aria-label={t('common.accessibility.language')}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <ChevronDown className="w-4 h-4 opacity-60" />
      </motion.button>
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        <div className="py-1" role="menu" aria-orientation="vertical">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => i18n.changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 text-sm flex items-center space-x-3 ${
                i18n.language === language.code
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              role="menuitem"
            >
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
              {i18n.language === language.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-2 h-2 rounded-full bg-primary-600 ml-auto"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 