import React from 'react';
import { ArrowRight, ChevronDown, Eye, Target, MessageSquare, UserCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const HeroSection: React.FC = () => {
  return (
    <section id="sistemas" className="relative pt-32 pb-20 bg-[#0A0F1E] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle ambient light radial blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3D5AFE]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
            <span>SISTEMAS DIGITALES DE CAPTACIÓN & VENTAS</span>
          </div>
        </div>

        {/* H1 Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 space-y-4">
          <h1 className="plus-jakarta text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Construimos sistemas para que tu negocio sea{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#38BDF8] to-[#3D5AFE]">
              encontrado, elegido y contactado.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-body leading-relaxed max-w-3xl mx-auto">
            Diseñamos sistemas de posicionamiento, publicidad, web y automatización que trabajan juntos para atraer y convertir clientes.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar el mejor sistema de captación para mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3D5AFE] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#2D45C5] transition-all shadow-lg shadow-[#3D5AFE]/30 group"
          >
            Quiero hacer crecer mi negocio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#arquitectura"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-slate-200"
          >
            Ver cómo funciona
            <ChevronDown className="w-4 h-4 text-[#00F0FF]" />
          </a>
        </div>

        {/* Visual Central Pipeline - 5 Second Understanding */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl max-w-4xl mx-auto">
          
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-md bg-[#3D5AFE]/20 border border-[#3D5AFE]/40 font-mono text-xs font-bold text-[#00F0FF]">
              FLUJO DE TRÁFICO Y CONVERSIÓN EN 4 ETAPAS
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
            
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-sky-400/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mx-auto mb-2">
                <Eye className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] font-bold text-sky-400 mb-0.5">01. ETAPA</div>
              <div className="font-bold text-xs text-white uppercase">VISIBILIDAD</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-[#00F0FF]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] mx-auto mb-2">
                <Target className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00F0FF] mb-0.5">02. ETAPA</div>
              <div className="font-bold text-xs text-white uppercase">ATENCIÓN</div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-[#3D5AFE]/50 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#3D5AFE]/20 border border-[#3D5AFE]/40 flex items-center justify-center text-indigo-400 mx-auto mb-2">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] font-bold text-indigo-400 mb-0.5">03. ETAPA</div>
              <div className="font-bold text-xs text-white uppercase">CONTACTO</div>
            </div>

            <div className="bg-[#3D5AFE] text-white border border-[#3D5AFE] p-4 rounded-xl shadow-lg">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white mx-auto mb-2">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="font-mono text-[10px] font-bold text-[#00F0FF] mb-0.5">04. RESULTADO</div>
              <div className="font-bold text-xs text-white uppercase">CLIENTE</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
