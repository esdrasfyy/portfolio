import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./modal.component";
import { FaInfoCircle, FaRocket, FaCheck } from "react-icons/fa";

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
      <div className="text-center space-y-6">
        {/* Icone animado */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <FaRocket className="text-6xl text-blue-400 relative z-10" />
          </div>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            🚀 V2 em Desenvolvimento!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          className="space-y-4 text-gray-300 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed">
            Estamos trabalhando duro na <span className="text-blue-400 font-semibold">V2 do portfólio</span> com novos recursos e uma experiência ainda melhor!
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <FaInfoCircle className="text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-sm">
                As informações exibidas atualmente podem não estar 100% atualizadas. 
                Para os projetos mais recentes, consulte meu <span className="text-blue-400 font-semibold">LinkedIn</span>.
              </p>
            </div>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
              Novo Design
            </span>
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
              Performance
            </span>
            <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-300">
              Novos Projetos
            </span>
          </motion.div>
        </motion.div>

        {/* Botão */}
        <motion.div
          className="pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            onClick={handleAccept}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative z-10 flex items-center gap-2">
              <FaCheck />
              <span>Entendido!</span>
            </div>
            
            {/* Efeito de brilho */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <p className="text-xs text-gray-500 mt-3">
            Esta mensagem não aparecerá novamente
          </p>
        </motion.div>
      </div>
    </Modal>
  );
};
