import React from 'react';
import { 
  Search, 
  Target, 
  MessageSquare, 
  Globe, 
  MapPin, 
  BarChart3, 
  ShoppingCart, 
  Monitor, 
  Star, 
  Megaphone, 
  PhoneCall, 
  Bot, 
  User, 
  Users, 
  TrendingUp, 
  Tag, 
  ShieldCheck 
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const CaptureArchitectureSection: React.FC = () => {
  return (
    <section id="arquitectura" className="py-16 md:py-24 bg-[#F8FAFC] text-[#0A0F1E] border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-[#3D5AFE]/0.03_1px,transparent_1px] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-white shadow-xs text-sky-700 text-xs font-mono font-bold tracking-wider uppercase">
            <span className="text-[#3D5AFE]">•••</span> CAUQUE.IA <span className="text-[#3D5AFE]">•••</span>
          </div>
        </div>

        {/* Header Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="plus-jakarta text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1527] tracking-tight uppercase leading-tight">
            ARQUITECTURA DE <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D70F5] via-[#10B981] to-[#10B981]">
              TRÁFICO Y CONVERSIÓN
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 font-body max-w-2xl mx-auto leading-relaxed">
            Sistemas que <span className="text-[#1D70F5] font-bold">atraen</span>, <span className="text-[#10B981] font-bold">convierten</span> y <span className="text-[#10B981] font-bold">fidelizan</span> clientes con IA.
          </p>
        </div>

        {/* 3 Main Columns Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* COLUMN 01: GOOGLE ORGÁNICO */}
          <div className="bg-white/90 border border-sky-100 rounded-3xl p-6 sm:p-7 shadow-lg shadow-sky-500/5 flex flex-col justify-between relative overflow-hidden group hover:border-sky-300 transition-all">
            <div className="space-y-6">
              
              {/* Top Card Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1D70F5] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/30">
                  <Search className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-sky-100 text-[#1D70F5] font-mono text-xs font-black mb-1">
                    01
                  </span>
                  <h3 className="text-xl font-black text-[#0B1527] leading-tight">
                    GOOGLE ORGÁNICO
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Te encontramos cuando <span className="text-[#1D70F5] font-bold">te buscan</span>.
                  </p>
                </div>
              </div>

              {/* Stacked Sub-features */}
              <div className="space-y-3">
                
                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-sky-100 text-[#1D70F5] flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">WEB + MAPS</h4>
                    <p className="text-[11px] text-slate-500">Presencia en Google Maps y Web</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-sky-100 text-[#1D70F5] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">SEO LOCAL</h4>
                    <p className="text-[11px] text-slate-500">Posicionamiento en tu zona</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-sky-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-sky-100 text-[#1D70F5] flex-shrink-0 mt-0.5">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">AEO / GEO</h4>
                    <p className="text-[11px] text-slate-500">Aparece en IA y buscadores</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-6">
              <a
                href={getWhatsAppUrl('Hola CAUQUE.IA, quiero implementar el sistema de GOOGLE ORGÁNICO para mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1D70F5] hover:bg-blue-600 text-white rounded-xl py-3.5 px-4 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 transition-all active:scale-[0.98]"
              >
                <User className="w-4 h-4 fill-white" />
                ¡ CLIENTE
              </a>
            </div>
          </div>

          {/* COLUMN 02: GOOGLE ADS + WEB */}
          <div className="bg-white/90 border border-emerald-100 rounded-3xl p-6 sm:p-7 shadow-lg shadow-emerald-500/5 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 transition-all">
            <div className="space-y-6">
              
              {/* Top Card Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#10B981] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/30">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#10B981] font-mono text-xs font-black mb-1">
                    02.
                  </span>
                  <h3 className="text-xl font-black text-[#0B1527] leading-tight">
                    GOOGLE ADS + WEB
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Atraemos a tu <span className="text-[#10B981] font-bold">cliente ideal</span> y lo llevamos a tu web.
                  </p>
                </div>
              </div>

              {/* Stacked Sub-features */}
              <div className="space-y-3">
                
                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#10B981] flex-shrink-0 mt-0.5">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">INTENCIÓN DE COMPRA</h4>
                    <p className="text-[11px] text-slate-500">Anuncios para quien ya quiere comprar</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#10B981] flex-shrink-0 mt-0.5">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">WEB INTELIGENTE</h4>
                    <p className="text-[11px] text-slate-500">Diseñada para convertir</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-emerald-100 text-[#10B981] flex-shrink-0 mt-0.5">
                    <Star className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">LEAD CALIFICADO</h4>
                    <p className="text-[11px] text-slate-500">Contactos listos para vender</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-6">
              <a
                href={getWhatsAppUrl('Hola CAUQUE.IA, quiero implementar el sistema GOOGLE ADS + WEB para mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#10B981] hover:bg-emerald-600 text-white rounded-xl py-3.5 px-4 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all active:scale-[0.98]"
              >
                <User className="w-4 h-4 fill-white" />
                ¡ CLIENTE
              </a>
            </div>
          </div>

          {/* COLUMN 03: META ADS + WHATSAPP */}
          <div className="bg-white/90 border border-purple-100 rounded-3xl p-6 sm:p-7 shadow-lg shadow-purple-500/5 flex flex-col justify-between relative overflow-hidden group hover:border-purple-300 transition-all">
            <div className="space-y-6">
              
              {/* Top Card Header */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-purple-500/30">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-[#8B5CF6] font-mono text-xs font-black mb-1">
                    03.
                  </span>
                  <h3 className="text-xl font-black text-[#0B1527] leading-tight">
                    META ADS + WHATSAPP
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    Convertimos conversaciones en <span className="text-[#8B5CF6] font-bold">ventas</span>.
                  </p>
                </div>
              </div>

              {/* Stacked Sub-features */}
              <div className="space-y-3">
                
                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-purple-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-purple-100 text-[#8B5CF6] flex-shrink-0 mt-0.5">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">DISCOVERY ADS</h4>
                    <p className="text-[11px] text-slate-500">Atraemos nuevos clientes</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-purple-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-purple-100 text-[#8B5CF6] flex-shrink-0 mt-0.5">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">WHATSAPP</h4>
                    <p className="text-[11px] text-slate-500">Conversaciones que convierten</p>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-3.5 flex items-start gap-3 hover:bg-white hover:border-purple-200 hover:shadow-xs transition-all">
                  <div className="p-2 rounded-lg bg-purple-100 text-[#8B5CF6] flex-shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#0B1527]">AGENTE IA + CRM</h4>
                    <p className="text-[11px] text-slate-500">Atención 24/7 y seguimiento</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-6">
              <a
                href={getWhatsAppUrl('Hola CAUQUE.IA, quiero implementar META ADS + WHATSAPP para mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#8B5CF6] hover:bg-purple-600 text-white rounded-xl py-3.5 px-4 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 transition-all active:scale-[0.98]"
              >
                <User className="w-4 h-4 fill-white" />
                ¡ CLIENTE
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: 4 Metrics / Outcomes */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          
          <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:px-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1D70F5] flex items-center justify-center flex-shrink-0 font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-xs text-[#0B1527] uppercase">MÁS TRÁFICO</div>
              <div className="text-[11px] text-slate-500">de calidad</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center flex-shrink-0 font-bold">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-xs text-[#0B1527] uppercase">MÁS CLIENTES</div>
              <div className="text-[11px] text-slate-500">y conversiones</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-[#8B5CF6] flex items-center justify-center flex-shrink-0 font-bold">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-xs text-[#0B1527] uppercase">MÁS VENTAS</div>
              <div className="text-[11px] text-slate-500">y crecimiento</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-black text-xs text-[#0B1527] uppercase">RESULTADOS</div>
              <div className="text-[11px] text-slate-500">medibles</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
