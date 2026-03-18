// ========== LANGUAGE SYSTEM ==========
const translations = {
  en: {
    // Nav
    navFeatures: 'Features',
    navPricing: 'Pricing',
    navHowItWorks: 'How It Works',
    navAgents: 'AI Agents',
    navIntegrations: 'Integrations',
    navCTA: 'Get Started',

    // Hero
    heroBadge: 'AI Voice Agent Platform',
    heroTitle1: 'Build & Deploy AI Voice Agents That ',
    heroTypingWords: ['Book Appointments', 'Make Cold Calls', 'Handle Inbound', 'Qualify Leads', 'Close Deals', 'Never Sleep'],
    heroSubtitle: 'Create, configure, and launch AI voice agents in minutes. No-code builder with 20+ AI models, 50+ premium voices, and integrations with your CRM and calendar.',
    heroCTA1: 'Start Building Free',
    heroCTA2: 'Book a Demo',
    heroStat1: '20+',
    heroStat1Label: 'AI Models',
    heroStat2: '50+',
    heroStat2Label: 'Voices',
    heroStat3: '24/7',
    heroStat3Label: 'Availability',

    // Phone
    phoneName: 'Sword AI Agent',
    phoneStatus: 'Active Call',
    phoneTimer: '02:47',
    phoneCallStatus: 'Booking appointment...',

    // Float cards
    float1: '✅ Appointment Booked',
    float2: '📞 1,847 Calls Today',
    float3: '📈 32% Conversion',

    // Logos
    logosTrust: 'Trusted by agencies and businesses worldwide',

    // Features
    featuresBadge: 'PLATFORM',
    featuresTitle: 'A Complete AI Voice ',
    featuresTitleGrad: 'Agent Builder',
    featuresSubtitle: 'Everything you need to create, deploy, and scale AI voice agents — from no-code setup to advanced analytics.',
    feature1Title: 'No-Code Agent Builder',
    feature1Desc: 'Create outbound and inbound voice agents through an intuitive dashboard. Configure scripts, personality, and objectives without writing a single line of code.',
    feature2Title: '20+ AI Models',
    feature2Desc: 'Choose from GPT-4o, Claude 3.5, Gemini, Llama, DeepSeek, Mistral, and more. Pick the perfect model for your use case and budget.',
    feature3Title: '50+ Premium Voices',
    feature3Desc: 'Natural-sounding voices from ElevenLabs, OpenAI, and PlayHT. Male and female options with adjustable speed, stability, and emotion.',
    feature4Title: 'Calendar & CRM Integration',
    feature4Desc: 'Native integration with GoHighLevel, Google Calendar, Calendly, HubSpot, and Cal.com. Agents book appointments in real-time.',
    feature5Title: 'Real-Time Call Analytics',
    feature5Desc: 'Track call outcomes, booking rates, answer rates, cost per booking, and agent performance with comprehensive dashboards.',
    feature6Title: 'White-Label & Resell',
    feature6Desc: 'Agency model with custom branding, client management, rate overrides, and multi-tier account hierarchy. Resell under your brand.',

    // Agents
    agentsBadge: 'AI AGENTS',
    agentsTitle: 'Deploy Specialized ',
    agentsTitleGrad: 'AI Voice Agents',
    agentsSubtitle: 'Build purpose-built agents for every stage of your customer journey.',
    agent1Title: 'Outbound Caller',
    agent1Desc: 'Automated outbound prospecting at massive scale with personalized AI conversations.',
    agent1F1: '1,000+ simultaneous calls',
    agent1F2: 'Dynamic scripts per lead',
    agent1F3: 'Smart objection handling',
    agent1F4: 'CRM auto-tagging',
    agent2Title: 'Inbound Handler',
    agent2Desc: 'Receive and handle incoming calls with intelligent routing and instant responses.',
    agent2F1: '24/7 inbound availability',
    agent2F2: 'Call transfer & escalation',
    agent2F3: 'Knowledge base Q&A',
    agent2F4: 'Real-time booking',
    agent3Title: 'AI Chatbot',
    agent3Desc: 'Text-based AI agents with n8n workflow integration for omnichannel engagement.',
    agent3F1: 'n8n workflow automation',
    agent3F2: 'Website widget embed',
    agent3F3: 'Lead capture & qualification',
    agent3F4: 'Multi-channel support',

    // Integrations
    intBadge: 'INTEGRATIONS',
    intTitle: 'Connects With Your ',
    intTitleGrad: 'Entire Stack',
    intSubtitle: 'Native integrations with the tools you already use. Plus 6,000+ apps via webhooks and API.',
    int1: 'GoHighLevel',
    int2: 'Google Calendar',
    int3: 'Calendly',
    int4: 'HubSpot',
    int5: 'Cal.com',
    int6: 'Twilio',
    int7: 'ElevenLabs',
    int8: 'OpenAI',
    int9: 'Slack',
    int10: 'n8n',

    // Comparison
    compBadge: 'COMPARISON',
    compTitle: 'Human Reps vs ',
    compTitleGrad: 'Sword AI',
    compSubtitle: 'See why businesses are replacing manual calling with AI voice agents.',
    compMetric: 'Metric',
    compHuman: 'Human Rep',
    compAI: 'Sword AI',
    compRow1: ['Monthly Cost', '$3,000-5,000/rep', 'From $297/mo'],
    compRow2: ['Availability', '9 to 5', '24/7/365'],
    compRow3: ['Simultaneous Calls', '1', '1,000+'],
    compRow4: ['Training Time', 'Weeks / Months', 'Minutes'],
    compRow5: ['Consistency', 'Variable', '100% Consistent'],
    compRow6: ['Scalability', 'Hire more reps', 'Instant'],
    compRow7: ['Languages', '1-2', '20+'],

    // Stats
    stat1: '20+',
    stat1Label: 'AI Models Supported',
    stat2: '6,000+',
    stat2Label: 'App Integrations',
    stat3: '50+',
    stat3Label: 'Premium Voices',
    stat4: '24/7',
    stat4Label: 'Always Available',

    // How it works
    howBadge: 'HOW IT WORKS',
    howTitle: 'Launch Your AI Agent in ',
    howTitleGrad: '3 Steps',
    howSubtitle: 'From zero to making calls in under 30 minutes. No technical skills required.',
    step1Title: 'Create Your Agent',
    step1Desc: 'Choose outbound or inbound, select your AI model and voice, write your prompt and objectives. Our agent generator can even write it for you.',
    step2Title: 'Connect Your Tools',
    step2Desc: 'Import your Twilio phone numbers, connect your CRM (GoHighLevel, HubSpot), link your calendar (Google, Calendly, Cal.com), and configure webhooks.',
    step3Title: 'Launch & Monitor',
    step3Desc: 'Start making calls instantly. Track outcomes, booking rates, and costs in real-time. Scale from 10 to 10,000 calls per day with one click.',

    // Pricing
    pricingBadge: 'PRICING',
    pricingTitle: 'Transparent ',
    pricingTitleGrad: 'Pay-As-You-Go',
    pricingSubtitle: 'Dynamic per-minute pricing based on your AI model and transcriber choice. No hidden fees.',
    plan1Name: 'Starter',
    plan1Price: '$297',
    plan1Period: '/mo',
    plan1Desc: 'For individual agents and small teams getting started.',
    plan1F1: '500 minutes/month',
    plan1F2: 'Up to 3 agents',
    plan1F3: 'GPT-4o & Claude 3.5',
    plan1F4: 'Calendar integration',
    plan1F5: 'Email support',
    plan1CTA: 'Start Free Trial',
    plan2Name: 'Professional',
    plan2Price: '$697',
    plan2Period: '/mo',
    plan2Desc: 'For growing businesses that need more agents and power.',
    plan2F1: '2,500 minutes/month',
    plan2F2: 'Unlimited agents',
    plan2F3: 'All 20+ AI models',
    plan2F4: 'Advanced analytics',
    plan2F5: 'Priority support',
    plan2F6: 'Custom voices',
    plan2CTA: 'Start Free Trial',
    plan3Name: 'Agency',
    plan3Price: 'Custom',
    plan3Period: '',
    plan3Desc: 'White-label platform for agencies managing multiple clients.',
    plan3F1: 'Unlimited minutes',
    plan3F2: 'Client management',
    plan3F3: 'Custom branding',
    plan3F4: 'Rate overrides',
    plan3F5: 'HIPAA compliance',
    plan3F6: 'Dedicated support',
    plan3CTA: 'Contact Sales',
    popular: 'Most Popular',

    // Demo
    navDemo: 'Try Demo',
    demoBadge: 'LIVE DEMO',
    demoTitle: 'Try Your AI Agent ',
    demoTitleGrad: 'Right Now',
    demoSubtitle: 'Generate a custom AI chat and voice agent for your business in seconds. No sign-up required.',
    demoLabelName: 'Your Name',
    demoLabelBusiness: 'Business Name *',
    demoLabelIndustry: 'Industry *',
    demoSelectIndustry: 'Select an industry',
    demoLabelObjective: 'Agent Objective *',
    demoLabelType: 'Agent Type *',
    demoLabelLanguage: 'Language *',
    demoLabelTone: 'Tone / Style',
    demoLabelFAQ: 'FAQ (optional)',
    demoLabelObjections: 'Common Objections (optional)',
    demoGenerate: 'Generate Demo',
    demoLoadingTitle: 'Generating your AI agent...',
    demoLoadingSubtitle: 'This may take a moment. We\'re crafting the perfect prompt for your business.',
    demoResultsTitle: 'Your AI Agent Demo',
    demoStartOver: 'Start Over',
    demoChatTab: 'Chat Demo',
    demoVoiceTab: 'Voice Demo',
    demoChatPlaceholder: 'Type a message...',
    demoVoiceSelect: 'Select Agent Voice',
    demoCallReady: 'Ready to start voice call',
    demoTranscript: 'Live Transcript',
    demoBookText: 'Ready to deploy this AI agent for your business? Book a free call with our team.',
    demoBookCTA: 'Book Your Free Call',

    // CTA
    ctaTitle: 'Ready to Build Your First ',
    ctaTitleGrad: 'AI Voice Agent?',
    ctaSubtitle: 'Book a free 30-minute growth session with our team and see Sword AI in action.',
    ctaCTA: 'Book Your Session',

    // Footer
    footerDesc: 'The no-code platform to build, deploy, and scale AI voice agents and chatbots for sales, support, and automation.',
    footerProduct: 'Product',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerPricing: 'Pricing',
    footerVoiceAgents: 'Voice Agents',
    footerChatbots: 'Chatbots',
    footerIntegrations: 'Integrations',
    footerAPI: 'API & Webhooks',
    footerAbout: 'About Us',
    footerCareers: 'Careers',
    footerBlog: 'Blog',
    footerContact: 'Contact',
    footerTerms: 'Terms of Service',
    footerPrivacy: 'Privacy Policy',
    footerHIPAA: 'HIPAA Compliance',
    footerCopyright: '© 2025 Sword AI. All rights reserved.',
  },
  es: {
    // Nav
    navFeatures: 'Funciones',
    navPricing: 'Precios',
    navHowItWorks: 'Cómo Funciona',
    navAgents: 'Agentes IA',
    navIntegrations: 'Integraciones',
    navCTA: 'Comenzar',

    // Hero
    heroBadge: 'Plataforma de Agentes de Voz IA',
    heroTitle1: 'Crea y Despliega Agentes de Voz IA Que ',
    heroTypingWords: ['Agendan Citas', 'Llaman En Frío', 'Atienden Llamadas', 'Califican Leads', 'Cierran Ventas', 'Nunca Duermen'],
    heroSubtitle: 'Crea, configura y lanza agentes de voz IA en minutos. Constructor sin código con 20+ modelos de IA, 50+ voces premium e integraciones con tu CRM y calendario.',
    heroCTA1: 'Empieza Gratis',
    heroCTA2: 'Agenda una Demo',
    heroStat1: '20+',
    heroStat1Label: 'Modelos IA',
    heroStat2: '50+',
    heroStat2Label: 'Voces',
    heroStat3: '24/7',
    heroStat3Label: 'Disponibilidad',

    // Phone
    phoneName: 'Agente Sword AI',
    phoneStatus: 'Llamada Activa',
    phoneTimer: '02:47',
    phoneCallStatus: 'Agendando cita...',

    // Float cards
    float1: '✅ Cita Agendada',
    float2: '📞 1,847 Llamadas Hoy',
    float3: '📈 32% Conversión',

    // Logos
    logosTrust: 'Agencias y empresas de todo el mundo confían en nosotros',

    // Features
    featuresBadge: 'PLATAFORMA',
    featuresTitle: 'Un Constructor Completo de ',
    featuresTitleGrad: 'Agentes de Voz IA',
    featuresSubtitle: 'Todo lo que necesitas para crear, desplegar y escalar agentes de voz IA — desde configuración sin código hasta analíticas avanzadas.',
    feature1Title: 'Constructor Sin Código',
    feature1Desc: 'Crea agentes de voz entrantes y salientes con un panel intuitivo. Configura scripts, personalidad y objetivos sin escribir una sola línea de código.',
    feature2Title: '20+ Modelos de IA',
    feature2Desc: 'Elige entre GPT-4o, Claude 3.5, Gemini, Llama, DeepSeek, Mistral y más. Selecciona el modelo perfecto para tu caso de uso y presupuesto.',
    feature3Title: '50+ Voces Premium',
    feature3Desc: 'Voces naturales de ElevenLabs, OpenAI y PlayHT. Opciones masculinas y femeninas con velocidad, estabilidad y emoción ajustables.',
    feature4Title: 'Calendario y CRM',
    feature4Desc: 'Integración nativa con GoHighLevel, Google Calendar, Calendly, HubSpot y Cal.com. Los agentes agendan citas en tiempo real.',
    feature5Title: 'Analíticas en Tiempo Real',
    feature5Desc: 'Rastrea resultados de llamadas, tasas de agendamiento, tasas de respuesta, costo por reserva y rendimiento de agentes con dashboards completos.',
    feature6Title: 'Marca Blanca y Reventa',
    feature6Desc: 'Modelo de agencia con branding personalizado, gestión de clientes, tarifas personalizables y jerarquía multi-nivel. Revende bajo tu marca.',

    // Agents
    agentsBadge: 'AGENTES IA',
    agentsTitle: 'Despliega Agentes de ',
    agentsTitleGrad: 'Voz IA Especializados',
    agentsSubtitle: 'Construye agentes diseñados para cada etapa del viaje de tu cliente.',
    agent1Title: 'Llamador Saliente',
    agent1Desc: 'Prospección automatizada a gran escala con conversaciones de IA personalizadas.',
    agent1F1: '1,000+ llamadas simultáneas',
    agent1F2: 'Scripts dinámicos por lead',
    agent1F3: 'Manejo inteligente de objeciones',
    agent1F4: 'Auto-etiquetado en CRM',
    agent2Title: 'Agente Entrante',
    agent2Desc: 'Recibe y maneja llamadas entrantes con enrutamiento inteligente y respuestas instantáneas.',
    agent2F1: 'Disponibilidad 24/7 entrante',
    agent2F2: 'Transferencia y escalación',
    agent2F3: 'Preguntas y respuestas de base de conocimiento',
    agent2F4: 'Agendamiento en tiempo real',
    agent3Title: 'Chatbot IA',
    agent3Desc: 'Agentes de texto con integración de flujos n8n para comunicación omnicanal.',
    agent3F1: 'Automatización con n8n',
    agent3F2: 'Widget embebible en sitio web',
    agent3F3: 'Captura y calificación de leads',
    agent3F4: 'Soporte multi-canal',

    // Integrations
    intBadge: 'INTEGRACIONES',
    intTitle: 'Se Conecta Con Todo Tu ',
    intTitleGrad: 'Stack Tecnológico',
    intSubtitle: 'Integraciones nativas con las herramientas que ya usas. Más de 6,000 apps vía webhooks y API.',
    int1: 'GoHighLevel',
    int2: 'Google Calendar',
    int3: 'Calendly',
    int4: 'HubSpot',
    int5: 'Cal.com',
    int6: 'Twilio',
    int7: 'ElevenLabs',
    int8: 'OpenAI',
    int9: 'Slack',
    int10: 'n8n',

    // Comparison
    compBadge: 'COMPARACIÓN',
    compTitle: 'Representantes vs ',
    compTitleGrad: 'Sword AI',
    compSubtitle: 'Descubre por qué las empresas están reemplazando llamadas manuales con agentes de voz IA.',
    compMetric: 'Métrica',
    compHuman: 'Rep Humano',
    compAI: 'Sword AI',
    compRow1: ['Costo Mensual', '$3,000-5,000/rep', 'Desde $297/mes'],
    compRow2: ['Disponibilidad', '9 a 5', '24/7/365'],
    compRow3: ['Llamadas Simultáneas', '1', '1,000+'],
    compRow4: ['Tiempo de Capacitación', 'Semanas / Meses', 'Minutos'],
    compRow5: ['Consistencia', 'Variable', '100% Consistente'],
    compRow6: ['Escalabilidad', 'Contratar más reps', 'Instantánea'],
    compRow7: ['Idiomas', '1-2', '20+'],

    // Stats
    stat1: '20+',
    stat1Label: 'Modelos de IA Soportados',
    stat2: '6,000+',
    stat2Label: 'Integraciones de Apps',
    stat3: '50+',
    stat3Label: 'Voces Premium',
    stat4: '24/7',
    stat4Label: 'Siempre Disponible',

    // How it works
    howBadge: 'CÓMO FUNCIONA',
    howTitle: 'Lanza Tu Agente IA en ',
    howTitleGrad: '3 Pasos',
    howSubtitle: 'De cero a hacer llamadas en menos de 30 minutos. Sin conocimientos técnicos.',
    step1Title: 'Crea Tu Agente',
    step1Desc: 'Elige saliente o entrante, selecciona tu modelo de IA y voz, escribe tu prompt y objetivos. Nuestro generador de agentes puede incluso escribirlo por ti.',
    step2Title: 'Conecta Tus Herramientas',
    step2Desc: 'Importa tus números de Twilio, conecta tu CRM (GoHighLevel, HubSpot), vincula tu calendario (Google, Calendly, Cal.com) y configura webhooks.',
    step3Title: 'Lanza y Monitorea',
    step3Desc: 'Comienza a hacer llamadas al instante. Rastrea resultados, tasas de agendamiento y costos en tiempo real. Escala de 10 a 10,000 llamadas por día.',

    // Pricing
    pricingBadge: 'PRECIOS',
    pricingTitle: 'Pago Transparente ',
    pricingTitleGrad: 'Por Uso',
    pricingSubtitle: 'Precio dinámico por minuto basado en tu modelo de IA y transcripción elegidos. Sin costos ocultos.',
    plan1Name: 'Starter',
    plan1Price: '$297',
    plan1Period: '/mes',
    plan1Desc: 'Para agentes individuales y equipos pequeños que comienzan.',
    plan1F1: '500 minutos/mes',
    plan1F2: 'Hasta 3 agentes',
    plan1F3: 'GPT-4o y Claude 3.5',
    plan1F4: 'Integración calendario',
    plan1F5: 'Soporte por email',
    plan1CTA: 'Prueba Gratis',
    plan2Name: 'Professional',
    plan2Price: '$697',
    plan2Period: '/mes',
    plan2Desc: 'Para negocios en crecimiento que necesitan más agentes y poder.',
    plan2F1: '2,500 minutos/mes',
    plan2F2: 'Agentes ilimitados',
    plan2F3: 'Todos los 20+ modelos IA',
    plan2F4: 'Analíticas avanzadas',
    plan2F5: 'Soporte prioritario',
    plan2F6: 'Voces personalizadas',
    plan2CTA: 'Prueba Gratis',
    plan3Name: 'Agencia',
    plan3Price: 'Custom',
    plan3Period: '',
    plan3Desc: 'Plataforma marca blanca para agencias que gestionan múltiples clientes.',
    plan3F1: 'Minutos ilimitados',
    plan3F2: 'Gestión de clientes',
    plan3F3: 'Branding personalizado',
    plan3F4: 'Tarifas personalizables',
    plan3F5: 'Cumplimiento HIPAA',
    plan3F6: 'Soporte dedicado',
    plan3CTA: 'Contactar Ventas',
    popular: 'Más Popular',

    // Demo
    navDemo: 'Probar Demo',
    demoBadge: 'DEMO EN VIVO',
    demoTitle: 'Prueba Tu Agente IA ',
    demoTitleGrad: 'Ahora Mismo',
    demoSubtitle: 'Genera un agente de chat y voz IA personalizado para tu negocio en segundos. Sin registro.',
    demoLabelName: 'Tu Nombre',
    demoLabelBusiness: 'Nombre del Negocio *',
    demoLabelIndustry: 'Industria *',
    demoSelectIndustry: 'Selecciona una industria',
    demoLabelObjective: 'Objetivo del Agente *',
    demoLabelType: 'Tipo de Agente *',
    demoLabelLanguage: 'Idioma *',
    demoLabelTone: 'Tono / Estilo',
    demoLabelFAQ: 'Preguntas Frecuentes (opcional)',
    demoLabelObjections: 'Objeciones Comunes (opcional)',
    demoGenerate: 'Generar Demo',
    demoLoadingTitle: 'Generando tu agente IA...',
    demoLoadingSubtitle: 'Esto puede tomar un momento. Estamos creando el prompt perfecto para tu negocio.',
    demoResultsTitle: 'Demo de Tu Agente IA',
    demoStartOver: 'Empezar de Nuevo',
    demoChatTab: 'Demo de Chat',
    demoVoiceTab: 'Demo de Voz',
    demoChatPlaceholder: 'Escribe un mensaje...',
    demoVoiceSelect: 'Selecciona la Voz del Agente',
    demoCallReady: 'Listo para iniciar llamada de voz',
    demoTranscript: 'Transcripción en Vivo',
    demoBookText: '¿Listo para desplegar este agente IA para tu negocio? Agenda una llamada gratis con nuestro equipo.',
    demoBookCTA: 'Agenda Tu Llamada Gratis',

    // CTA
    ctaTitle: '¿Listo Para Crear Tu Primer ',
    ctaTitleGrad: 'Agente de Voz IA?',
    ctaSubtitle: 'Agenda una sesión de crecimiento gratuita de 30 minutos con nuestro equipo y ve Sword AI en acción.',
    ctaCTA: 'Agenda Tu Sesión',

    // Footer
    footerDesc: 'La plataforma sin código para crear, desplegar y escalar agentes de voz IA y chatbots para ventas, soporte y automatización.',
    footerProduct: 'Producto',
    footerCompany: 'Empresa',
    footerLegal: 'Legal',
    footerPricing: 'Precios',
    footerVoiceAgents: 'Agentes de Voz',
    footerChatbots: 'Chatbots',
    footerIntegrations: 'Integraciones',
    footerAPI: 'API y Webhooks',
    footerAbout: 'Nosotros',
    footerCareers: 'Carreras',
    footerBlog: 'Blog',
    footerContact: 'Contacto',
    footerTerms: 'Términos de Servicio',
    footerPrivacy: 'Política de Privacidad',
    footerHIPAA: 'Cumplimiento HIPAA',
    footerCopyright: '© 2025 Sword AI. Todos los derechos reservados.',
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Update elements with data-i18n-html (for innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update language toggle buttons (all instances)
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Restart typing animation with new words
  startTypingAnimation(t.heroTypingWords);

  // Update comparison table
  updateComparisonTable(t);

  localStorage.setItem('sword-ai-lang', lang);
}

function updateComparisonTable(t) {
  const rows = document.querySelectorAll('.comparison-row:not(.header-row)');
  const rowData = [t.compRow1, t.compRow2, t.compRow3, t.compRow4, t.compRow5, t.compRow6, t.compRow7];
  rows.forEach((row, i) => {
    if (rowData[i]) {
      const cells = row.querySelectorAll('.comparison-cell');
      cells[0].textContent = rowData[i][0];
      cells[1].textContent = rowData[i][1];
      cells[2].textContent = rowData[i][2];
    }
  });
}

// ========== TYPING ANIMATION ==========
let typingTimeout = null;
let currentWordIndex = 0;

function startTypingAnimation(words) {
  if (typingTimeout) clearTimeout(typingTimeout);

  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  currentWordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentWord = words[0];

  function type() {
    if (!isDeleting) {
      typingEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        typingTimeout = setTimeout(() => { isDeleting = true; type(); }, 2000);
        return;
      }
    } else {
      typingEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWord = words[currentWordIndex];
      }
    }
    typingTimeout = setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
}

// ========== CALL TIMER ANIMATION ==========
function startCallTimer() {
  const timerEl = document.getElementById('call-timer');
  if (!timerEl) return;

  let seconds = 167; // Start at 2:47
  setInterval(() => {
    seconds++;
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    timerEl.textContent = `${min}:${sec}`;
  }, 1000);
}

// ========== HEADER SCROLL ==========
function initHeaderScroll() {
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ========== MOBILE NAV ==========
function initMobileNav() {
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => mobileNav.classList.add('open'));
  closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ========== LOGO SCROLL ==========
function initLogoScroll() {
  const track = document.querySelector('.logos-track');
  if (!track) return;
  track.innerHTML += track.innerHTML;
}

// ========== DEMO ENGINE ==========
const DEMO_API = 'https://app.swordaisolutions.com/api/demo';

const DEMO_VOICES = {
  English: [
    { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel', desc: 'Female — Warm & Friendly' },
    { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah', desc: 'Female — Soft & Professional' },
    { id: 'XB0fDUnXU5powFXDhCwa', name: 'Charlotte', desc: 'Female — Confident' },
    { id: 'pFZP5JQG7iQjIQuC4Bku', name: 'Lily', desc: 'Female — British' },
    { id: 'pNInz6obpgDQGcFmaJgB', name: 'Adam', desc: 'Male — Deep & Authoritative' },
    { id: 'TxGEqnHWrfWFTfGW9XjX', name: 'Josh', desc: 'Male — Narrative' },
    { id: 'ErXwobaYiN019PkySvjV', name: 'Antoni', desc: 'Male — Friendly' },
    { id: '29vD33N1CtxCmqQRPOHJ', name: 'Drew', desc: 'Male — Confident & Warm' },
  ],
  Spanish: [
    { id: 'FGY2WhFZPnopRgpkkpcg', name: 'Laura', desc: 'Femenina — Cálida y Natural' },
    { id: 'XrExE9yKIg1WjnnlVkGX', name: 'Matilda', desc: 'Femenina — Profesional' },
    { id: 'Xb7hH8MSUJpSbSDYk0k2', name: 'Alice', desc: 'Femenina — Clara y Amable' },
    { id: 'cgSgspJ2msm6clMCkdW9', name: 'Jessica', desc: 'Femenina — Expresiva' },
    { id: 'TX3LPaxmHKxFdv7VOQHJ', name: 'Liam', desc: 'Masculina — Confiable' },
    { id: 'nPczCjzI2devNBz1zQrb', name: 'Brian', desc: 'Masculina — Narrativo' },
    { id: 'cjVigY5qzO86Huf0OWal', name: 'Eric', desc: 'Masculina — Amigable' },
    { id: 'pqHfZKP75CvOlQylNhV4', name: 'Bill', desc: 'Masculina — Seguro' },
  ],
};

const demo = {
  demoId: null,
  voicebotPrompt: '',
  firstMessage: '',
  agentType: 'inbound',
  selectedLanguage: 'English',
  selectedVoice: null,
  isSending: false,
  // Voice state
  vapi: null,
  callStatus: 'idle',
  muted: false,
  elapsed: 0,
  timerInterval: null,
};

function initDemo() {
  const form = document.getElementById('demo-form');
  if (!form) return;

  // Agent type toggle
  document.querySelectorAll('.demo-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.demo-type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      demo.agentType = btn.dataset.type;
    });
  });

  // Form submit
  form.addEventListener('submit', handleDemoSubmit);

  // Tabs
  document.querySelectorAll('.demo-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('demo-chat-tab').style.display = tab.dataset.tab === 'chat' ? '' : 'none';
      document.getElementById('demo-voice-tab').style.display = tab.dataset.tab === 'voice' ? '' : 'none';
    });
  });

  // Chat input
  const chatInput = document.getElementById('demo-chat-input');
  chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendDemoChat(); }
  });
  document.getElementById('demo-send-btn').addEventListener('click', sendDemoChat);

  // Start over
  document.getElementById('demo-start-over').addEventListener('click', demoStartOver);

  // Voice controls
  document.getElementById('demo-call-btn').addEventListener('click', handleCallToggle);
  document.getElementById('demo-mute-btn').addEventListener('click', toggleDemoMute);

  // Init voice grid with default language
  renderVoiceGrid('English');
}

