import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = 'Olá, Danielle! Gostaria de saber mais sobre as consultas e tirar algumas dúvidas.';

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-[#F472B6]/25 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#16A34A] to-[#15803D] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=120&q=80"
                    alt="Danielle Bergmann"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#4ADE80] border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base leading-tight">
                    Danielle Bergmann
                  </h4>
                  <span className="text-[11px] text-[#DCFCE7] flex items-center gap-1">
                    <span>Psicóloga Clínica</span> · <span>Online</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar janela"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 bg-[#FAF8F5]">
              <div className="bg-white rounded-2xl p-4 shadow-xs border border-[#E2E8F0] mb-4">
                <p className="text-xs text-[#64748B] mb-1 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#F472B6]" />
                  <span>Mensagem de Acolhimento</span>
                </p>
                <p className="text-sm text-[#1E293B] leading-relaxed">
                  Olá! Seja muito bem-vindo(a). Se você sente que é o momento de cuidar das suas
                  emoções e desatar alguns nós, estou aqui para te ouvir. Como posso te ajudar hoje?
                </p>
                <span className="text-[10px] text-[#94A3B8] block text-right mt-1">
                  Geralmente responde em poucas horas
                </span>
              </div>

              <button
                onClick={handleOpenWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-95 transition-all shadow-md shadow-[#16A34A]/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-4 py-3.5 sm:px-5 sm:py-4 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xl shadow-[#16A34A]/30 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Falar com a psicóloga Danielle Bergmann no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4ADE80]" />
        </span>

        <MessageCircle className="w-6 h-6" />

        <span className="hidden sm:inline-block text-sm font-semibold tracking-wide">
          Falar no WhatsApp
        </span>
      </button>

    </div>
  );
};
