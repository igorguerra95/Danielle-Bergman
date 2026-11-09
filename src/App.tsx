import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveReflection } from './components/InteractiveReflection';
import { AreasSection } from './components/AreasSection';
import { AboutSection } from './components/AboutSection';
import { ModalitySection } from './components/ModalitySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedMotiveForContact, setSelectedMotiveForContact] = useState<string | undefined>(undefined);

  const scrollToContact = (motive?: string) => {
    if (motive) {
      setSelectedMotiveForContact(motive);
    }
    const contactElement = document.getElementById('contato');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAreas = () => {
    const areasElement = document.getElementById('areas');
    if (areasElement) {
      areasElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E293B] flex flex-col font-sans selection:bg-[#FCE7F3] selection:text-[#831843]">
      {/* Top Navbar */}
      <Navbar onContactClick={() => scrollToContact()} />

      {/* Main Content Sections: inicio → areas → sobre → contato */}
      <main className="flex-grow">
        {/* 1. Início (Hero) */}
        <Hero
          onContactClick={() => scrollToContact()}
          onExploreAreasClick={scrollToAreas}
        />

        {/* Interactive Empathetic Tool: Auto-Escuta */}
        <InteractiveReflection onContactClick={() => scrollToContact()} />

        {/* 2. Áreas de Atuação */}
        <AreasSection onSelectAreaForContact={(areaTitle) => scrollToContact(areaTitle)} />

        {/* 3. Sobre a Psicóloga e Abordagem */}
        <AboutSection onContactClick={() => scrollToContact()} />

        {/* Modalidade: Online vs Presencial */}
        <ModalitySection onContactClick={() => scrollToContact()} />

        {/* Relatos Éticos de Pacientes */}
        <TestimonialsSection />

        {/* Dúvidas Frequentes (FAQ) */}
        <FaqSection onContactClick={() => scrollToContact()} />

        {/* 4. Contato e Agendamento */}
        <ContactSection initialMotive={selectedMotiveForContact} />
      </main>

      {/* Rodapé Ético com Avisos Legais do CFP */}
      <Footer />

      {/* Botão Flutuante de WhatsApp com Pulso */}
      <FloatingWhatsApp />
    </div>
  );
}
