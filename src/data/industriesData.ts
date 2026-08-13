import { Industry } from '../types';

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'abogados',
    name: 'ABOGADOS',
    tagline: 'Estudios Jurídicos y Consultoría Legal',
    description: 'Sistema diseñado para clasificar materias legales, verificar urgencia de caso y agendar directamente en la agenda del especialista.',
    icon: 'Scale',
    challenge: 'Alto volumen de consultas sin filtro previo ni capacidad de pago identificada.',
    solution: 'Cuestionario interactivo inteligente que califica la viabilidad jurídica y capacidad de pago antes de otorgar una hora.',
    flow: [
      { stage: '01 CONSULTA', action: 'Búsqueda por servicio legal en Google', actor: 'Cliente con urgencia', detail: 'Ingresa a la Web Inteligente desde anuncio o SEO' },
      { stage: '02 WHATSAPP', action: 'Apertura inmediata de conversación', actor: 'WhatsApp API', detail: 'Mensaje contextualizado con la materia requerida' },
      { stage: '03 AGENTE IA', action: 'Evaluación de tipo de caso y presupuesto', actor: 'Agente IA Jurídico', detail: 'Determina si cumple criterios de viabilidad' },
      { stage: '04 LEAD CALIFICADO', action: 'Agendamiento de consulta pagada', actor: 'Sistema Automatizado', detail: 'Manda enlace de pago o reserva en calendario' },
      { stage: '05 CRM', action: 'Creación de ficha jurídica del cliente', actor: 'Abogado asignado', detail: 'Revisa antecedentes resumidos antes de la reunión' }
    ]
  },
  {
    id: 'clinicas',
    name: 'CLÍNICAS',
    tagline: 'Centros Médicos, Estéticos y Odontología',
    description: 'Automatización de reservas médicas, pre-evaluación de tratamientos y recordatorios automáticos para reducir inasistencias.',
    icon: 'Activity',
    challenge: 'Líneas telefónicas ocupadas y ausentismo en horas agendadas.',
    solution: 'Atención 24/7 para reservas inmediatas por WhatsApp con confirmación interactiva.',
    flow: [
      { stage: '01 BÚSQUEDA', action: 'Búsqueda de especialidad o procedimiento', actor: 'Paciente potencial', detail: 'Web Inteligente muestra precios y disponibilidad' },
      { stage: '02 WHATSAPP', action: 'Solicitud de hora o evaluación', actor: 'WhatsApp API', detail: 'Atención sin esperas telefónicas' },
      { stage: '03 AGENTE IA', action: 'Preguntas de triaje y disponibilidad', actor: 'Agente IA Médico', detail: 'Muestra bloques horarios disponibles' },
      { stage: '04 CONFIRMACIÓN', action: 'Reserva y envío de indicaciones', actor: 'Sistema de Agenda', detail: 'Recordatorio automático pre-atención' },
      { stage: '05 CRM', action: 'Registro en ficha de paciente', actor: 'Recepción y Médicos', detail: 'Estado del paciente listo en pantalla' }
    ]
  },
  {
    id: 'constructoras',
    name: 'CONSTRUCTORAS',
    tagline: 'Obras Civiles, Remodelaciones y Proyectos',
    description: 'Captación de requerimientos técnicos, dimensiones de proyecto y presupuesto estimado para cotizaciones B2B.',
    icon: 'HardHat',
    challenge: 'Procesos de cotización lentos por falta de especificaciones iniciales del cliente.',
    solution: 'Agente IA que recopila plano, metraje y plazos requeridos para entregar un pre-presupuesto estándar.',
    flow: [
      { stage: '01 TRÁFICO', action: 'Campañas B2B en Google Search y Meta Ads', actor: 'Mandante o Empresa', detail: 'Llegada a Landing Técnica' },
      { stage: '02 WHATSAPP', action: 'Solicitud de presupuesto de construcción', actor: 'WhatsApp API', detail: 'Inicio de toma de requerimientos' },
      { stage: '03 AGENTE IA', action: 'Recolección de metraje, ubicación y plazo', actor: 'Agente IA Técnico', detail: 'Calcula rango estimado de inversión' },
      { stage: '04 EVALUACIÓN', action: 'Asignación a Ingeniero de Estudios', actor: 'CRM Pipelines', detail: 'Notificación prioritaria a equipo de presupuestos' },
      { stage: '05 PROPUESTA', action: 'Envío de cotización formal', actor: 'Equipo Comercial', detail: 'Seguimiento automatizado en CRM' }
    ]
  },
  {
    id: 'inmobiliarias',
    name: 'INMOBILIARIAS',
    tagline: 'Venta de Departamentos, Casas y Terrenos',
    description: 'Presentación interactiva de tipologías, simulación de subsidio o crédito hipotecario y coordinación de visitas a piloto.',
    icon: 'Building2',
    challenge: 'Leads poco calificados que solicitan información sin capacidad crediticia aprobada.',
    solution: 'Agente IA evaluador de pre-aprobación bancaria que muestra modelos 3D y agenda visitas.',
    flow: [
      { stage: '01 INTERÉS', action: 'Visualización de catálogo de proyectos', actor: 'Inversionista / Comprador', detail: 'Web Inteligente con cotizador interactivo' },
      { stage: '02 WHATSAPP', action: 'Consulta sobre modelo o pie en cuotas', actor: 'WhatsApp API', detail: 'Apertura de canal comercial' },
      { stage: '03 AGENTE IA', action: 'Pre-evaluación de crédito e ingresos', actor: 'Agente IA Inmobiliario', detail: 'Verifica capacidad de pie y dividendo' },
      { stage: '04 AGENDAMIENTO', action: 'Coordinación de visita a sala de ventas', actor: 'Sistema de Citas', detail: 'Notificación al ejecutivo de ventas de turno' },
      { stage: '05 CRM', action: 'Etiqueta de proyecto, pie y estatus', actor: 'Ejecutivo Inmobiliario', detail: 'Seguimiento de la promesa de compra' }
    ]
  },
  {
    id: 'restaurantes',
    name: 'RESTAURANTES',
    tagline: 'Gastronomía, Eventos y Salones de Cumpleaños',
    description: 'Gestión automática de reservas de mesas, cotizaciones de eventos privados y pedidos directos sin comisiones.',
    icon: 'Utensils',
    challenge: 'Mesas vacías en días de baja demanda y pérdida de eventos corporativos.',
    solution: 'Reservador 24/7 e integrador de cotizaciones de eventos corporativos.',
    flow: [
      { stage: '01 ANTOJO / EVENTO', action: 'Instagram, Google Maps o Web', actor: 'Comensal u Organizador', detail: 'Revisa carta y espacios en la web' },
      { stage: '02 WHATSAPP', action: 'Solicitud de mesa o evento de 30 personas', actor: 'WhatsApp API', detail: 'Atención inmediata' },
      { stage: '03 AGENTE IA', action: 'Verificación de aforo y menú seleccionado', actor: 'Agente IA Gastronómico', detail: 'Cotiza paquete de evento o reserva mesa' },
      { stage: '04 RESERVA', action: 'Confirmación y abono previo', actor: 'Motor de Pago / Reserva', detail: 'Mesa bloqueada en el sistema' },
      { stage: '05 CRM', action: 'Ficha de preferencias de cliente', actor: 'Administración', detail: 'Historial de visitas y consumo registrado' }
    ]
  },
  {
    id: 'empresas',
    name: 'EMPRESAS EN CRECIMIENTO',
    tagline: 'Servicios B2B, SaaS y Consultorías',
    description: 'Infraestructura completa de prospección inbound, cualificación B2B por tamaño de empresa y asignación de Key Account Manager.',
    icon: 'TrendingUp',
    challenge: 'Ciclos de venta largos y falta de seguimiento estructurado.',
    solution: 'Sistema unificado que califica por número de empleados y presupuesto anual.',
    flow: [
      { stage: '01 CAPTACIÓN', action: 'Llegada desde Meta Ads o Google Ads B2B', actor: 'Decisor de Empresa', detail: 'Revisa propuesta de valor en la Web Inteligente' },
      { stage: '02 WHATSAPP', action: 'Solicitud de demostración comercial', actor: 'WhatsApp API', detail: 'Inicio del flujo de ventas B2B' },
      { stage: '03 AGENTE IA', action: 'Cuestionario B2B (Rubro, Empleados, Urgencia)', actor: 'Agente IA B2B', detail: 'Asigna puntaje de oportunidad comercial' },
      { stage: '04 CRM PIPELINE', action: 'Asignación automática a KAM', actor: 'Pipeline de Negocio', detail: 'Creación de tarea de llamada prioritaria' },
      { stage: '05 CIERRE', action: 'Presentación de propuesta y firma', actor: 'Equipo Comercial', detail: 'Métricas de rendimiento en dashboard' }
    ]
  }
];
