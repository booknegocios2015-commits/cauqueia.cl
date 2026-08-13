export interface SystemPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  features: string[];
}

export interface ProblemItem {
  id: string;
  name: string;
  status: string;
  issue: string;
  icon: string;
}

export interface AcquisitionChannel {
  name: string;
  type: string;
  badge: string;
  description: string;
  trafficVolume: string;
}

export interface IndustryFlowStep {
  stage: string;
  action: string;
  actor: string;
  detail: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  challenge: string;
  solution: string;
  flow: IndustryFlowStep[];
}

export interface CRMLead {
  id: string;
  clientName: string;
  company?: string;
  industry: string;
  channel: string;
  query: string;
  aiQualification: 'Alta' | 'Media' | 'Baja';
  intent: string;
  stage: 'NUEVO' | 'CONTACTADO' | 'CALIFICADO' | 'PROPUESTA' | 'NEGOCIACIÓN' | 'GANADO';
  assignedValue: string;
  timestamp: string;
}

export interface MethodologyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CaseStudyPlaceholder {
  id: string;
  companyCategory: string;
  challenge: string;
  systemImplemented: string[];
  outcomeSummary: string;
  badgeText: string;
}
