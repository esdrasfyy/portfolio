"use client";
import { useState, ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: string;
  transitionDuration?: number;
}

export function Card3D({ 
  children, 
  className = "", 
  intensity = 20,
  perspective = "1000px",
  transitionDuration = 0.3
}: Card3DProps) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetX, offsetY, target } = e.nativeEvent;

    if (target instanceof HTMLElement) {
      const width = target.offsetWidth;
      const height = target.offsetHeight;
      const x = (offsetX / width - 0.5) * intensity;
      const y = (offsetY / height - 0.5) * -intensity;

      setStyle({
        transform: `rotateX(${y}deg) rotateY(${x}deg)`,
        transition: `transform ${transitionDuration}s ease-out`,
      });
    }
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      transition: `transform ${transitionDuration}s ease-out`,
    });
  };

  return (
    <div 
      className={className}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      style={{ perspective }}
    >
      <div style={{ ...style }}>
        {children}
      </div>
    </div>
  );
}
