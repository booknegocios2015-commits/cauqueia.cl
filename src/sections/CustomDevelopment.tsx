import React, { useState } from 'react';
import { Cpu, Database, Layout, GitMerge, ArrowRight, Sparkles, MessageSquare, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const CustomDevelopmentSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const processFlow = [
    { label: 'PROBLEMA', num: '01' },
    { label: 'ANALIZAMOS', num: '02' },
    { label: 'DISEÑAMOS', num: '03' },
    { label: 'DESARROLLAMOS', num: '04' },
    { label: 'AUTOMATIZAMOS', num: '05' },
  ];

  const solutions = [
    {
      id: 1,
      number: '01',
      title: 'AUTOMATIZACIÓN CON IA',
      desc: 'Eliminamos tareas repetitivas y conectamos procesos para que tu equipo trabaje menos de forma manual.',
      hoverBadge: 'Menos tareas manuales',
      icon: Cpu,
      color: 'from-blue-500 to-[#00F0FF]',
      borderColor: 'hover:border-[#00F0FF]/50',
    },
    {
      id: 2,
      number: '02',
      title: 'ERP Y SISTEMAS A MEDIDA',
      desc: 'Desarrollamos sistemas internos para administrar, controlar y automatizar procesos específicos de tu empresa.',
      hoverBadge: 'Más control',
      icon: Database,
      color: 'from-indigo-500 to-[#3D5AFE]',
      borderColor: 'hover:border-[#3D5AFE]/50',
    },
    {
      id: 3,
      number: '03',
      title: 'DESARROLLO WEB PERSONALIZADO',
      desc: 'Si necesitas una plataforma, portal o aplicación web especial, la desarrollamos según tu operación.',
      hoverBadge: 'Una plataforma propia',
      icon: Layout,
      color: 'from-emerald-500 to-teal-400',
      borderColor: 'hover:border-emerald-400/50',
    },
    {
      id: 4,
      number: '04',
      title: 'INTEGRACIONES',
      desc: 'Conectamos tus herramientas, APIs, formularios, WhatsApp, bases de datos y sistemas para que trabajen juntos.',
      hoverBadge: 'Todo conectado',
      icon: GitMerge,
      color: 'from-purple-500 to-pink-500',
      borderColor: 'hover:border-purple-400/50',
    },
  ];

  const problemExamples = [
    "¿Copias información manualmente todos los días?",
    "¿Tu equipo repite la misma tarea una y otra vez?",
    "¿Usas Excel para controlar procesos que ya son demasiado grandes?",
    "¿Necesitas un sistema que las herramientas actuales no pueden resolver?",
    "¿Tu empresa necesita un ERP propio?",
  ];

  return (
    <section id="desarrollo-a-medida" className="py-20 bg-[#0B132B] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3D5AFE]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            DESARROLLO Y AUTOMATIZACIÓN A MEDIDA
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="plus-jakarta text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ¿Tu empresa necesita algo más?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed max-w-2xl mx-auto">
            Si existen procesos repetitivos, tareas manuales o necesitas un sistema propio, diseñamos y desarrollamos soluciones digitales a medida de tu empresa.
          </p>
        </div>

        {/* Visual Flow Process */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 mb-12 backdrop-blur-md">
          <div className="text-center font-mono text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            NUESTRO PROCESO DE DESARROLLO
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            {processFlow.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full sm:w-auto flex-1 hover:border-[#00F0FF]/50 transition-all">
                  <div className="text-[10px] font-mono font-bold text-[#00F0FF] mb-0.5">{step.num}</div>
                  <div className="font-extrabold text-xs text-white uppercase tracking-wider">{step.label}</div>
                </div>
                {idx < processFlow.length - 1 && (
                  <div className="text-[#00F0FF] font-mono font-bold text-sm hidden sm:block">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 4 Custom Solutions (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            const isHovered = activeCard === sol.id;

            return (
              <div
                key={sol.id}
                onMouseEnter={() => setActiveCard(sol.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`bg-white/5 border border-white/10 ${sol.borderColor} rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.color} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-[#0B132B] rounded-[10px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-400">{sol.number}</span>
                      <span
                        className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full transition-all duration-300 ${
                          isHovered
                            ? 'bg-[#00F0FF] text-[#0B132B] shadow-sm'
                            : 'bg-white/10 text-slate-300 border border-white/10'
                        }`}
                      >
                        {sol.hoverBadge}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-extrabold text-lg text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Problem Example Cards */}
        <div className="mb-12">
          <div className="text-center font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#00F0FF]" />
            SITUACIONES HABITUALES QUE RESOLVEMOS
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {problemExamples.map((ex, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-slate-400/50 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 transition-all hover:bg-white/10"
              >
                "{ex}"
              </div>
            ))}
          </div>
        </div>

        {/* Featured Key Message */}
        <div className="bg-gradient-to-r from-[#3D5AFE]/20 via-[#00F0FF]/20 to-[#3D5AFE]/20 border border-[#00F0FF]/30 rounded-2xl p-6 sm:p-8 text-center mb-12 shadow-xl">
          <p className="plus-jakarta text-lg sm:text-2xl font-black text-white leading-snug">
            "Si puedes explicar el proceso, podemos diseñar una forma más inteligente de hacerlo."
          </p>
        </div>

        {/* CTA Block */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, me interesa evaluar un desarrollo o automatización a medida para mi empresa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#3D5AFE] text-white px-8 py-4 rounded-xl font-bold text-sm hover:bg-[#2D45C5] transition-all shadow-lg shadow-[#3D5AFE]/30 group"
            >
              Cuéntanos qué necesitas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, quisiera hablar con un especialista en desarrollo y automatizaciones.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 px-7 py-4 rounded-xl font-bold text-sm hover:bg-white/10 transition-all text-white"
            >
              <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
              Hablar con un especialista
            </a>
          </div>

          <p className="text-xs font-mono text-slate-400">
            Analizamos tu proceso y te proponemos una solución a medida.
          </p>
        </div>

      </div>
    </section>
  );
};
