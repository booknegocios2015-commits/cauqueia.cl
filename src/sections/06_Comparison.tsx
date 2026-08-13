import React from 'react';
import { ArrowRight, Search, Target, Rocket } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparacion" className="py-20 bg-[#F8FAFC] text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white text-[#3D5AFE] text-xs font-mono font-bold uppercase tracking-wider">
            ELECCIÓN DEL ECOSISTEMA
          </div>

          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            ¿Cuál camino necesita tu negocio?
          </h2>
        </div>

        {/* 3 Clear Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Option 01 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-sky-400/60 transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                <Search className="w-5 h-5" />
              </div>

              <h3 className="font-extrabold text-lg text-[#0A0F1E] mb-1">
                QUIERO CRECER EN GOOGLE
              </h3>

              <p className="text-xs text-slate-500 font-medium mb-6">
                Para personas que ya están buscando.
              </p>

              <div className="space-y-1.5 font-mono text-xs text-slate-700 mb-6">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• SEO LOCAL</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• AEO + GEO</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• GOOGLE BUSINESS + MAPS</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• WEB INTELIGENTE</div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar la opción: QUIERO CRECER EN GOOGLE.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white hover:bg-sky-600 py-3 rounded-xl font-bold text-xs transition-colors group"
            >
              Quiero crecer en Google
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Option 02 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-400/60 transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-[#3D5AFE] mb-4">
                <Target className="w-5 h-5" />
              </div>

              <h3 className="font-extrabold text-lg text-[#0A0F1E] mb-1">
                QUIERO CAPTAR CON GOOGLE
              </h3>

              <p className="text-xs text-slate-500 font-medium mb-6">
                Para personas que buscan con intención de compra.
              </p>

              <div className="space-y-1.5 font-mono text-xs text-slate-700 mb-6">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• GOOGLE ADS</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• WEB INTELIGENTE</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• CAPTURA DE LEADS</div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar la opción: QUIERO CAPTAR CON GOOGLE.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white hover:bg-[#3D5AFE] py-3 rounded-xl font-bold text-xs transition-colors group"
            >
              Quiero captar con Google
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Option 03 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-purple-400/60 transition-all shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-4">
                <Rocket className="w-5 h-5" />
              </div>

              <h3 className="font-extrabold text-lg text-[#0A0F1E] mb-1">
                QUIERO GENERAR NUEVOS CLIENTES
              </h3>

              <p className="text-xs text-slate-500 font-medium mb-6">
                Para personas que todavía no están buscando.
              </p>

              <div className="space-y-1.5 font-mono text-xs text-slate-700 mb-6">
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• META ADS</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• WHATSAPP API</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• AGENTE IA</div>
                <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">• CRM DE SEGUIMIENTO</div>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar la opción: QUIERO GENERAR NUEVOS CLIENTES.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 text-white hover:bg-purple-600 py-3 rounded-xl font-bold text-xs transition-colors group"
            >
              Quiero generar clientes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
