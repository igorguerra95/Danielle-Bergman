import React from 'react';
import { ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-12 border-t border-[#334155] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#334155]">
          
          {/* Brand & Mission (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F472B6]" />
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Danielle Bergmann
              </span>
            </div>
            <p className="text-xs tracking-widest uppercase font-bold text-[#4ADE80]">
              Psicóloga Clínica · CRP 06/184291
            </p>
            <p className="text-sm text-[#94A3B8] max-w-md font-sans leading-relaxed">
              Atendimento psicoterápico individual e de casal fundamentado na ciência, com escuta
              empática, sigilo inegociável e acolhimento humanizado para ressignificar dores e
              construir novos horizontes.
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li>
                <a href="#inicio" className="hover:text-[#4ADE80] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#4ADE80] transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#4ADE80] transition-colors">
                  Sobre Danielle
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#4ADE80] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#4ADE80] transition-colors">
                  Contato e Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Ethics & Back to top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Garantias Éticas
            </h4>
            <div className="bg-[#0F172A] p-4 rounded-2xl border border-[#334155] space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#4ADE80] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Conselho Federal de Psicologia</span>
              </div>
              <p className="text-[11px] text-[#94A3B8] leading-tight">
                Atuação em conformidade irrestrita com a Resolução CFP nº 11/2018 para atendimento online.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs text-[#94A3B8] hover:text-white transition-colors cursor-pointer pt-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Voltar ao topo da página</span>
            </button>
          </div>

        </div>

        {/* Public Health Mandatory Notice */}
        <div className="py-8 border-b border-[#334155]/60 text-xs text-[#94A3B8] leading-relaxed">
          <p className="bg-[#0F172A]/70 p-4 rounded-xl border border-[#334155]/80">
            <strong className="text-white">Aviso de Utilidade Pública:</strong> Este canal e os serviços
            ofertados não prestam suporte médico de emergência. Em casos de sofrimento psíquico severo,
            crise de ideação suicida ou risco à vida, ligue gratuitamente para o{' '}
            <strong className="text-[#F472B6]">CVV (Centro de Valorização da Vida) pelo número 188</strong> ou
            procure a Unidade de Pronto Atendimento (UPA) ou hospital mais próximo.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} Danielle Bergmann · Psicóloga Clínica (CRP 06/184291). Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com respeito ao cuidado humano</span>
            <Heart className="w-3.5 h-3.5 text-[#F472B6] fill-current" />
          </p>
        </div>

      </div>
    </footer>
  );
};
