import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = customMsg.trim() || 'Hola CAUQUE.IA, me interesa implementar un sistema digital de ventas con Agente IA.';
    window.open(getWhatsAppUrl(finalMsg), '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#0E1528] border border-[#00F0FF]/30 rounded-2xl p-4 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-4 glow-cyan-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Bot className="w-5 h-5 text-[#00F0FF]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0E1528]"></span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  Agente IA CAUQUE.IA
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                    En línea
                  </span>
                </h4>
                <p className="text-[11px] text-slate-400">Respuesta comercial inmediata</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              ¡Hola! 👋 Soy el Agente IA de CAUQUE.IA. ¿En qué puedo ayudarte hoy con tu infraestructura de ventas?
            </div>
          </div>

          <form onSubmit={handleSend} className="space-y-2 pt-1">
            <div className="relative">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Escribe tu mensaje o consulta..."
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] pr-9"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-[#00F0FF] text-slate-950 rounded-lg hover:bg-[#00F0FF]/90 flex items-center justify-center transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>
            <p className="text-[10px] text-slate-500 text-center">
              Te redirigirá directamente a WhatsApp Business API
            </p>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-bold text-sm rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-slate-950 text-emerald-500" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00F0FF] rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline">Hablar por WhatsApp</span>
      </button>
    </div>
  );
};
