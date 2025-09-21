import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Detectar cor do fundo
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;
        
        // Converter RGB para detectar se é claro ou escuro
        if (backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          const rgb = backgroundColor.match(/\d+/g);
          if (rgb && rgb.length >= 3) {
            const r = parseInt(rgb[0]);
            const g = parseInt(rgb[1]);
            const b = parseInt(rgb[2]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            setIsLightBackground(brightness > 128);
          }
        }
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      
      if (computedStyle.cursor === 'pointer' || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      
      if (computedStyle.cursor === 'pointer' || target.classList.contains('cursor-pointer')) {
        setIsHovering(false);
      }
    };

    // Smooth follower animation
    const animateFollower = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) / 9,
        y: prev.y + (mousePosition.y - prev.y) / 9
      }));
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    animateFollower();

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        ref={cursorRef}
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[10000] border border-black/20"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.3), 0 0 4px rgba(255,255,255,0.8)'
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0.5 : 1
        }}
        transition={{
          duration: 0.3,
          ease: [0.75, -1.27, 0.3, 2.33]
        }}
      />
      
      {/* Cursor follower */}
      <motion.div
        ref={followerRef}
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[10000]"
        style={{
          left: followerPosition.x,
          top: followerPosition.y,
          transform: 'translate(-50%, -50%)',
          background: isLightBackground 
            ? 'rgba(0, 0, 0, 0.2)' 
            : 'rgba(255, 255, 255, 0.15)',
          border: isLightBackground 
            ? '1px solid rgba(0, 0, 0, 0.4)' 
            : '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: isLightBackground 
            ? `
                0 0 0 1px rgba(0, 0, 0, 0.3),
                0 0 0 2px rgba(255, 255, 255, 0.1),
                0 0 12px rgba(0, 0, 0, 0.2),
                inset 0 0 0 1px rgba(0, 0, 0, 0.1)
              `
            : `
                0 0 0 1px rgba(0, 0, 0, 0.6),
                0 0 0 2px rgba(255, 255, 255, 0.2),
                0 0 12px rgba(255, 255, 255, 0.3),
                inset 0 0 0 1px rgba(255, 255, 255, 0.2)
              `
        }}
        animate={{
          scale: isHovering ? 3 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{
          duration: 0.6,
          ease: [0.75, -1.27, 0.3, 2.33]
        }}
      />
    </>
  );
};