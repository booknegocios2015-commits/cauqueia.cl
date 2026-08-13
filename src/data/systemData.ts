import { SystemPillar, ProblemItem, AcquisitionChannel, MethodologyStep, CaseStudyPlaceholder } from '../types';

export const SYSTEM_PILLARS: SystemPillar[] = [
  {
    id: 'web',
    title: 'WEB INTELIGENTE',
    subtitle: 'Captación & Conversión',
    description: 'Mucho más que una vitrina digital: una interfaz optimizada de alta velocidad diseñada para captar la atención, comunicar la propuesta de valor y activar la conversación inmediatamente.',
    iconName: 'Globe',
    color: '#00F0FF',
    features: [
      'Carga ultrarrápida en < 1 segundo',
      'Arquitectura orientada a la conversión',
      'Integración nativa con WhatsApp API',
      'Captura dinámica de contexto y fuente del usuario'
    ]
  },
  {
    id: 'whatsapp',
    title: 'WHATSAPP API',
    subtitle: 'Canal Directo Comercial',
    description: 'La vía de comunicación con mayor tasa de apertura global. Conectamos WhatsApp Business API oficial para gestionar conversaciones masivas sin bloqueos y con trazabilidad.',
    iconName: 'MessageSquare',
    color: '#22C55E',
    features: [
      'Conexión oficial WhatsApp API',
      'Atención simultánea multicanal',
      'Plantillas verificadas e interactividad',
      'Transferencia fluida a ejecutivos humanos'
    ]
  },
  {
    id: 'ia',
    title: 'AGENTE IA',
    subtitle: 'Calificación & Respuesta 24/7',
    description: 'Inteligencia Artificial entrenada específicamente con tu información comercial. Responde preguntas, detecta intención de compra, califica leads y agenda reuniones en segundos.',
    iconName: 'Bot',
    color: '#00F0FF',
    features: [
      'Atención ininterrumpida 24 horas, 365 días',
      'Detección de intención comercial y scoring',
      'Respuestas naturales y contextualizadas',
      'Filtrado automático de prospectos no calificados'
    ]
  },
  {
    id: 'crm',
    title: 'CRM INTEGRADO',
    subtitle: 'Gestión de Pipeline Comercial',
    description: 'Centralización absoluta. Toda interacción de WhatsApp y la web ingresa automáticamente con etiqueta, origen y nivel de prioridad para que tu equipo comercial ejecute y cierre.',
    iconName: 'LayoutGrid',
    color: '#3D5AFE',
    features: [
      'Sincronización instantánea en tiempo real',
      'Etiquetado por canal de origen (Ads, SEO, Directo)',
      'Alertas de seguimiento prioritario',
      'Métricas de conversión por etapa comercial'
    ]
  }
];

export const DISCONNECTED_PROBLEMS: ProblemItem[] = [
  { id: '1', name: 'WEB TRADICIONAL', status: 'Sin conexión', issue: 'Visitas sin convertir ni capturar datos.', icon: 'Globe' },
  { id: '2', name: 'GOOGLE & REDES', status: 'Tráfico desperdiciado', issue: 'Inversión publicitaria sin trazabilidad exacta.', icon: 'Share2' },
  { id: '3', name: 'PUBLICIDAD ADS', status: 'Costo elevado', issue: 'Leads fríos que abandonan antes de consultar.', icon: 'Target' },
  { id: '4', name: 'WHATSAPP MANUAL', status: 'Información perdida', issue: 'Mensajes sin responder a tiempo en fin de semana.', icon: 'MessageCircle' },
  { id: '5', name: 'VENDEDORES', status: 'Seguimiento manual', issue: 'Tiempo invertido en prospectos no calificados.', icon: 'UserX' },
  { id: '6', name: 'CRM AISLADO', status: 'Lead desactualizado', issue: 'Base de datos incompleta y desorganizada.', icon: 'Database' }
];

