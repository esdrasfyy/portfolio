import { useEffect, useState } from "react";

export const CustomCursorComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.style.cursor === "pointer" || target.classList.contains("cursor-pointer"))) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && (target.style.cursor === "pointer" || target.classList.contains("cursor-pointer"))) {
        setIsHovering(false);
      }
    };

    const handleMouseEnterDocument = () => setIsVisible(true);
    const handleMouseLeaveDocument = () => setIsVisible(false);

    const addPointerListeners = () => {
      const pointerElements = document.querySelectorAll('.cursor-pointer, [style*="cursor: pointer"], button, a, [role="button"]');

      pointerElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnterDocument);
    document.addEventListener("mouseleave", handleMouseLeaveDocument);

    addPointerListeners();

    const observer = new MutationObserver(() => {
      addPointerListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnterDocument);
      document.removeEventListener("mouseleave", handleMouseLeaveDocument);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`
        fixed pointer-events-none z-[9999] rounded-full border border-white
        transition-all duration-300 ease-out
        ${isHovering ? "w-5 h-5 border-[3px]" : "w-8 h-8 border"}
        ${!isVisible ? "opacity-0" : "opacity-100"}
      `}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    >
      <div
        className={`
          absolute top-1/2 left-1/2 bg-white rounded-full
          transition-all duration-100 ease-out
          ${isHovering ? "w-0.5 h-0.5" : "w-1 h-1"}
        `}
        style={{
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
};
