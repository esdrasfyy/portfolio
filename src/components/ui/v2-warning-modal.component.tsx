import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./modal.component";
import { FaRocket, FaCheck } from "react-icons/fa";

export const V2WarningModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou o aviso
    const hasAccepted = localStorage.getItem('v2-warning-accepted');
    if (!hasAccepted) {
      // Pequeno delay para mostrar o modal após o carregamento da página
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('v2-warning-accepted', 'true');
    setIsOpen(false);
  };

  const handleClose = () => {
    // Não permite fechar sem aceitar
    return;
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title=""
      theme="dark"
    >
      <div className="text-center space-y-8">
        {/* Icone */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaRocket className="text-5xl text-gray-400" />
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white">
            V2 em Desenvolvimento!
          </h2>
        </motion.div>

        {/* Descrição */}
        <motion.div
          className="max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-300">
            Eu estou desenvolvendo a V2 do portfólio. As informações atuais podem não estar atualizadas. 
            Para projetos mais recentes, consulte meu <a href="https://www.linkedin.com/in/fernando-esdras/" target="_blank" className="text-white font-semibold hover:underline">LinkedIn</a>.
          </p>
        </motion.div>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            onClick={handleAccept}
            className="px-6 py-2 cursor-pointer bg-gray-800 text-white border border-gray-600 rounded hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-2">
              <FaCheck className="text-sm" />
              <span>Entendido</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </Modal>
  );
};