export const ACQUISITION_CHANNELS: AcquisitionChannel[] = [
  { name: 'GOOGLE SEARCH & SEO', type: 'Orgánico', badge: 'Alta Intención', description: 'Búsquedas activas de usuarios buscando resolver su necesidad inmediata.', trafficVolume: 'Alto impacto' },
  { name: 'SEO LOCAL & GOOGLE MAPS', type: 'Local', badge: 'Alta Proximidad', description: 'Captación de clientes cercanos listos para agendar o visitar.', trafficVolume: 'Alta conversión' },
  { name: 'GOOGLE ADS', type: 'Pago por Clic', badge: 'Tráfico Inmediato', description: 'Anuncios hiper-segmentados para palabras clave de compra.', trafficVolume: 'Escalable' },
  { name: 'META ADS (IG & FB)', type: 'Redes Sociales', badge: 'Generación de Demanda', description: 'Campañas visuales de captación de clientes ideales.', trafficVolume: 'Volumen alto' },
  { name: 'REDES SOCIALES ORGANICAS', type: 'Marca', badge: 'Autoridad', description: 'Contenido estratégico que genera confianza e interés.', trafficVolume: 'Nurturing' }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'DIAGNÓSTICO',
    subtitle: 'Auditoría Comercial Digital',
    description: 'Analizamos tu proceso actual de ventas, fuentes de tráfico, tiempos de respuesta e inconsistencias operativas.',
    deliverables: ['Mapa de fricciones', 'Definición de cliente ideal', 'Cálculo de fuga de prospectos']
  },
  {
    number: '02',
    title: 'ESTRATEGIA',
    subtitle: 'Diseño de la Arquitectura',
    description: 'Modelamos el flujo comercial punta a punta: mensajes, prompts del Agente IA, etapas del CRM y gatilladores.',
    deliverables: ['Diagrama de flujo del sistema', 'Guión de calificación del Agente IA', 'Estructura de CRM']
  },
  {
    number: '03',
    title: 'IMPLEMENTACIÓN',
    subtitle: 'Desarrollo & Configuración',
    description: 'Construimos la Web Inteligente, integramos la API de WhatsApp, entrenamos la Inteligencia Artificial y configuramos el CRM.',
    deliverables: ['Web Inteligente desplegada', 'Agente IA entrenado', 'API WhatsApp conectada']
  },
  {
    number: '04',
    title: 'CAPTACIÓN',
    subtitle: 'Conexión de Canales',
    description: 'Conectamos tus fuentes de tráfico (Google, Meta, SEO) hacia la infraestructura para iniciar el flujo continuo.',
    deliverables: ['Puntos de entrada configurados', 'Parámetros UTM activos', 'Trazabilidad habilitada']
  },
  {
    number: '05',
    title: 'AUTOMATIZACIÓN',
    subtitle: 'Puesta en Marcha en Vivo',
    description: 'Activamos las respuestas automatizadas 24/7 y la cualificación inmediata de cada prospecto que ingresa.',
    deliverables: ['Alertas a vendedores activas', 'Traspaso automático a CRM', 'Pruebas de estrés superadas']
  },
  {
    number: '06',
    title: 'OPTIMIZACIÓN',
    subtitle: 'Ajuste Continuo de Datos',
    description: 'Revisamos interacciones reales para afinar los prompts del Agente IA, tasas de conversión y tiempos de cierre.',
    deliverables: ['Reportes de desempeño', 'Ajustes en conversaciones', 'Incremento continuo de conversion']
  }
];

export const CASE_STUDY_PLACEHOLDERS: CaseStudyPlaceholder[] = [
  {
    id: 'case-1',
    companyCategory: 'SECTOR INMOBILIARIO & PROYECTOS',
    challenge: 'Pérdida de prospectos por respuesta tardía fuera del horario laboral y CRM desincronizado.',
    systemImplemented: ['Web Inteligente de Proyectos', 'Agente IA con catálogo de propiedades', 'WhatsApp API integrado', 'CRM con pipeline de tasación'],
    outcomeSummary: 'Infraestructura activa recibiendo y calificando prospectos de alta intención 24/7.',
    badgeText: 'Marco de Sistema Implementado'
  },
  {
    id: 'case-2',
    companyCategory: 'ESTUDIO JURÍDICO & SALUD ESPECIALIZADA',
    challenge: 'Consultas genéricas no filtradas que consumían horas de especialistas sin disposición de pago.',
    systemImplemented: ['Landing de Alta Conversión', 'Agente IA con cuestionario de calificación legal', 'Derivación por prioridad', 'Agenda sincronizada'],
    outcomeSummary: 'Filtrado previo del 100% de consultas, entregando solo oportunidades calificadas.',
    badgeText: 'Marco de Sistema Implementado'
  },
  {
    id: 'case-3',
    companyCategory: 'SERVICIOS B2B Y EMPRESAS EN CRECIMIENTO',
    challenge: 'Múltiples canales de publicidad (Google & Meta) sin medición de conversión real hacia ventas.',
    systemImplemented: ['Embudo de Trafico Convergente', 'Agente IA de Cotizaciones', 'Trazabilidad UTM en CRM', 'Pipeline de Negociación'],
    outcomeSummary: 'Visibilidad completa del retorno por canal e historial unificado de cada prospecto.',
    badgeText: 'Marco de Sistema Implementado'
  }
];
