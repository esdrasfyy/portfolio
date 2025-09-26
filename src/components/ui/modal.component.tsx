import { useEffect, useRef } from "react";
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

export const Modal = ({ isOpen, onClose, title, children, theme = "dark" }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
            className={`relative w-full max-w-6xl max-h-[98vh] backdrop-blur-sm border rounded-lg shadow-2xl overflow-hidden flex flex-col ${theme === "light" ? "bg-white/98 border-gray-300" : "border-gray-600/50 bg-[#0f0f0f]"}`}
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
            <motion.div 
              className={`flex items-center justify-between px-6 py-3 border-b max-md:px-4 max-md:py-1 ${theme === "light" ? "border-gray-300 bg-gray-50/30" : "border-gray-600/50 bg-[#0f0f0f]"}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="flex items-center space-x-1">
                  <motion.div 
                    className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-gray-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.2 }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-gray-700"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.35, duration: 0.2 }}
                  ></motion.div>
                  <motion.div 
                    className="w-4 h-4 max-md:w-2 max-md:h-2 rounded-full bg-gray-900"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div 
                className={`flex items-center ml-4 gap-2 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <span className="font-bold">{title}</span>
              </motion.div>
              <motion.button 
                onClick={onClose} 
                className={`p-1 cursor-pointer rounded-md transition-colors hover:rotate-180 duration-200 ${theme === "light" ? "hover:bg-gray-200/50 text-gray-600 hover:text-gray-900" : "hover:bg-[#333] text-gray-400 hover:text-white"}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <RiCloseLine className="text-2xl max-md:text-lg" />
              </motion.button>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="p-8 max-md:p-4 flex-1 overflow-y-auto modal-scroll"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