async function handleDemoSubmit(e) {
  e.preventDefault();
  const errorEl = document.getElementById('demo-error');
  errorEl.style.display = 'none';

  const businessName = document.getElementById('demo-businessName').value.trim();
  const industry = document.getElementById('demo-industry').value;
  const agentObjective = document.getElementById('demo-agentObjective').value.trim();

  if (!businessName || !industry || !agentObjective) {
    errorEl.textContent = 'Please fill in all required fields.';
    errorEl.style.display = '';
    return;
  }

  const lang = document.getElementById('demo-language').value;
  demo.selectedLanguage = lang;

  const body = {
    callerName: document.getElementById('demo-callerName').value.trim(),
    businessName,
    industry,
    agentObjective,
    agentType: demo.agentType,
    language: lang,
    tone: document.getElementById('demo-tone').value,
    faq: document.getElementById('demo-faq').value.trim(),
    objections: document.getElementById('demo-objections').value.trim(),
  };

  // Switch to loading
  document.getElementById('demo-form-phase').style.display = 'none';
  document.getElementById('demo-loading-phase').style.display = '';

  try {
    const res = await fetch(`${DEMO_API}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(err.error || 'Failed to generate demo.');
    }

    const data = await res.json();
    demo.demoId = data.demoId;
    demo.voicebotPrompt = data.voicebotPrompt;
    demo.firstMessage = data.firstMessage;

    // Set first message in chat
    const messagesEl = document.getElementById('demo-messages');
    messagesEl.innerHTML = '';
    appendDemoMessage('assistant', data.firstMessage);

    // Render voice grid for selected language
    renderVoiceGrid(lang);

    // Switch to results
    document.getElementById('demo-loading-phase').style.display = 'none';
    document.getElementById('demo-results-phase').style.display = '';
  } catch (err) {
    document.getElementById('demo-loading-phase').style.display = 'none';
    document.getElementById('demo-form-phase').style.display = '';
    errorEl.textContent = err.message;
    errorEl.style.display = '';
  }
}

function appendDemoMessage(role, content) {
  const messagesEl = document.getElementById('demo-messages');
  const div = document.createElement('div');
  div.className = `demo-msg ${role}`;
  div.textContent = content;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

async function sendDemoChat() {
  const input = document.getElementById('demo-chat-input');
  const text = input.value.trim();
  if (!text || demo.isSending) return;

  input.value = '';
  demo.isSending = true;
  document.getElementById('demo-send-btn').disabled = true;

  appendDemoMessage('user', text);

  // Typing indicator
  const typingDiv = document.createElement('div');
  typingDiv.className = 'demo-msg assistant typing';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  document.getElementById('demo-messages').appendChild(typingDiv);
  document.getElementById('demo-messages').scrollTop = document.getElementById('demo-messages').scrollHeight;

  try {
    const res = await fetch(`${DEMO_API}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ demoId: demo.demoId, message: text }),
    });

    // Remove typing indicator
    typingDiv.remove();

    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: 'Request failed' }));
      appendDemoMessage('assistant', err.error || 'Something went wrong.');
      demo.isSending = false;
      document.getElementById('demo-send-btn').disabled = false;
      return;
    }

    // Stream response
    const msgDiv = appendDemoMessage('assistant', '');
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6);
        if (data === '[DONE]') break;
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) {
            msgDiv.textContent = parsed.error;
            demo.isSending = false;
            document.getElementById('demo-send-btn').disabled = false;
            return;
          }
          if (parsed.content) {
            fullText += parsed.content;
            msgDiv.textContent = fullText;
            document.getElementById('demo-messages').scrollTop = document.getElementById('demo-messages').scrollHeight;
          }
        } catch {}
      }
    }
  } catch {
    typingDiv.remove();
    appendDemoMessage('assistant', 'Network error. Please try again.');
  }

  demo.isSending = false;
  document.getElementById('demo-send-btn').disabled = false;
  input.focus();
}

