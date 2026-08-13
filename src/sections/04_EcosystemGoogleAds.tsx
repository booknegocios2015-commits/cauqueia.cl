import React from 'react';
import { Search } from 'lucide-react';

export const EcosystemGoogleAdsSection: React.FC = () => {
  return (
    <section id="google-ads" className="py-20 bg-[#F7F9FC] text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tag Label */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-[#3D5AFE] text-xs font-mono font-bold uppercase tracking-wider">
            02 — GOOGLE ADS
          </div>
        </div>

        {/* Title & Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            Cuando alguien está buscando, aparece frente a él.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
            Utilizamos Google Ads para llegar a personas con intención comercial y dirigirlas a una Web Inteligente diseñada para convertir.
          </p>
        </div>

        {/* Search UI Mock + Conversion Pipeline */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          
          <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 shadow-2xs">
            {/* Search Input Mock */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 mb-4 shadow-2xs">
              <Search className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono text-slate-700 font-medium">
                "Servicio + tu ciudad"
              </span>
              <span className="ml-auto text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                INTENCIÓN COMERCIAL
              </span>
            </div>

            {/* Sponsored Result Mock */}
            <div className="bg-white border border-indigo-100 rounded-lg p-3.5 space-y-1 shadow-2xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold font-mono text-[#3D5AFE] bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                  Anuncio
                </span>
                <span className="text-xs font-mono text-slate-500">tuempresa.com</span>
              </div>
              <h4 className="text-sm font-bold text-[#3D5AFE]">
                Tu Servicio Especializado — Respuesta Rápida
              </h4>
              <p className="text-xs text-slate-600 leading-snug">
                Atención directa y propuesta clara para resolver tu necesidad comercial.
              </p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">01</div>
              <div className="font-bold text-xs text-[#0A0F1E]">GOOGLE SEARCH</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-[#3D5AFE] mb-1">02</div>
              <div className="font-bold text-xs text-[#3D5AFE]">GOOGLE ADS</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">03</div>
              <div className="font-bold text-xs text-slate-800">WEB INTELIGENTE</div>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-xl">
              <div className="text-[10px] font-mono font-bold text-[#3D5AFE] mb-1">04</div>
              <div className="font-bold text-xs text-[#3D5AFE]">LEAD CALIFICADO</div>
            </div>
            <div className="bg-[#0A0F1E] text-white border border-[#0A0F1E] p-3 rounded-xl col-span-2 sm:col-span-1">
              <div className="text-[10px] font-mono font-bold text-[#00F0FF] mb-1">05</div>
              <div className="font-bold text-xs text-white">CLIENTE</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
