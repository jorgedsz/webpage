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
});
