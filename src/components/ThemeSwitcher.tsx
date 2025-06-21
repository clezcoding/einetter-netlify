import React from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      aria-label={t('common.accessibility.darkMode')}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </motion.button>
  );
} 