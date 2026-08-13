import React from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050814] border-t border-white/10 pt-16 pb-10 relative overflow-hidden text-xs text-white">
      {/* Line flow gradient bar */}
      <div className="line-flow w-full absolute top-0 left-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#3D5AFE] rounded-md flex items-center justify-center font-bold text-xs text-white shadow-[0_0_15px_rgba(61,90,254,0.4)]">
                CQ
              </div>
              <span className="plus-jakarta font-bold text-xl text-white">
                CAUQUE.IA
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Construimos sistemas digitales que ayudan a tu empresa a captar clientes, automatizar conversaciones y convertir oportunidades en ventas.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
              <span>Infraestructura Digital & Conexión WhatsApp API</span>
            </div>
          </div>

          {/* Col 1: Estructura */}
          <div className="space-y-3">
            <h4 className="plus-jakarta text-xs font-bold uppercase tracking-wider text-white">SISTEMA</h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li><a href="#problema" className="hover:text-white transition-colors">El Problema</a></li>
              <li><a href="#arquitectura" className="hover:text-white transition-colors">Arquitectura de Captación</a></li>
              <li><a href="#organico" className="hover:text-white transition-colors">01 Google Orgánico</a></li>
              <li><a href="#google-ads" className="hover:text-white transition-colors">02 Google Ads</a></li>
              <li><a href="#meta-ads" className="hover:text-white transition-colors">03 Meta Ads + IA</a></li>
              <li><a href="#industrias" className="hover:text-white transition-colors">Industrias</a></li>
              <li><a href="#desarrollo-a-medida" className="hover:text-white transition-colors">Desarrollo a Medida</a></li>
            </ul>
          </div>

          {/* Col 2: Legalidad y Registro */}
          <div className="space-y-3">
            <h4 className="plus-jakarta text-xs font-bold uppercase tracking-wider text-white">LEGALIDAD & REGISTRO</h4>
            <div className="space-y-2.5 text-xs text-[#94A3B8]">
              <div className="flex items-start gap-2 text-slate-200">
                <Scale className="w-4 h-4 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">MANTYTECH SpA</span>
                  <span className="text-slate-400 text-[11px]">Razón Social y Titular Legal</span>
                </div>
              </div>

              <ul className="space-y-1.5 pt-1 text-[11px] text-slate-300">
                <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#00F0FF]"></span>
                  Términos y Condiciones del Servicio
                </li>
                <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#00F0FF]"></span>
                  Política de Privacidad y Protección de Datos
                </li>
                <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#00F0FF]"></span>
                  Cumplimiento Meta & Google APIs
                </li>
                <li className="flex items-center gap-1.5 hover:text-white transition-colors cursor-default">
                  <span className="w-1 h-1 rounded-full bg-[#00F0FF]"></span>
                  Derechos y Propiedad Intelectual Reservados
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#94A3B8] uppercase tracking-widest font-mono">
          <div>© 2026 CAUQUE.IA — MANTYTECH SPA. TODOS LOS DERECHOS RESERVADOS.</div>
          <div className="flex flex-wrap items-center gap-6">
            <span>SISTEMA DIGITAL DE VENTAS</span>
            <span className="text-white font-bold">MANTYTECH SPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
