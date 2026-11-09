import { AreaOfCare, ClinicalPillar, FaqItem, Testimonial } from '../types';

export const AREAS_OF_CARE: AreaOfCare[] = [
  {
    id: 'ansiedade-panico',
    title: 'Ansiedade, Angústia e Crises de Pânico',
    shortDesc: 'Aprenda a desacelerar a mente, compreender a raiz do medo e recuperar o controle sobre seu corpo e pensamentos.',
    fullDesc: 'A ansiedade constante rouba a presença, o sono e a paz. Em nossas sessões, trabalhamos técnicas de regulação neurovegetativa e reestruturação cognitiva para desarmar gatilhos, desconstruir pensamentos catastróficos e restaurar sua segurança interna.',
    badge: 'Mais Frequente',
    symptoms: [
      'Preocupação excessiva e pensamentos acelerados que não desligam',
      'Taquicardia, aperto no peito, falta de ar ou sensação de perigo iminente',
      'Insônia e dificuldade de relaxar mesmo nos momentos de descanso',
      'Medo paralisante de errar ou de ser julgado(a)'
    ],
    therapeuticFocus: 'Regulação fisiológica + Mapeamento de gatilhos inconscientes + Reconstrução da autoconfiança.',
    iconName: 'Activity',
    highlightColor: 'quartz'
  },
  {
    id: 'depressao-desanimo',
    title: 'Depressão, Desânimo e Vazio Existencial',
    shortDesc: 'Um espaço de escuta profunda para acolher sua dor sem cobranças, resgatando aos poucos o sentido e a vitalidade.',
    fullDesc: 'A depressão não é preguiça nem fraqueza; é um sinal de exaustão emocional acumulada. Construímos um caminho gentil, no seu ritmo, para reencontrar conexões significativas e reconstruir sua energia vital sem julgamentos.',
    badge: 'Cuidado Aprofundado',
    symptoms: [
      'Tristeza persistente, apatia e perda de interesse pelo que antes trazia alegria',
      'Sensação de cansaço extremo e dificuldade para cumprir tarefas cotidianas',
      'Sentimento de inadequação, culpa ou autocrítica desmedida',
      'Isolamento e sensação de estar emocionalmente desconectado(a) do mundo'
    ],
    therapeuticFocus: 'Acolhimento empático + Ativação comportamental gradual + Ressignificação de narrativas de vida.',
    iconName: 'HeartHandshake',
    highlightColor: 'leaf'
  },
  {
    id: 'terapia-casal',
    title: 'Terapia de Casal e Vínculos Afetivos',
    shortDesc: 'Fortaleça a comunicação não-violenta, resolva ressentimentos acumulados e restaure o respeito e o afeto mútuo.',
    fullDesc: 'Relacionamentos saudáveis exigem habilidade para expressar necessidades sem agressividade e escutar sem armaduras. A terapia de casal oferece uma mediação segura para desatar nós, reconstruir a cumplicidade ou decidir caminhos com maturidade e respeito.',
    badge: 'Relacionamentos',
    symptoms: [
      'Discussões repetitivas em círculos que nunca chegam a uma solução',
      'Distanciamento afetivo, frieza ou quebra de confiança recente',
      'Dificuldade de expressar sentimentos e desejos com vulnerabilidade',
      'Sensação de solidão mesmo estando a dois'
    ],
    therapeuticFocus: 'Mediação reflexiva + Comunicação não-violenta + Fortalecimento da segurança do apego.',
    iconName: 'Users',
    highlightColor: 'quartz'
  },
  {
    id: 'autoestima-limites',
    title: 'Autoestima, Culpa e Limites Pessoais',
    shortDesc: 'Aprenda a dizer não sem culpa, liberte-se da necessidade de aprovação alheia e assuma seu valor real.',
    fullDesc: 'Quando nos acostumamos a colocar os outros sempre em primeiro lugar, nos abandonamos. Vamos investigar as origens dessa necessidade de agradar e construir limites saudáveis que protejam sua paz e dignidade pessoal.',
    badge: 'Desenvolvimento Pessoal',
    symptoms: [
      'Medo constante de desagradar e dificuldade extrema de dizer "não"',
      'Síndrome do impostor e sensação de nunca ser "bom o suficiente"',
      'Sobrecarga emocional por assumir problemas que não são seus',
      'Necessidade compulsiva de aprovação e validação externa'
    ],
    therapeuticFocus: 'Desconstrução do crítico interno + Fortalecimento da assertividade + Autovalidação.',
    iconName: 'Sparkles',
    highlightColor: 'leaf'
  },
  {
    id: 'luto-transicoes',
    title: 'Luto, Perdas e Transições de Vida',
    shortDesc: 'Amparo sensível para atravessar despedidas, mudanças de carreira, divórcios e novos ciclos que exigem reinvenção.',
    fullDesc: 'O luto não se restringe à morte de entes queridos: inclui o fim de um casamento, a perda de um emprego, a mudança de cidade ou o encerramento de uma fase. Damos voz à saudade e construímos pontes para o novo amanhã.',
    badge: 'Acolhimento e Travessia',
    symptoms: [
      'Sensação de desorientação após uma perda significativa ou ruptura',
      'Dificuldade de aceitar o fim de um relacionamento ou projeto de vida',
      'Ansiedade intensa diante de grandes decisões ou mudanças de carreira',
      'Medo do futuro e sensação de vazio após mudanças radicais'
    ],
    therapeuticFocus: 'Elaboração das fases do luto + Reintegração da identidade + Projeção de futuro com propósito.',
    iconName: 'Compass',
    highlightColor: 'quartz'
  },
  {
    id: 'burnout-estresse',
    title: 'Burnout, Estresse e Sobrecarga Emocional',
    shortDesc: 'Resgate o equilíbrio entre realizações e saúde mental, desarmando o ciclo tóxico da hiperprodutividade.',
    fullDesc: 'O ambiente corporativo moderno frequentemente nos empurra para a exaustão física e cognitiva. Ajudamos profissionais a reconhecer os sinais de colapso, renegociar suas relações com o trabalho e resgatar o prazer de viver além do dever.',
    badge: 'Saúde Mental no Trabalho',
    symptoms: [
      'Esgotamento físico e mental que não melhora aos finais de semana',
      'Cinismo, irritabilidade e sensação de perda de propósito no trabalho',
      'Queda acentuada na concentração, lapsos de memória e bloqueio criativo',
      'Dores musculares tensionais, enxaquecas frequentes e problemas gástricos'
    ],
    therapeuticFocus: 'Desaceleração consciente + Redefinição de fronteiras profissionais + Resgate do autocuidado.',
    iconName: 'ShieldAlert',
    highlightColor: 'leaf'
  }
];

