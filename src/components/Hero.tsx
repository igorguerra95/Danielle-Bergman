import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
  onExploreAreasClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreAreasClick }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FCE7F3]/40 via-[#F0FDF4]/30 to-transparent pointer-events-none -z-10 blur-3xl" />
      <div className="absolute -top-10 right-10 w-72 h-72 rounded-full bg-[#F472B6]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-60 left-4 w-80 h-80 rounded-full bg-[#16A34A]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Credibility Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4F8] border border-[#F472B6]/30 text-xs sm:text-sm font-medium text-[#BE185D] shadow-xs mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#16A34A] animate-ping" />
              <span className="font-semibold">Atendimento Acolhedor</span>
              <span className="text-[#94A3B8]">|</span>
              <span className="text-[#334155]">Presencial & Online em Todo o Brasil</span>
            </motion.div>

            {/* Giant Cormorant Garamond Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-6"
            >
              Um espaço seguro para transformar angústia em{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] via-[#F472B6] to-[#16A34A]">
                clareza e reencontro
              </span>{' '}
              consigo mesma.
            </motion.h1>

            {/* Subheading in Lato */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-lg sm:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8"
            >
              Psicoterapia com escuta sensível, respeito irrestrito ao seu próprio ritmo e rigor
              científico. Dê o primeiro passo para desatar nós emocionais e viver com mais leveza,
              autonomia e equilíbrio interior.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-lg shadow-[#16A34A]/25 hover:shadow-xl hover:shadow-[#16A34A]/35 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreAreasClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#1E293B] bg-white border border-[#E2E8F0] hover:border-[#F472B6]/50 hover:bg-[#FDF4F8] hover:text-[#DB2777] shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Conhecer Áreas de Cuidado</span>
              </button>
            </motion.div>

            {/* Clinical Trust Checkpoints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#E2E8F0]/70 w-full"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#475569]">CRP 06/184291 Ativo</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#475569]">Sigilo Ético Absoluto</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#F472B6] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#475569]">Sem Julgamentos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#475569]">Sessões de 50 min</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Artwork & High-Fidelity Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Visual Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#FCE7F3] via-white to-[#DCFCE7] opacity-80 blur-lg -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                  alt="Danielle Bergmann em ambiente terapêutico acolhedor"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top filter contrast-[1.03]"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="w-4 h-4 text-[#F472B6]" />
                    <span className="text-xs tracking-wider uppercase font-semibold text-[#FCE7F3]">
                      Espaço Acolhedor
                    </span>
                  </div>
                  <p className="font-serif text-xl sm:text-2xl font-medium leading-snug">
                    "Você não precisa carregar o peso do mundo sozinha(o)."
                  </p>
                </div>
              </div>

              {/* Floating Card 1: Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#F472B6]/20 hidden sm:flex items-center gap-3.5 max-w-[240px]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FDF4F8] flex items-center justify-center text-[#DB2777] shrink-0 font-bold text-lg font-serif">
                  +10
                </div>
                <div>
                  <h2 className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                    Anos de Prática
                  </h2>
                  <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                    Cuidado contínuo e aperfeiçoamento clínico
                  </p>
                </div>
              </motion.div>

              {/* Floating Card 2: Safe Environment */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#16A34A]/25 flex items-center gap-3.5 max-w-[260px]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-[#16A34A] shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-[#0F172A] uppercase tracking-wide">
                    Espaço Seguro
                  </h2>
                  <p className="text-[11px] text-[#64748B] leading-tight mt-0.5">
                    Total sigilo pelo Código de Ética do CFP
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
