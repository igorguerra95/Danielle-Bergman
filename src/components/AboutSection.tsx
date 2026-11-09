import React from 'react';
import { motion } from 'motion/react';
import { Lock, Smile, BookOpen, Clock, Award, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINICAL_PILLARS } from '../data/content';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lock':
        return <Lock className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#FDF4F8] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F0FDF4] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Bio, Photography & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Visual Portrait Collage (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative colored aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#FCE7F3] via-[#FAF8F5] to-[#DCFCE7] -z-10 blur-md opacity-70" />

              {/* Main Portrait */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#F472B6]/20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80"
                  alt="Danielle Bergmann, Psicóloga Clínica"
                  className="w-full h-[480px] object-cover object-center filter contrast-[1.02]"
                />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] block">
                    Registro Regularizado
                  </span>
                  <span className="text-xs font-semibold text-[#0F172A]">
                    Conselho Regional de Psicologia
                  </span>
                </div>
              </div>

              {/* Floating quote badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-lg border border-[#F472B6]/20 max-w-[200px]">
                <span className="text-[11px] font-serif italic text-[#BE185D] block leading-tight">
                  "O acolhimento é o solo fértil onde a mudança acontece."
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Clinical Approach (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#16A34A]/30 text-xs sm:text-sm font-semibold text-[#15803D] uppercase tracking-wider mb-4">
              <span>Sobre Danielle Bergmann</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.15] mb-6">
              "A psicoterapia não é sobre consertar você — é sobre acolher sua história e construir sua autonomia."
            </h2>

            {/* Bio Body */}
            <div className="space-y-4 text-base text-[#475569] font-sans leading-relaxed mb-8">
              <p>
                Sou Danielle Bergmann, psicóloga clínica com mais de uma década dedicada à prática terapêutica,
                especializada na compreensão profunda das dinâmicas do sofrimento humano, dos transtornos
                ansiosos e da recuperação do bem-estar relacional.
              </p>
              <p>
                Minha formação fundamenta-se na <strong>Terapia Cognitivo-Comportamental Integrativa</strong>,
                enriquecida pelos pilares da <strong>Teoria do Apego</strong> e da <strong>Regulação Somatoemocional</strong>.
                Isso significa que não trabalhamos com fórmulas prontas ou diagnósticos engessados: cada sessão
                é um espaço singular, construído em parceria, para investigar a raiz dos seus conflitos com
                profundo rigor científico e delicadeza humana.
              </p>
              <p>
                Acredito firmemente que a vulnerabilidade não é sinal de fraqueza, mas sim o ponto de partida
                para toda cura genuína. Em meu consultório (seja presencialmente ou por vídeo), você encontrará
                um refúgio de silêncio para a autocrítica e de voz ativa para o seu verdadeiro eu.
              </p>
            </div>

            {/* Quick credentials list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8 pt-6 border-t border-[#F1F5F9]">
              <div className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Graduação em Psicologia Clínica</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Pós-graduação em Saúde Mental e TCC</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Especialista em Manejo de Crises de Pânico</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#1E293B]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Capacitação em Terapia de Casal e Vínculos</span>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-md shadow-[#16A34A]/25 active:scale-95 transition-all cursor-pointer"
            >
              <span>Entrar em contato</span>
            </button>
          </motion.div>

        </div>

        {/* 4 Pillars of Clinical Practice */}
        <div className="pt-12 border-t border-[#E2E8F0]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#16A34A] block mb-2">
              Ética & Cuidado
            </span>
            <h3 className="font-serif text-3xl font-bold text-[#0F172A]">
              Os 4 Pilares da Minha Prática Clínica
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLINICAL_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#F472B6]/40 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-[#F472B6]/20 flex items-center justify-center text-[#DB2777] mb-5">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#0F172A] mb-2.5">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#64748B] leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