function renderVoiceGrid(language) {
  const voices = DEMO_VOICES[language] || DEMO_VOICES.English;
  const grid = document.getElementById('demo-voice-grid');
  grid.innerHTML = '';
  demo.selectedVoice = voices[0].id;

  voices.forEach(v => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'demo-voice-btn' + (v.id === demo.selectedVoice ? ' active' : '');
    btn.innerHTML = `<span class="voice-name">${v.name}</span><span class="voice-desc">${v.desc}</span>`;
    btn.addEventListener('click', () => {
      grid.querySelectorAll('.demo-voice-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      demo.selectedVoice = v.id;
    });
    grid.appendChild(btn);
  });
}

async function handleCallToggle() {
  if (demo.callStatus === 'idle' || demo.callStatus === 'ended') {
    await startDemoCall();
  } else if (demo.callStatus === 'active') {
    stopDemoCall();
  }
}

async function startDemoCall() {
  const errorEl = document.getElementById('demo-voice-error');
  errorEl.style.display = 'none';

  setCallUI('connecting');

  try {
    // Fetch VAPI public key
    const keyRes = await fetch(`${DEMO_API}/vapi-key`);
    if (!keyRes.ok) {
      const err = await keyRes.json().catch(() => ({}));
      throw new Error(err.error || 'Voice calling is not configured.');
    }
    const { vapiPublicKey } = await keyRes.json();

    // Load VAPI SDK dynamically via ES module
    if (!window._VapiClass) {
      const module = await import('https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/+esm');
      window._VapiClass = module.default;
    }

    const vapi = new window._VapiClass(vapiPublicKey);
    demo.vapi = vapi;

    vapi.on('call-start', () => {
      demo.callStatus = 'active';
      setCallUI('active');
      demo.elapsed = 0;
      demo.timerInterval = setInterval(() => {
        demo.elapsed++;
        const timerEl = document.getElementById('demo-call-timer');
        const m = Math.floor(demo.elapsed / 60).toString().padStart(2, '0');
        const s = (demo.elapsed % 60).toString().padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
      }, 1000);
    });

    vapi.on('call-end', () => {
      demo.callStatus = 'ended';
      setCallUI('ended');
      clearInterval(demo.timerInterval);
    });

    vapi.on('message', msg => {
      if (msg.type === 'transcript' && msg.transcriptType === 'final') {
        addTranscriptEntry(msg.role === 'assistant' ? 'agent' : 'user', msg.role === 'assistant' ? 'Agent' : 'You', msg.transcript);
      } else if (msg.type === 'conversation-update' && msg.conversation) {
        const body = document.getElementById('demo-transcript');
        body.innerHTML = '';
        msg.conversation.filter(m => m.role === 'assistant' || m.role === 'user').forEach(m => {
          addTranscriptEntry(m.role === 'assistant' ? 'agent' : 'user', m.role === 'assistant' ? 'Agent' : 'You', m.content);
        });
      }
    });

    vapi.on('error', err => {
      demo.callStatus = 'ended';
      setCallUI('ended');
      clearInterval(demo.timerInterval);
      addTranscriptEntry('system', 'System', `Error: ${err.message || 'Call failed'}`);
    });

    await vapi.start({
      model: {
        provider: 'openai',
        model: 'gpt-4o-mini',
        messages: [{ role: 'system', content: demo.voicebotPrompt }],
      },
      voice: {
        provider: '11labs',
        voiceId: demo.selectedVoice,
        ...(demo.selectedLanguage !== 'English' && { model: 'eleven_multilingual_v2' }),
      },
      firstMessage: demo.firstMessage,
    });
  } catch (err) {
    demo.callStatus = 'idle';
    setCallUI('idle');
    errorEl.textContent = err.message || 'Failed to start voice call.';
    errorEl.style.display = '';
  }
}

