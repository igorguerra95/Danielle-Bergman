import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4F8] border border-[#F472B6]/30 text-xs sm:text-sm font-semibold text-[#BE185D] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Tire suas dúvidas com total transparência
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-sans">
            Compreender como a psicoterapia funciona é o primeiro passo para se sentir seguro(a).
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openFaqId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#F472B6]/40 shadow-md ring-1 ring-[#F472B6]/20'
                    : 'border-[#E2E8F0] hover:border-[#F472B6]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#15803D] border border-[#16A34A]/20 shrink-0">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FDF4F8] text-[#DB2777] rotate-180'
                        : 'bg-[#FAF8F5] text-[#64748B]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F8FAFC] font-sans pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
          <p className="font-serif text-xl font-bold text-[#0F172A] mb-2">
            Ainda tem alguma dúvida específica antes de agendar?
          </p>
          <p className="text-sm text-[#64748B] mb-5 font-sans">
            Sinta-se à vontade para enviar uma mensagem sem qualquer compromisso. Danielle responde com carinho e discrição.
          </p>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-md shadow-[#16A34A]/20 active:scale-95 transition-all cursor-pointer"
          >
            <span>Entrar em contato</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
