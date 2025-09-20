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

  const getNextSectionIndex = useCallback(() => {
    const currentIndex = currentSectionIndex.current;
    return (currentIndex + 1) % sections.length;
  }, [sections]);

  const handleScroll = useCallback(() => {
    if (isScrolling.current) return;
    
    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;
    
    // Se ainda está no timeout, não faz nada
    if (timeSinceLastScroll < timeout) return;
    
    // Limpa timeout anterior se existir
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    // Define novo timeout
    scrollTimeout.current = setTimeout(() => {
      const nextIndex = getNextSectionIndex();
      scrollToSection(nextIndex);
      lastScrollTime.current = Date.now();
    }, 100); // Pequeno delay para evitar spam
  }, [getNextSectionIndex, scrollToSection, timeout]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      handleScroll();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleScroll();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
        e.preventDefault();
        handleScroll();
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
