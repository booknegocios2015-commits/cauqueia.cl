import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sistemas', href: '#sistemas' },
    { name: '01 Orgánico', href: '#organico' },
    { name: '02 Google Ads', href: '#google-ads' },
    { name: '03 Meta Ads + IA', href: '#meta-ads' },
    { name: 'Industrias', href: '#industrias' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1E]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-[#3D5AFE] rounded-md flex items-center justify-center font-bold text-xs text-white shadow-[0_0_15px_rgba(61,90,254,0.4)]">
            CQ
          </div>
          <div className="flex items-center gap-1.5">
            <span className="plus-jakarta font-bold text-lg tracking-wider text-white">
              CAUQUE.IA
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-medium text-[#94A3B8] hover:text-[#00F0FF] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar un sistema de captación para mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00F0FF] text-[#0A0F1E] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            Crear mi sistema
            <ArrowRight className="w-3.5 h-3.5 text-[#0A0F1E]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-slate-200 hover:text-[#00F0FF] py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Hola CAUQUE.IA, quiero evaluar un sistema de captación para mi negocio.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider bg-[#00F0FF] text-[#0A0F1E]"
            >
              Crear mi sistema →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
