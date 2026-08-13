import React from 'react';
import { MessageSquare, Bot, User, CheckCircle2 } from 'lucide-react';

export const EcosystemMetaAdsSection: React.FC = () => {
  return (
    <section id="meta-ads" className="py-20 bg-white text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag Label */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-mono font-bold uppercase tracking-wider">
            03 — META ADS + IA
          </div>
        </div>

        {/* Title & Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            Ve por clientes que todavía no te están buscando.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
            Generamos interés con Meta Ads y lo conectamos con Web, WhatsApp, Inteligencia Artificial y CRM.
          </p>
        </div>

        {/* Flow + WhatsApp Chat Simulation */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            
            {/* Brief WhatsApp Chat Mock */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm max-w-md mx-auto w-full space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  WA
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#0A0F1E]">Asistente IA // CAUQUE</span>
                  <span className="text-[10px] text-emerald-600 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Respuestas instantáneas
                  </span>
                </div>
              </div>

              {/* Message 1 */}
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-[10px] flex-shrink-0">
                  <User className="w-3 h-3" />
                </div>
                <div className="bg-slate-100 p-2.5 rounded-2xl rounded-tl-xs text-xs text-slate-800">
                  "Hola, quiero información."
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex items-start gap-2 max-w-[85%] ml-auto flex-row-reverse">
                <div className="w-5 h-5 rounded-full bg-[#3D5AFE] flex items-center justify-center text-white text-[10px] flex-shrink-0">
                  <Bot className="w-3 h-3" />
                </div>
                <div className="bg-[#3D5AFE] text-white p-2.5 rounded-2xl rounded-tr-xs text-xs">
                  "Claro. Cuéntame qué necesitas."
                </div>
              </div>

              <div className="pt-2 text-center text-[10px] font-mono text-slate-400 border-t border-slate-100">
                LEAD CALIFICADO ENVIADO AL CRM
              </div>
            </div>

            {/* Pipeline Stage Badges */}
            <div className="space-y-2 font-mono text-xs">
              <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-slate-400">01</span>
                <span className="font-bold text-slate-800">META ADS</span>
                <span className="text-slate-400">→ OFERTA</span>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-slate-400">02</span>
                <span className="font-bold text-slate-800">WEB / LANDING</span>
                <span className="text-slate-400">→ CAPTURA</span>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-emerald-600">03</span>
                <span className="font-bold text-emerald-800">WHATSAPP</span>
                <span className="text-emerald-600">→ CONVERSACIÓN</span>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-[#3D5AFE]">04</span>
                <span className="font-bold text-[#3D5AFE]">AGENTE IA + CRM</span>
                <span className="text-[#3D5AFE]">→ SEGUIMIENTO</span>
              </div>
              <div className="bg-[#0A0F1E] text-white p-3 rounded-xl flex items-center justify-between">
                <span className="text-[#00F0FF]">05</span>
                <span className="font-bold text-white">CLIENTE</span>
                <CheckCircle2 className="w-4 h-4 text-[#00F0FF]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
