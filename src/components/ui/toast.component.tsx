import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-8 right-8 z-[9999] max-w-md"
        >
          <div className="bg-black border border-white/20 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-3 p-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                {type === 'success' ? (
                  <FiCheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Message */}
              <p className="text-white text-sm font-medium flex-1">
                {message}
              </p>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 text-white/60 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-[2px] bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
