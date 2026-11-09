import React from 'react';
import { motion } from 'motion/react';
import { Star, Heart, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF4F8] border border-[#F472B6]/30 text-xs sm:text-sm font-semibold text-[#BE185D] uppercase tracking-wider mb-4">
            <Heart className="w-3.5 h-3.5 fill-[#BE185D]" />
            <span>Vozes de Acolhimento</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Relatos de quem encontrou refúgio e clareza
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-sans">
            Experiências reais compartilhadas espontaneamente por pacientes, com preservação
            ética da identidade conforme preconiza o Conselho Federal de Psicologia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E2E8F0] hover:border-[#F472B6]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-[#F472B6]/25 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Focus badge */}
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#15803D] border border-[#16A34A]/20 inline-block mb-4 shadow-xs">
                  {test.focus}
                </span>

                {/* Stars / trust indicator */}
                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed italic font-sans mb-6">
                  "{test.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F472B6] to-[#16A34A] text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-xs">
                  {test.initials}
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#0F172A] block">
                    {test.initials}
                  </span>
                  <span className="text-xs text-[#64748B] block">
                    {test.ageAndModality}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