function stopDemoCall() {
  if (demo.vapi) {
    demo.vapi.stop();
    demo.vapi = null;
  }
  clearInterval(demo.timerInterval);
  demo.callStatus = 'ended';
  setCallUI('ended');
}

function toggleDemoMute() {
  if (!demo.vapi) return;
  demo.muted = !demo.muted;
  demo.vapi.setMuted(demo.muted);
  document.getElementById('demo-mute-btn').classList.toggle('muted', demo.muted);
}

function setCallUI(status) {
  const callBtn = document.getElementById('demo-call-btn');
  const muteBtn = document.getElementById('demo-mute-btn');
  const statusEl = document.getElementById('demo-call-status');
  const timerEl = document.getElementById('demo-call-timer');
  const micGlow = document.getElementById('demo-mic-glow');
  const micCircle = document.getElementById('demo-mic-circle');
  const voiceSelector = document.getElementById('demo-voice-selector');

  // Reset classes
  micGlow.className = 'demo-mic-glow';
  micCircle.className = 'demo-mic-circle';
  callBtn.className = 'demo-call-btn';

  if (status === 'idle') {
    callBtn.classList.add('demo-call-start');
    callBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>';
    callBtn.disabled = false;
    muteBtn.style.display = 'none';
    timerEl.style.display = 'none';
    statusEl.textContent = 'Ready to start voice call';
    voiceSelector.style.display = '';
  } else if (status === 'connecting') {
    micGlow.classList.add('connecting');
    micCircle.classList.add('connecting');
    callBtn.classList.add('demo-call-connecting');
    callBtn.innerHTML = '<div class="demo-spinner" style="width:24px;height:24px;margin:0;border-width:2px"></div>';
    callBtn.disabled = true;
    muteBtn.style.display = 'none';
    timerEl.style.display = 'none';
    statusEl.textContent = 'Connecting...';
    voiceSelector.style.display = 'none';
    // Clear transcript
    document.getElementById('demo-transcript').innerHTML = '<div class="transcript-placeholder">Waiting for conversation...</div>';
  } else if (status === 'active') {
    micGlow.classList.add('active');
    micCircle.classList.add('active');
    callBtn.classList.add('demo-call-end');
    callBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3.68 16.07l3.92-3.11V9.59c2.85-.93 5.94-.93 8.8 0v3.38l3.91 3.1c.46.36.66.96.5 1.52-.5 1.58-1.33 3.04-2.43 4.28-.37.42-.92.63-1.48.55-1.98-.29-3.86-.97-5.53-1.96a18.8 18.8 0 01-5.53 1.96c-.56.08-1.11-.13-1.48-.55-1.1-1.24-1.93-2.7-2.43-4.28a1.47 1.47 0 01.5-1.52h.25z"/></svg>';
    callBtn.disabled = false;
    muteBtn.style.display = '';
    timerEl.style.display = '';
    statusEl.textContent = 'Call active — speak into your microphone';
    voiceSelector.style.display = 'none';
  } else if (status === 'ended') {
    callBtn.classList.add('demo-call-start');
    callBtn.innerHTML = '<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>';
    callBtn.disabled = false;
    muteBtn.style.display = 'none';
    statusEl.textContent = 'Call ended';
    voiceSelector.style.display = '';
  }
}

