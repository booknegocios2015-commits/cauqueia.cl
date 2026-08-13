import React from 'react';
import { Search, MapPin, Globe, CheckCircle2, Cpu } from 'lucide-react';

export const EcosystemOrganicSection: React.FC = () => {
  return (
    <section id="organico" className="py-20 bg-white text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag Label */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-sky-300 bg-sky-50 text-sky-700 text-xs font-mono font-bold uppercase tracking-wider">
            01 — CRECIMIENTO ORGÁNICO
          </div>
        </div>

        {/* Title & Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            Haz que te encuentren cuando ya te están buscando.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
            Construimos una presencia digital preparada para que tu negocio gane visibilidad en Google y genere confianza antes del contacto.
          </p>
        </div>

        {/* Main Flow Card */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          
          <div className="text-center font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            FLUJO DE CAPTACIÓN ORGÁNICA
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center mb-8">
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">01</div>
              <div className="font-bold text-xs text-[#0A0F1E]">GOOGLE</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">02</div>
              <div className="font-bold text-xs text-sky-600">SEO LOCAL</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">03</div>
              <div className="font-bold text-xs text-[#3D5AFE]">WEB INTELIGENTE</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">04</div>
              <div className="font-bold text-xs text-slate-800">BUSINESS</div>
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">05</div>
              <div className="font-bold text-xs text-emerald-600">MAPS</div>
            </div>
            <div className="bg-[#0A0F1E] text-white border border-[#0A0F1E] p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-[#00F0FF] mb-1">06</div>
              <div className="font-bold text-xs text-white">CONTACTO</div>
            </div>
          </div>

          {/* Key Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#0A0F1E] mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                SEO LOCAL
              </div>
              <p className="text-xs text-slate-600">Visibilidad en búsquedas locales cuando buscan tu servicio en tu zona.</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#0A0F1E] mb-1 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-indigo-600" />
                AEO
              </div>
              <p className="text-xs text-slate-600">Respuestas útiles preparadas para resolver preguntas de usuarios.</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#0A0F1E] mb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                GEO
              </div>
              <p className="text-xs text-slate-600">Información preparada para experiencias de búsqueda generativa.</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#0A0F1E] mb-1">GOOGLE BUSINESS</div>
              <p className="text-xs text-slate-600">Presencia empresarial oficial estructurada.</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#0A0F1E] mb-1">GOOGLE MAPS</div>
              <p className="text-xs text-slate-600">Descubrimiento local e itinerarios.</p>
            </div>

            <div className="bg-white border border-slate-200/80 p-4 rounded-xl">
              <div className="font-bold text-xs font-mono text-[#3D5AFE] mb-1">WEB INTELIGENTE</div>
              <p className="text-xs text-slate-600">Convierte visitas en contactos directos.</p>
            </div>

          </div>

        </div>

        {/* Closing Formula */}
        <div className="text-center text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
          VISIBILIDAD <span className="text-[#3D5AFE]">→</span> CONFIANZA <span className="text-[#3D5AFE]">→</span> CONTACTO
        </div>

      </div>
    </section>
  );
};
