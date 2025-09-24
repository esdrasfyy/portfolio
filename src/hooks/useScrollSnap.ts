import { useEffect, useRef, useCallback } from 'react';

interface UseScrollSnapOptions {
  sections: string[];
  timeout?: number;
}

export const useScrollSnap = ({ sections, timeout = 4000 }: UseScrollSnapOptions) => {
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const currentSectionIndex = useRef(0);
  const scrollTimeout = useRef<number | null>(null);

  // Sempre inicia na primeira seção (hero)
  useEffect(() => {
    const heroSection = document.getElementById(sections[0]);
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'instant',
        block: 'start'
      });
    }
  }, [sections]);

  const scrollToSection = useCallback((index: number) => {
    if (isScrolling.current) return;
    
    const targetSection = document.getElementById(sections[index]);
    if (targetSection) {
      isScrolling.current = true;
      targetSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      currentSectionIndex.current = index;
      
      // Reset após scroll completar
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000);
    }
  }, [sections]);

  const getNextSectionIndex = useCallback((direction: 'up' | 'down') => {
    const currentIndex = currentSectionIndex.current;
    if (direction === 'down') {
      return (currentIndex + 1) % sections.length;
    } else {
      // Se está na primeira seção e scrolla para cima, não faz nada
      if (currentIndex === 0) {
        return currentIndex;
      }
      return currentIndex - 1;
    }
  }, [sections]);

  const handleScroll = useCallback((direction: 'up' | 'down') => {
    // Se já está processando, ignora completamente
    if (isScrolling.current) return;
    
    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;
    
    // Se ainda está no timeout, ignora
    if (timeSinceLastScroll < timeout) return;
    
    // Limpa timeout anterior se existir
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    // Define novo timeout
    scrollTimeout.current = setTimeout(() => {
      const nextIndex = getNextSectionIndex(direction);
      // Só executa se o índice mudou
      if (nextIndex !== currentSectionIndex.current) {
        scrollToSection(nextIndex);
        lastScrollTime.current = Date.now();
      }
    }, 100); // Pequeno delay para evitar spam
  }, [getNextSectionIndex, scrollToSection, timeout]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 'down' : 'up';
      handleScroll(direction);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      // Para touch, assumimos direção para baixo por padrão
      handleScroll('down');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        handleScroll('down');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleScroll('up');
      }
    };

    // Adiciona listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  return {
    scrollToSection,
    currentSectionIndex: currentSectionIndex.current
  };
};
