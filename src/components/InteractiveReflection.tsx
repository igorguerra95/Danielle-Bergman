import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import { REFLECTION_QUESTIONS } from '../data/content';

interface InteractiveReflectionProps {
  onContactClick: () => void;
}

export const InteractiveReflection: React.FC<InteractiveReflectionProps> = ({ onContactClick }) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(0);

  const activeQuestion = REFLECTION_QUESTIONS[0];
  const activeOption = selectedOptionIndex !== null ? activeQuestion.options[selectedOptionIndex] : null;

  return (
    <section className="py-16 bg-gradient-to-b from-transparent via-[#FDF4F8]/60 to-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#F472B6]/20 relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FCE7F3]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#DCFCE7]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#16A34A]/25 text-xs font-semibold text-[#15803D] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Momento de Autoescuta</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              O que o seu coração está pedindo hoje?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] font-sans">
              Selecione o sentimento que mais se aproxima do que você tem vivido para receber uma reflexão acolhedora:
            </p>
          </div>

          {/* Interactive Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8 relative">
            {activeQuestion.options.map((option, index) => {
              const isSelected = selectedOptionIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setSelectedOptionIndex(index)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border cursor-pointer relative flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#FDF4F8] border-[#DB2777] shadow-md ring-2 ring-[#F472B6]/30'
                      : 'bg-[#FAF8F5]/80 hover:bg-white border-[#E2E8F0] hover:border-[#F472B6]/40'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-[#DB2777] text-white'
                        : 'border-2 border-[#CBD5E1] text-transparent'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-sm sm:text-base font-medium text-[#1E293B] block leading-snug">
                      {option.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Empathetic Insight Response Card */}
          <AnimatePresence mode="wait">
            {activeOption && (
              <motion.div
                key={selectedOptionIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-r from-[#F0FDF4] to-[#FDF4F8] rounded-2xl p-6 border border-[#16A34A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                    <Heart className="w-5 h-5 fill-[#16A34A]/20" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#15803D] mb-1">
                      Reflexão Clínica da Psicóloga
                    </h3>
                    <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed">
                      "{activeOption.insight}"
                    </p>
                  </div>
                </div>

                <button
                  onClick={onContactClick}
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-95 transition-all shadow-md shadow-[#16A34A]/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar sobre isso</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
