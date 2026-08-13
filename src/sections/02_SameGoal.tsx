import React from 'react';
import { Search, Target, Rocket } from 'lucide-react';

export const SameGoalSection: React.FC = () => {
  const situations = [
    {
      num: '01',
      title: 'Ya está buscando.',
      channel: 'GOOGLE ORGÁNICO',
      flow: 'ENCUENTRA TU NEGOCIO',
      icon: Search,
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
    },
    {
      num: '02',
      title: 'Está buscando y comparando.',
      channel: 'GOOGLE ADS',
      flow: 'ENCUENTRA TU ANUNCIO',
      icon: Target,
      badgeColor: 'bg-indigo-50 text-[#3D5AFE] border-indigo-200',
    },
    {
      num: '03',
      title: 'Todavía no está buscando.',
      channel: 'META ADS',
      flow: 'DESCUBRE TU OFERTA',
      icon: Rocket,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <section id="problema" className="py-20 bg-[#F8FAFC] text-[#0A0F1E] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-white text-[#3D5AFE] text-xs font-mono font-bold uppercase tracking-wider">
            COMPORTAMIENTO DEL CLIENTE
          </div>

          <h2 className="plus-jakarta text-3xl sm:text-4xl font-extrabold text-[#0A0F1E] tracking-tight">
            Tu cliente puede llegar de diferentes formas.
          </h2>
        </div>

        {/* 3 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {situations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-[#3D5AFE]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded border ${item.badgeColor}`}>
                      SITUACIÓN {item.num}
                    </span>
                    <Icon className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-extrabold text-lg text-[#0A0F1E] mb-3">
                    "{item.title}"
                  </h3>

                  <div className="space-y-2 font-mono text-xs font-semibold">
                    <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-slate-600">
                      {item.channel}
                    </div>
                    <div className="text-center text-slate-400">↓</div>
                    <div className="bg-[#0A0F1E] text-white p-2.5 rounded-lg text-center text-[#00F0FF]">
                      {item.flow}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Conclusion Text */}
        <div className="text-center">
          <p className="text-base sm:text-lg font-extrabold text-[#0A0F1E] bg-white border border-slate-200/90 inline-block px-8 py-3.5 rounded-full shadow-2xs">
            "Por eso no existe un único camino para captar clientes."
          </p>
        </div>

      </div>
    </section>
  );
};
