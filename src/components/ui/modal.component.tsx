import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { GlowingEffectComponent } from "./glowing-effect.component";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  icon?: React.ComponentType<any>;
  theme?: "dark" | "light";
}

export const Modal = ({ isOpen, onClose, title, children, icon: Icon, theme = "dark" }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Salva o scroll atual
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      setIsAnimating(true);
    } else {
      // Restaura o scroll
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "unset";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);

      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Adiciona listener para tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Fecha o modal se clicar no backdrop (fora do modal)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(8px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          onClick={handleBackdropClick}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className={`relative w-full max-w-6xl max-h-[95vh] backdrop-blur-sm border rounded-lg shadow-2xl overflow-hidden ${theme === "light" ? "bg-white/98 border-gray-200/50" : "border-gray-600/50 bg-[#0f0f0f]"}`}
            initial={{
              opacity: 0,
              scale: 0.3,
              y: 20,
              filter: "blur(15px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.1,
              y: 20,
              filter: "blur(20px)",
            }}
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1], // Custom easing similar to macOS
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <GlowingEffectComponent spread={30} glow={true} disabled={false} proximity={150} inactiveZone={0.01} borderWidth={1} />

            {/* Header */}
            <div className={`flex items-center justify-between px-6 py-3 border-b ${theme === "light" ? "border-gray-200/50 bg-gray-50/30" : "border-gray-600/50 bg-[#0f0f0f]"}`}>
              <div className="flex items-center gap-3">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-700"></div>
                  <div className="w-4 h-4 rounded-full bg-gray-900"></div>
                </div>
              </div>
                <div className={`flex items-center ml-4 gap-2 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                  <span className="font-semibold">{title}</span>
                </div>
              <button onClick={onClose} className={`p-1 cursor-pointer rounded-md transition-colors hover:rotate-180 duration-200 ${theme === "light" ? "hover:bg-gray-200/50 text-gray-600 hover:text-gray-900" : "hover:bg-[#333] text-gray-400 hover:text-white"}`}>
                <RiCloseLine size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[calc(95vh-140px)] overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