function addTranscriptEntry(type, label, text) {
  const body = document.getElementById('demo-transcript');
  // Remove placeholder if present
  const placeholder = body.querySelector('.transcript-placeholder');
  if (placeholder) placeholder.remove();

  const div = document.createElement('div');
  div.className = `transcript-entry ${type}`;
  div.innerHTML = `<span class="label">${label}:</span> ${text}`;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function demoStartOver() {
  // Stop voice call if active
  if (demo.vapi) { demo.vapi.stop(); demo.vapi = null; }
  clearInterval(demo.timerInterval);

  // Reset state
  demo.demoId = null;
  demo.voicebotPrompt = '';
  demo.firstMessage = '';
  demo.callStatus = 'idle';
  demo.muted = false;
  demo.elapsed = 0;

  // Reset UI
  document.getElementById('demo-results-phase').style.display = 'none';
  document.getElementById('demo-form-phase').style.display = '';
  document.getElementById('demo-error').style.display = 'none';
  document.getElementById('demo-voice-error').style.display = 'none';
  document.getElementById('demo-messages').innerHTML = '';
  document.getElementById('demo-transcript').innerHTML = '<div class="transcript-placeholder">Select a voice and click the call button to talk to your AI agent</div>';
  document.getElementById('demo-chat-input').value = '';

  // Reset tabs to chat
  document.querySelectorAll('.demo-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.demo-tab[data-tab="chat"]').classList.add('active');
  document.getElementById('demo-chat-tab').style.display = '';
  document.getElementById('demo-voice-tab').style.display = 'none';

  setCallUI('idle');
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('sword-ai-lang');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
  const lang = saved || browserLang;

  // Init language toggle (all instances)
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  setLanguage(lang);

  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initSmoothScroll();
  initLogoScroll();
  startCallTimer();
  initDemo();
});
