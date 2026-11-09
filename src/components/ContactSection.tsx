import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Laptop, 
  Building2, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { AppointmentFormData } from '../types';

interface ContactSectionProps {
  initialMotive?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMotive }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    modality: 'online',
    motive: initialMotive || 'Ansiedade e Preocupações Excessivas',
    preferredTime: 'tarde',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync if initialMotive changes from parent
  React.useEffect(() => {
    if (initialMotive) {
      setFormData((prev) => ({ ...prev, motive: initialMotive }));
    }
  }, [initialMotive]);

  const motiveOptions = [
    'Ansiedade e Preocupações Excessivas',
    'Crises de Pânico e Angústia',
    'Depressão, Desânimo e Vazio',
    'Terapia de Casal e Conflitos Amorosos',
    'Autoestima, Culpa e Insegurança',
    'Luto, Perdas e Transições Difíceis',
    'Burnout e Esgotamento Profissional',
    'Outro motivo / Consulta inicial de acolhimento',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.whatsapp) return;

    setIsSubmitted(true);

    // Format WhatsApp prefilled message
    const messageText = `Olá, Danielle! Gostaria de agendar uma consulta.

*Nome:* ${formData.fullName}
*Modalidade:* ${formData.modality === 'online' ? 'Online' : 'Presencial'}
*Tema principal:* ${formData.motive}
*Turno de preferência:* ${
      formData.preferredTime === 'manha'
        ? 'Manhã'
        : formData.preferredTime === 'tarde'
        ? 'Tarde'
        : 'Noite'
    }
${formData.message ? `*Mensagem adicional:* ${formData.message}` : ''}`;

    const encoded = encodeURIComponent(messageText);
    // WhatsApp URL
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  };

  const handleCopyMessage = () => {
    const messageText = `Olá, Danielle! Gostaria de agendar uma consulta.

Nome: ${formData.fullName}
Modalidade: ${formData.modality === 'online' ? 'Online' : 'Presencial'}
Tema principal: ${formData.motive}
Turno de preferência: ${formData.preferredTime}`;

    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#FDF4F8] to-transparent pointer-events-none -z-10 blur-3xl" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#16A34A]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#16A34A]/30 text-xs sm:text-sm font-semibold text-[#15803D] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agendamento da Primeira Consulta</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
            Dê o primeiro passo rumo à sua tranquilidade emocional
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] font-sans">
            Preencha os campos abaixo para combinarmos o melhor dia e horário para a sua sessão.
            Suas informações são estritamente confidenciais e protegidas pelo sigilo do CFP.
          </p>
        </div>

        {/* 2-Column Grid: Form & Warm Reassurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Reassurance & Guidance (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E2E8F0]">
              <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">
                Como funciona o seu contato?
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-[#F472B6]/25 flex items-center justify-center text-[#DB2777] font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E293B]">
                      Envio de Mensagem Sem Compromisso
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 leading-relaxed">
                      Você nos informa sua modalidade de preferência e horários mais convenientes para sua rotina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-[#16A34A]/25 flex items-center justify-center text-[#16A34A] font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E293B]">
                      Retorno Carinhoso e Direto
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 leading-relaxed">
                      Danielle responderá pessoalmente via WhatsApp ou e-mail com as opções de agenda e instruções pré-consulta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs border border-[#F472B6]/25 flex items-center justify-center text-[#DB2777] font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1E293B]">
                      Sua Primeira Sessão
                    </h4>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 leading-relaxed">
                      Um momento de escuta inicial sem pressa para você falar livremente sobre seus anseios e sentir a conexão terapêutica.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ethical notice */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#16A34A] shrink-0" />
                <p className="text-xs text-[#64748B] leading-tight">
                  Atendimento pautado integralmente pelo Código de Ética do Psicólogo.
                </p>
              </div>
            </div>

            {/* Direct Quick Card */}
            <div className="bg-gradient-to-br from-[#FDF4F8] to-white rounded-3xl p-6 border border-[#F472B6]/20 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D]">
                  Horários Disponíveis
                </span>
              </div>
              <p className="text-sm text-[#334155] leading-relaxed">
                Vagas semanais com agendamento prévio. Atendimentos de segunda a sexta, com opções no período matutino, vespertino e noturno.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Scheduling Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-[#F472B6]/20">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center mx-auto mb-5 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
                      Mensagem preparada com carinho!
                    </h3>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-md mx-auto mb-8 font-sans">
                      Obrigada por dar esse passo tão corajoso. A conversa foi aberta no seu WhatsApp com todos os dados preenchidos para envio imediato.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleCopyMessage}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#1E293B] bg-[#FAF8F5] hover:bg-[#FDF4F8] border border-[#E2E8F0] transition-colors cursor-pointer"
                      >
                        {copied ? <Check className="w-4 h-4 text-[#16A34A]" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copiado para a área de transferência!' : 'Copiar resumo da mensagem'}</span>
                      </button>

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Fazer outro agendamento</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Modality Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2.5">
                        Modalidade Desejada
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, modality: 'online' })}
                          className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            formData.modality === 'online'
                              ? 'bg-[#F0FDF4] border-[#16A34A] text-[#15803D] ring-2 ring-[#16A34A]/20 font-bold'
                              : 'bg-[#FAF8F5] border-[#E2E8F0] text-[#64748B] hover:border-[#16A34A]/40'
                          }`}
                        >
                          <Laptop className="w-5 h-5 shrink-0" />
                          <span className="text-xs sm:text-sm">Terapia Online</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                          className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                            formData.modality === 'presencial'
                              ? 'bg-[#FDF4F8] border-[#DB2777] text-[#BE185D] ring-2 ring-[#F472B6]/20 font-bold'
                              : 'bg-[#FAF8F5] border-[#E2E8F0] text-[#64748B] hover:border-[#F472B6]/40'
                          }`}
                        >
                          <Building2 className="w-5 h-5 shrink-0" />
                          <span className="text-xs sm:text-sm">Terapia Presencial</span>
                        </button>
                      </div>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ex: Mariana Silva"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 focus:border-[#16A34A] text-sm text-[#0F172A] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                          WhatsApp com DDD *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="(11) 98765-4321"
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 focus:border-[#16A34A] text-sm text-[#0F172A] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 focus:border-[#16A34A] text-sm text-[#0F172A] transition-all"
                      />
                    </div>

                    {/* Topic / Motive Select */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                        Principal Motivo da Busca
                      </label>
                      <select
                        value={formData.motive}
                        onChange={(e) => setFormData({ ...formData, motive: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 focus:border-[#16A34A] text-sm text-[#0F172A] transition-all cursor-pointer"
                      >
                        {motiveOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Shift */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                        Turno de Preferência para Atendimento
                      </label>
                      <div className="grid grid-cols-3 gap-2.5">
                        {(['manha', 'tarde', 'noite'] as const).map((shift) => (
                          <button
                            type="button"
                            key={shift}
                            onClick={() => setFormData({ ...formData, preferredTime: shift })}
                            className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                              formData.preferredTime === shift
                                ? 'bg-[#16A34A] text-white border-[#16A34A] shadow-xs'
                                : 'bg-[#FAF8F5] text-[#475569] border-[#E2E8F0] hover:border-[#16A34A]/40'
                            }`}
                          >
                            {shift === 'manha' ? 'Manhã' : shift === 'tarde' ? 'Tarde' : 'Noite'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-1.5">
                        Mensagem ou Dúvida Opcional
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Compartilhe brevemente o que você gostaria que Danielle soubesse antes do primeiro contato..."
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-[#FAF8F5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#16A34A]/30 focus:border-[#16A34A] text-sm text-[#0F172A] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#16A34A] to-[#15803D] hover:from-[#15803D] hover:to-[#14532D] shadow-lg shadow-[#16A34A]/25 hover:shadow-xl hover:shadow-[#16A34A]/35 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Entrar em contato</span>
                    </button>

                    <p className="text-center text-xs text-[#94A3B8] font-sans">
                      🔒 Sigilo total garantido · Resposta atenciosa em até 24 horas úteis
                    </p>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