export const CLINICAL_PILLARS: ClinicalPillar[] = [
  {
    title: 'Sigilo e Ética Absolutos',
    description: 'Atuação sob o mais rigoroso respeito ao Código de Ética do Conselho Federal de Psicologia (CFP). Suas falas e vulnerabilidades permanecem 100% protegidas e confidenciais.',
    icon: 'Lock'
  },
  {
    title: 'Ambiente Livre de Julgamentos',
    description: 'Aqui não há expectativas a cumprir nem censura moral. Você tem total liberdade para desabafar sobre dúvidas, medos, dores e fantasias com a certeza de ser acolhido(a).',
    icon: 'Smile'
  },
  {
    title: 'Abordagem Científica Integrativa',
    description: 'Aliamos a sólida fundamentação da Terapia Cognitivo-Comportamental à sensibilidade da Teoria do Apego e Neurociência dos Afetos, adaptando cada plano ao seu perfil único.',
    icon: 'BookOpen'
  },
  {
    title: 'Respeito ao Seu Próprio Ritmo',
    description: 'A transformação pessoal não tem prazo padronizado nem fórmulas mágicas. Caminhamos juntos respeitando o tempo em que você se sente seguro(a) para abrir cada porta interna.',
    icon: 'Clock'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Primeiros Passos',
    question: 'Como funciona a primeira sessão de psicoterapia?',
    answer: 'A primeira sessão é um encontro de acolhimento e escuta diagnóstica inicial. Nela, você terá espaço livre para compartilhar o que te motivou a buscar ajuda e como tem se sentido. Danielle irá tirar todas as suas dúvidas sobre o método, explicar o funcionamento do sigilo profissional e juntos definirão os principais objetivos do seu processo terapêutico. Não há pressão para falar tudo de uma vez.'
  },
  {
    id: 'faq-2',
    category: 'Modalidade',
    question: 'A psicoterapia online possui a mesma eficácia que a presencial?',
    answer: 'Sim, comprovada cientificamente por dezenas de estudos internacionais e regulamentada pelo Conselho Federal de Psicologia (Resolução CFP nº 11/2018). O atendimento online proporciona a mesma conexão terapêutica e profundidade clínica, com a conveniência de ser realizado no conforto e na privacidade da sua casa, sem custos de deslocamento ou tempo no trânsito.'
  },
  {
    id: 'faq-3',
    category: 'Sigilo e Privacidade',
    question: 'Como é garantido o sigilo das minhas informações?',
    answer: 'O sigilo profissional é um dever ético inegociável regido pelo artigo 9º do Código de Ética do Psicólogo. Tudo o que for falado em sessão permanece estritamente entre você e a psicóloga. Nas sessões online, utilizamos plataformas certificadas com criptografia de ponta a ponta que atendem às normas da LGPD e do CFP.'
  },
  {
    id: 'faq-4',
    category: 'Duração e Frequência',
    question: 'Qual a duração das sessões e com que frequência acontecem?',
    answer: 'Cada sessão tem a duração padrão de 50 minutos. Para garantir consistência e evolução clínica sustentável, a frequência habitual é de um encontro semanal. Em fases avançadas ou de manutenção, a periodicidade pode ser combinada de forma quinzenal.'
  },
  {
    id: 'faq-5',
    category: 'Investimento e Planos',
    question: 'Você atende por convênio ou emite recibo para reembolso?',
    answer: 'O atendimento é estritamente particular para preservar a qualidade personalizada e o tempo dedicado a cada paciente. No entanto, fornecemos recibo detalhado com CRP e dados clínicos exigidos pelos planos de saúde para que você solicite o reembolso integral ou parcial conforme as regras da sua operadora.'
  },
  {
    id: 'faq-6',
    category: 'Processo Terapêutico',
    question: 'Quanto tempo dura o tratamento psicológico?',
    answer: 'O tempo de processo varia conforme as demandas de cada indivíduo, a complexidade dos temas trabalhados e os objetivos almejados. Algumas queixas pontuais (como preparação para uma decisão importante ou alívio de sintomas de pânico) apresentam ganhos notáveis nos primeiros meses, enquanto o aprofundamento do autoconhecimento se estende de acordo com a sua vontade de continuar se desenvolvendo.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    text: 'Procurei a Danielle em um momento de desespero total com crises de ansiedade diárias. Pela primeira vez na vida senti que alguém não estava apenas me ouvindo, mas realmente entendendo a raiz da minha dor. Em poucos meses voltei a dormir sem aperto no peito.',
    initials: 'M. S.',
    ageAndModality: '34 anos · Atendimento Online (São Paulo)',
    focus: 'Superação de Ansiedade e Síndrome do Pânico'
  },
  {
    id: 'test-2',
    text: 'A sensibilidade e a delicadeza com que a Danielle conduz as sessões me deram coragem para tocar em feridas que eu escondia há anos. Aprendi a impor limites saudáveis na família e no trabalho sem me sentir a pior pessoa do mundo. Foi um divisor de águas.',
    initials: 'C. R.',
    ageAndModality: '29 anos · Atendimento Presencial',
    focus: 'Autoestima e Relações Familiares'
  },
  {
    id: 'test-3',
    text: 'A terapia de casal com a Danielle salvou nosso casamento. Estávamos brigando por qualquer detalhe bobo e nos distanciando. Ela criou um ambiente tão seguro que conseguimos nos ouvir de verdade novamente. Gratidão imensa por essa mediação tão profissional.',
    initials: 'L. & P.',
    ageAndModality: 'Casados há 8 anos · Atendimento Online',
    focus: 'Terapia de Casal e Comunicação'
  }
];

