import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Building2, CheckCircle2, ShieldCheck, Wifi, MapPin, Coffee, ArrowRight } from 'lucide-react';

interface ModalitySectionProps {
  onContactClick: () => void;
}

export const ModalitySection: React.FC<ModalitySectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4F8] border border-[#F472B6]/30 text-xs sm:text-sm font-semibold text-[#BE185D] uppercase tracking-wider mb-4">
            <span>Flexibilidade & Cuidado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Escolha o formato ideal para o seu dia a dia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-sans">
            Seja na privacidade do seu próprio lar ou na atmosfera tranquila do consultório,
            o nível de acolhimento e a eficácia terapêutica são rigorosamente os mesmos.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Online */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-[#E2E8F0] hover:border-[#16A34A]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center">
                  <Laptop className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] border border-[#16A34A]/25">
                  Todo o Brasil & Exterior
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                Atendimento Online
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                Realizado por videoconferência em plataforma criptografada de ponta a ponta. Você só
                precisa de um ambiente reservado e uma boa conexão à internet.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#F1F5F9] mb-8">
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Conforto absoluto de ser atendido(a) no seu espaço pessoal</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Economia de tempo e ausência de estresse com trânsito</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Flexibilidade de fusos horários para brasileiros no exterior</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Segurança e privacidade com respaldo na Resolução CFP nº 11/2018</span>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] active:scale-95 transition-all shadow-md shadow-[#16A34A]/20 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Presencial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-[#E2E8F0] hover:border-[#F472B6]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FDF4F8] text-[#DB2777] flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDF4F8] text-[#BE185D] border border-[#F472B6]/25">
                  Ambiente Silencioso
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                Atendimento Presencial
              </h3>

              <p className="text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                Consultório cuidadosamente planejado com iluminação natural, elementos botânicos,
                poltronas ergonômicas e isolamento acústico para garantir máxima privacidade.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#F1F5F9] mb-8">
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                  <span>Espaço de desconexão total da rotina diária e de estímulos externos</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                  <span>Acústica projetada para sigilo e liberdade de expressão sem receios</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                  <span>Recepção reservada, pontualidade britânica e comodidade</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                  <span>Chá acolhedor e ambiente com aromaterapia sutil relaxante</span>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#1E293B] bg-[#FAF8F5] hover:bg-[#FDF4F8] hover:text-[#DB2777] border border-[#E2E8F0] active:scale-95 transition-all cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
