import { useTranslation } from "react-i18next";
import { usePreferences } from "../../contexts/preferences.context";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const { lang, toggleLang } = usePreferences();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  const currentLanguage = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className="relative group">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-white">{currentLanguage.name}</span>
        <motion.svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <motion.div
        className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl overflow-hidden z-50"
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 0, y: -10, scale: 0.95 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="py-2">
          {languages.map((language) => (
            <motion.button
              key={language.code}
              onClick={() => toggleLang(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100/50 transition-colors duration-200 ${
                lang === language.code ? 'bg-gray-100/50 text-gray-900' : 'text-gray-700'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
              {lang === language.code && (
                <motion.div
                  className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
