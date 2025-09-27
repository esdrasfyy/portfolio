import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlowingEffectComponent } from './glowing-effect.component';

export const BackToTopButton = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece quando a home sair da tela (mínimo 505px)
      if (window.pageYOffset > 505) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 50
          }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.5, 
            y: 50
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 max-md:w-10 max-md:h-10 rounded-full bg-black border border-white font-semibold flex items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden hover:w-36 hover:max-md:w-28 hover:rounded-[50px] hover:bg-white hover:text-black hover:border-black group"
        >
          <GlowingEffectComponent 
            spread={30} 
            glow={true} 
            disabled={false} 
            proximity={150} 
            inactiveZone={0.01} 
            borderWidth={1}
            variant="white"
          />
          
          <svg 
            className="w-3 max-md:w-2.5 transition-all duration-300 group-hover:-translate-y-[200%] text-white group-hover:text-black" 
            viewBox="0 0 384 512"
            fill="currentColor"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
          
          <span className="absolute -bottom-5 text-white text-xs max-md:text-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-3 group-hover:text-[13px] group-hover:max-md:text-[11px] group-hover:text-black whitespace-nowrap">
            {t('backToTop')}
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