export const REFLECTION_QUESTIONS = [
  {
    id: 'feeling',
    question: 'Qual dessas frases mais ressoa com o momento que você está vivendo?',
    options: [
      {
        label: 'Sinto que minha cabeça não para nem um segundo e vivo em estado de alerta.',
        insight: 'Esse estado de hipervigilância consome sua energia física. A psicoterapia atua regulando o sistema nervoso e desarmando a necessidade de controlar o incontrolável.'
      },
      {
        label: 'Sinto um cansaço constante e uma falta de sentido que não passam com o descanso.',
        insight: 'Quando o corpo e a mente silenciam o desejo, é hora de acolher essa tristeza acumulada. Você não precisa carregar esse peso em solidão.'
      },
      {
        label: 'Me cobro demais, tenho dificuldade de dizer não e vivo com medo de decepcionar.',
        insight: 'A busca incansável por aprovação muitas vezes mascara o medo da rejeição. Trabalhamos para que você seja sua principal aliada, não sua carrasca.'
      },
      {
        label: 'Estou enfrentando um término, uma perda ou uma mudança de vida que parece maior do que eu.',
        insight: 'Transições exigem amparo e reorganização da identidade. Ter um espaço neutro e seguro faz toda a diferença para atravessar a dor com dignidade.'
      }
    ]
  }
];
