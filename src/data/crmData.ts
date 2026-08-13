import { CRMLead } from '../types';

export const SAMPLE_CRM_LEADS: CRMLead[] = [
  {
    id: 'lead-101',
    clientName: 'Roberto Morales',
    company: 'Inversiones del Norte',
    industry: 'Inmobiliaria',
    channel: 'Google Ads',
    query: 'Interesado en departamentos de 2 dormitorios para inversión',
    aiQualification: 'Alta',
    intent: 'Cotización e Inversión Directa',
    stage: 'CALIFICADO',
    assignedValue: '$145.000.000',
    timestamp: 'Hace 12 min'
  },
  {
    id: 'lead-102',
    clientName: 'Dra. María Paz Riquelme',
    company: 'Clínica Odontológica Estética',
    industry: 'Salud',
    channel: 'Meta Ads',
    query: 'Consulta por automatización de agenda de pacientes y CRM',
    aiQualification: 'Alta',
    intent: 'Contratación de Agente IA',
    stage: 'PROPUESTA',
    assignedValue: '$3.500.000 / año',
    timestamp: 'Hace 35 min'
  },
  {
    id: 'lead-103',
    clientName: 'Carlos Fuentes',
    company: 'Constructora Austral SpA',
    industry: 'Construcción',
    channel: 'SEO Local',
    query: 'Requiere presupuesto para obra vial en Región Metropolitana',
    aiQualification: 'Alta',
    intent: 'Reunión Presencial',
    stage: 'NEGOCIACIÓN',
    assignedValue: '$280.000.000',
    timestamp: 'Hace 1 hora'
  },
  {
    id: 'lead-104',
    clientName: 'Camila Sandoval',
    company: 'Estudio Jurídico Sandoval & Asoc.',
    industry: 'Abogados',
    channel: 'Búsqueda Directa',
    query: 'Solicita demostración del Agente IA para cualificación de juicios',
    aiQualification: 'Alta',
    intent: 'Implementación Inmediata',
    stage: 'GANADO',
    assignedValue: '$4.800.000',
    timestamp: 'Hace 2 horas'
  },
  {
    id: 'lead-105',
    clientName: 'Andrés Valenzuela',
    company: 'Grupo Gastronómico Plaza',
    industry: 'Restaurante',
    channel: 'Instagram Organic',
    query: 'Reservas automáticas para salón de eventos corporativos',
    aiQualification: 'Media',
    intent: 'Consulta de Precios',
    stage: 'NUEVO',
    assignedValue: '$1.800.000',
    timestamp: 'Hace 3 horas'
  },
  {
    id: 'lead-106',
    clientName: 'Gonzalo Ibáñez',
    company: 'Logística & Transportes Express',
    industry: 'Servicios B2B',
    channel: 'Google Search',
    query: 'Integración de WhatsApp API con ERP existente',
    aiQualification: 'Media',
    intent: 'Evaluación Técnica',
    stage: 'CONTACTADO',
    assignedValue: '$6.200.000',
    timestamp: 'Hace 4 horas'
  }
];
