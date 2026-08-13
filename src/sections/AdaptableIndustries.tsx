import React, { useState } from 'react';
import { ArrowRight, Sparkles, Building2, Scale, Stethoscope, Hammer, Home, Utensils, Briefcase, ShoppingBag, GraduationCap, Car, Hotel, UserCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface Industry {
  id: string;
  name: string;
  phrase: string;
  icon: React.ElementType;
  isCustom?: boolean;
}

export const AdaptableIndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>('tu-empresa');

  const industries: Industry[] = [
    {
      id: 'abogados',
      name: 'ABOGADOS & LEGAL',
      phrase: 'Captación de consultas y nuevos clientes.',
      icon: Scale,
    },
    {
      id: 'clinicas',
      name: 'CLÍNICAS & SALUD',
      phrase: 'Más pacientes y consultas organizadas.',
      icon: Stethoscope,
    },
    {
      id: 'constructoras',
      name: 'CONSTRUCTORAS',
      phrase: 'Más oportunidades de cotización.',
      icon: Hammer,
    },
    {
      id: 'inmobiliarias',
      name: 'INMOBILIARIAS',
      phrase: 'Más contactos interesados en propiedades.',
      icon: Home,
    },
    {
      id: 'restaurantes',
      name: 'RESTAURANTES',
      phrase: 'Más clientes y reservas.',
      icon: Utensils,
    },
    {
      id: 'servicios',
      name: 'SERVICIOS PROFESIONALES',
      phrase: 'Más oportunidades comerciales.',
      icon: Briefcase,
    },
    {
      id: 'ecommerce',
      name: 'COMERCIO & E-COMMERCE',
      phrase: 'Más tráfico y conversiones.',
      icon: ShoppingBag,
    },
    {
      id: 'b2b',
      name: 'EMPRESAS B2B',
      phrase: 'Más leads comerciales calificados.',
      icon: Building2,
    },
    {
      id: 'educacion',
      name: 'EDUCACIÓN',
      phrase: 'Más inscripciones y matrículas.',
      icon: GraduationCap,
    },
    {
      id: 'automotriz',
      name: 'AUTOMOTRIZ',
      phrase: 'Más cotizaciones de vehículos.',
      icon: Car,
    },
    {
      id: 'hoteles',
      name: 'HOTELES & TURISMO',
      phrase: 'Más reservas directas.',
      icon: Hotel,
    },
    {
      id: 'tu-empresa',
      name: 'TU EMPRESA',
      phrase: 'Si no ves tu industria, hablamos. Diseñamos un sistema a la medida.',
      icon: UserCheck,
      isCustom: true,
    },
  ];

  const activeItem = industries.find((i) => i.id === activeIndustry) || industries[industries.length - 1];

  return (
    <section id="industrias" className="py-20 bg-[#F7F9FC] text-[#0A0F1E] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-200 bg-indigo-50/80 text-[#3D5AFE] text-xs font-mono font-bold uppercase tracking-wider">
            SOLUCIONES ADAPTABLES
          </div>

          <h2 className="plus-jakarta text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Tu industria cambia. <br className="hidden sm:inline" />
            <span className="text-[#3D5AFE]">El sistema se adapta.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
            Construimos sistemas de captación y ventas adaptados a cómo tus clientes buscan, comparan y compran.
          </p>
        </div>

        {/* Constellation Network Visual Container */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs mb-12 relative overflow-hidden">
          
          {/* Subtle grid background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3D5AFE_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

          {/* Central Hub Node */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-block bg-[#0A0F1E] text-white p-5 rounded-2xl shadow-xl border border-slate-800 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping"></div>
                <span className="plus-jakarta font-extrabold text-lg tracking-wider text-white">
                  CAUQUE.IA
                </span>
              </div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF]/40 font-mono text-[11px] font-bold text-[#00F0FF] uppercase">
                SISTEMA ADAPTABLE
              </div>
            </div>
          </div>

          {/* Active Phrase Display Callout */}
          <div className="max-w-xl mx-auto mb-8 bg-slate-900 text-white rounded-xl p-4 text-center border border-slate-800 shadow-md transition-all duration-300">
            <div className="text-[10px] font-mono font-bold text-[#00F0FF] uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{activeItem.name}</span>
            </div>
            <p className="text-sm font-medium text-slate-200">
              "{activeItem.phrase}"
            </p>
          </div>

          {/* Industry Nodes Network Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 relative z-10">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  onMouseEnter={() => setActiveIndustry(ind.id)}
                  className={`group relative text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                    ind.isCustom
                      ? isActive
                        ? 'bg-[#3D5AFE] text-white border-[#3D5AFE] shadow-lg shadow-[#3D5AFE]/30 scale-[1.03]'
                        : 'bg-indigo-50 border-indigo-300 text-[#3D5AFE] hover:bg-[#3D5AFE] hover:text-white hover:border-[#3D5AFE]'
                      : isActive
                      ? 'bg-[#0A0F1E] text-white border-[#0A0F1E] shadow-md ring-2 ring-[#00F0FF]/60 scale-[1.02]'
                      : 'bg-slate-50/80 hover:bg-white text-slate-800 border-slate-200 hover:border-[#00F0FF] hover:shadow-xs'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? 'bg-white/10 text-[#00F0FF]'
                        : ind.isCustom
                        ? 'bg-[#3D5AFE]/10 text-[#3D5AFE] group-hover:bg-white/20 group-hover:text-white'
                        : 'bg-white text-slate-700 border border-slate-200 group-hover:border-[#00F0FF] group-hover:text-[#3D5AFE]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="overflow-hidden">
                    <span className="block font-mono text-[11px] font-bold tracking-tight uppercase truncate">
                      {ind.name}
                    </span>
                    {ind.isCustom && (
                      <span className="block text-[10px] font-semibold text-[#00F0FF] group-hover:text-cyan-200 truncate">
                        ★ TU NEGOCIO
                      </span>
                    )}
                  </div>

                  {isActive && (
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Main Strategic Headline */}
        <div className="text-center max-w-3xl mx-auto my-12 space-y-3">
          <h3 className="plus-jakarta text-2xl sm:text-3xl font-extrabold text-[#0A0F1E] tracking-tight leading-snug">
            No importa lo que vendas. <br />
            <span className="text-[#3D5AFE]">Importa cómo te encuentran y cómo conviertes.</span>
          </h3>

          <p className="text-sm sm:text-base text-slate-600 font-body max-w-2xl mx-auto">
            Adaptamos la estrategia, el canal y la automatización al comportamiento de tus clientes.
          </p>
        </div>

        {/* Connection to 3 Ecosystems Diagram Line */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs mb-12 text-center">
          
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-slate-700 mb-6">
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-[#0A0F1E]">
              TU INDUSTRIA
            </span>
            <span className="text-[#3D5AFE] font-extrabold">↓</span>
            <span className="bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-[#0A0F1E]">
              CÓMO TE BUSCAN
            </span>
            <span className="text-[#3D5AFE] font-extrabold">↓</span>
            <span className="bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg text-[#3D5AFE]">
              SISTEMA DE CAPTACIÓN
            </span>
            <span className="text-[#3D5AFE] font-extrabold">↓</span>
            <span className="bg-[#0A0F1E] text-white px-3 py-1.5 rounded-lg text-[#00F0FF]">
              CLIENTE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-4 border-t border-slate-100">
            <div className="bg-slate-50 border border-slate-200 py-2 px-3 rounded-lg text-[11px] font-mono font-bold text-sky-700">
              01 — GOOGLE ORGÁNICO
            </div>
            <div className="bg-slate-50 border border-slate-200 py-2 px-3 rounded-lg text-[11px] font-mono font-bold text-[#3D5AFE]">
              02 — GOOGLE ADS
            </div>
            <div className="bg-slate-50 border border-slate-200 py-2 px-3 rounded-lg text-[11px] font-mono font-bold text-indigo-700">
              03 — META ADS + IA
            </div>
          </div>

        </div>

        {/* Section Sub-CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center border border-slate-800 shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="plus-jakarta text-lg font-bold text-white">
              ¿No ves tu industria?
            </h4>
            <p className="text-xs text-slate-300 font-body">
              No hay problema. Diseñamos el sistema según tu negocio y tus clientes.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Hola CAUQUE.IA, quiero analizar cómo adaptar un sistema de captación a mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap inline-flex items-center gap-2 bg-[#3D5AFE] hover:bg-[#2D45C5] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
          >
            Quiero hablar de mi negocio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
