import React from 'react';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FinalCTASection: React.FC = () => {
  const pipeline = ['GOOGLE', 'ADS', 'WEB', 'WHATSAPP', 'IA', 'CRM'];

  return (
    <section id="contacto" className="py-24 bg-white text-[#0A0F1E] relative overflow-hidden border-t border-slate-200">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3D5AFE]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Title */}
        <h2 className="plus-jakarta text-3xl sm:text-5xl font-extrabold text-[#0B1527] tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
          Construyamos el sistema que tu negocio necesita.
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-slate-600 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
          Analizamos cómo tus clientes buscan, descubren y deciden para diseñar una estrategia de captación adaptada a tu negocio.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={getWhatsAppUrl('Hola CAUQUE.IA, quiero construir el sistema de captación que mi negocio necesita.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3D5AFE] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2D45C5] transition-all shadow-lg shadow-[#3D5AFE]/20 group"
          >
            Quiero hacer crecer mi negocio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={getWhatsAppUrl('Hola CAUQUE.IA, me gustaría hablar directamente con un especialista.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 bg-slate-50 hover:bg-slate-100 transition-all text-slate-800 px-7 py-4 rounded-xl font-bold text-base shadow-xs"
          >
            <MessageSquare className="w-5 h-5 text-[#3D5AFE]" />
            Hablar con CAUQUE.IA
          </a>
        </div>

        {/* Bottom Convergence Pipeline */}
        <div className="pt-8 border-t border-slate-200 max-w-3xl mx-auto space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono font-bold text-slate-700">
            {pipeline.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-slate-100 border border-slate-200/80 px-2.5 py-1 rounded text-slate-800">{item}</span>
                {idx < pipeline.length - 1 && (
                  <span className="text-[#3D5AFE] font-bold">+</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-[#3D5AFE] font-bold">→</span>
            <span className="bg-[#3D5AFE] text-white px-3 py-1 rounded font-extrabold flex items-center gap-1 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              CLIENTES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
