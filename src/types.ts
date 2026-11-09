import React from 'react';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AreaOfCare {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  symptoms: string[];
  therapeuticFocus: string;
  iconName: string;
  highlightColor: 'quartz' | 'leaf';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicalPillar {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  text: string;
  initials: string;
  ageAndModality: string;
  focus: string;
}

export interface AppointmentFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  modality: 'online' | 'presencial';
  motive: string;
  preferredTime: 'manha' | 'tarde' | 'noite';
  message: string;
}
