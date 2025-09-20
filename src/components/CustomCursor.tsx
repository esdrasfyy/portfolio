import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.style.cursor === 'pointer' || target.classList.contains('cursor-pointer'))) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.style.cursor === 'pointer' || target.classList.contains('cursor-pointer'))) {
        setIsHovering(false);
      }
    };

    const handleMouseEnterDocument = () => setIsVisible(true);
    const handleMouseLeaveDocument = () => setIsVisible(false);

    // Adicionar listeners para elementos com cursor pointer
    const addPointerListeners = () => {
      const pointerElements = document.querySelectorAll('.cursor-pointer, [style*="cursor: pointer"], button, a, [role="button"]');
      
      pointerElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnterDocument);
    document.addEventListener('mouseleave', handleMouseLeaveDocument);
    
    // Adicionar listeners para elementos existentes
    addPointerListeners();
    
    // Observer para novos elementos
    const observer = new MutationObserver(() => {
      addPointerListeners();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.removeEventListener('mouseleave', handleMouseLeaveDocument);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hover' : ''} ${!isVisible ? 'hidden' : ''}`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default CustomCursor;
