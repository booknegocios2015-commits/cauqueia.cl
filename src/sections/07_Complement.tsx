import React from 'react';

export const ComplementSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-slate-50 text-[#3D5AFE] text-xs font-mono font-bold uppercase tracking-wider">
            SISTEMA ESCALABLE
          </div>

          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            Un sistema puede crecer contigo.
          </h2>

          <p className="text-base text-slate-600 font-body leading-relaxed">
            Puedes comenzar por el canal que más necesita tu negocio y construir el resto a medida que creces.
          </p>
        </div>

        {/* Clean Converging Flow Diagram */}
        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto space-y-4">
          
          {/* Top Row: 3 Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono font-bold">
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-sky-700">
              GOOGLE ORGÁNICO
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-[#3D5AFE]">
              GOOGLE ADS
            </div>
            <div className="bg-white border border-slate-200 p-3 rounded-xl text-purple-700">
              META ADS
            </div>
          </div>

          <div className="text-slate-400 font-mono text-sm">↓</div>

          {/* Middle Node */}
          <div className="bg-white border border-slate-200 p-3 rounded-xl text-xs font-mono font-bold text-slate-800 max-w-sm mx-auto">
            WEB INTELIGENTE
          </div>

          <div className="text-slate-400 font-mono text-sm">↓</div>

          {/* WhatsApp / IA */}
          <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-xs font-mono font-bold text-emerald-800 max-w-sm mx-auto">
            WHATSAPP / AGENTE IA
          </div>

          <div className="text-slate-400 font-mono text-sm">↓</div>

          {/* CRM & Clients */}
          <div className="bg-[#0A0F1E] text-white p-4 rounded-xl text-xs font-mono font-bold max-w-sm mx-auto flex items-center justify-between">
            <span className="text-slate-300">CRM</span>
            <span className="text-[#00F0FF]">→</span>
            <span className="text-[#00F0FF] uppercase">CLIENTES</span>
          </div>

        </div>

      </div>
    </section>
  );
};
