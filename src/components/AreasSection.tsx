import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  HeartHandshake, 
  Users, 
  Sparkles, 
  Compass, 
  ShieldAlert, 
  ArrowRight, 
  Check, 
  X, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { AREAS_OF_CARE } from '../data/content';
import { AreaOfCare } from '../types';

interface AreasSectionProps {
  onSelectAreaForContact: (areaTitle: string) => void;
}

export const AreasSection: React.FC<AreasSectionProps> = ({ onSelectAreaForContact }) => {
  const [selectedArea, setSelectedArea] = useState<AreaOfCare | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="areas" className="py-24 bg-[#FAF8F5] relative">
      {/* Decorative subtle backdrop elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#F472B6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#16A34A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4F8] border border-[#F472B6]/30 text-xs sm:text-sm font-semibold text-[#BE185D] uppercase tracking-wider mb-4">
            <span>Áreas de Cuidado e Especialidades</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
            Abordagens pensadas para o seu momento de vida
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-sans leading-relaxed">
            Cada sofrimento tem suas raízes e singularidades. Conheça as principais demandas que
            trabalhamos em consultório com acolhimento ético e ferramentas práticas de transformação.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS_OF_CARE.map((area, index) => {
            const isQuartz = area.highlightColor === 'quartz';
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl border border-[#E2E8F0] hover:border-[#F472B6]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header of Card */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        isQuartz
                          ? 'bg-[#FDF4F8] text-[#DB2777] group-hover:bg-[#DB2777] group-hover:text-white'
                          : 'bg-[#F0FDF4] text-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white'
                      }`}
                    >
                      {getIcon(area.iconName)}
                    </div>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isQuartz
                          ? 'bg-[#FDF4F8] text-[#BE185D] border border-[#F472B6]/25'
                          : 'bg-[#F0FDF4] text-[#15803D] border border-[#16A34A]/25'
                      }`}
                    >
                      {area.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#15803D] transition-colors leading-snug">
                    {area.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                    {area.shortDesc}
                  </p>

                  {/* Quick Symptoms Preview (first 2 items) */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F1F5F9]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                      Sintomas comuns acolhidos:
                    </span>
                    {area.symptoms.slice(0, 2).map((symptom, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#1E293B] bg-[#FAF8F5] hover:bg-[#FDF4F8] hover:text-[#DB2777] border border-[#E2E8F0] transition-colors cursor-pointer"
                  >
                    <span>Ver detalhes clínicos</span>
                  </button>

                  <button
                    onClick={() => onSelectAreaForContact(area.title)}
                    className="p-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white shadow-xs hover:shadow-md transition-all active:scale-95 cursor-pointer"
                    title={`Agendar para ${area.title}`}
                    aria-label={`Agendar para ${area.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-[#F472B6]/20 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF4F8] flex items-center justify-center text-[#DB2777] shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-[#0F172A]">
                Não tem certeza sobre qual é o seu diagnóstico ou queixa principal?
              </h4>
              <p className="text-sm text-[#64748B] mt-0.5 font-sans">
                Você não precisa rotular sua dor. Na primeira sessão, mapeamos juntos o que está acontecendo e traçamos o plano de cuidado.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectAreaForContact('Consulta de Triagem e Acolhimento Geral')}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span>Entrar em contato</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Area Detail Modal */}
      <AnimatePresence>
        {selectedArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#F472B6]/30 overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArea(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FDF4F8] text-[#BE185D] border border-[#F472B6]/20">
                  {selectedArea.badge}
                </span>
                <span className="text-xs font-medium text-[#16A34A] flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  Atendimento Individual ou Casal
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
                {selectedArea.title}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6 font-sans">
                {selectedArea.fullDesc}
              </p>

              {/* Symptoms List */}
              <div className="bg-[#FAF8F5] rounded-2xl p-5 mb-6 border border-[#E2E8F0]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  Sinais e sintomas frequentemente trabalhados:
                </h4>
                <ul className="space-y-2.5">
                  {selectedArea.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] mt-2 shrink-0" />
                      <span className="leading-snug">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Approach focus */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#15803D] mb-1.5">
                  Foco Terapêutico Aplicado:
                </h4>
                <p className="text-sm text-[#334155] bg-[#F0FDF4] p-3.5 rounded-xl border border-[#16A34A]/20">
                  {selectedArea.therapeuticFocus}
                </p>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={() => setSelectedArea(null)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-sm font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
                >
                  Voltar
                </button>
                <button
                  onClick={() => {
                    const title = selectedArea.title;
                    setSelectedArea(null);
                    onSelectAreaForContact(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-md shadow-[#16A34A]/25 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Entrar em contato sobre este tema</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
