'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Sparkles, MessageSquare } from 'lucide-react';
import logo from '../src/assets/images/bmsoft_logo.png';

const URL_SUPORTE = 'https://crm.bmsoft.com.br/suporte?e=1';

/** WhatsApp da BMsoft, quadrado com a mesma altura do botão Simulador IA */
function BotaoWhatsApp() {
  return (
    <a
      href="https://wa.me/5547991166107"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp (47) 99116-6107"
      title="WhatsApp (47) 99116-6107"
      className="w-8 h-8 shrink-0 rounded-lg bg-slate-800 hover:bg-slate-700 text-[#25D366] flex items-center justify-center transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.23 9.41-9.41 9.41zm8.01-17.42A11.24 11.24 0 0 0 12.05.75C5.81.75.73 5.83.73 12.07c0 2 .52 3.94 1.51 5.66L.64 23.25l5.65-1.48a11.3 11.3 0 0 0 5.75 1.47h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.87-3.31-8z" />
      </svg>
    </a>
  );
}

interface NavbarProps {
  onScrollToSimulator: () => void;
  onScrollToContact: () => void;
  activeSection: string;
}

export default function Navbar({ onScrollToSimulator, onScrollToContact, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Aplicativos', href: '#aplicativos' },
    { label: 'Nossa História', href: '#historia' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Contato', href: '#contato' },
    { label: 'Suporte', href: URL_SUPORTE },
  ];

  /** Suporte abre o painel do widget do CRM; sem o widget, segue o link (página de suporte em nova aba) */
  const abrirSuporte = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.getAttribute('href') !== URL_SUPORTE) return;
    const botaoWidget = document.querySelector<HTMLButtonElement>('button[aria-label="Suporte"]');
    if (!botaoWidget) return;
    e.preventDefault();
    botaoWidget.click();
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-blue-500/10 text-white sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: logo */}
        <a href="#inicio" aria-label="BMsoft Sistemas - início">
          <Image src={logo} alt="BMsoft Sistemas" className="h-8 w-auto" priority />
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href === URL_SUPORTE ? '_blank' : undefined}
                rel={link.href === URL_SUPORTE ? 'noopener' : undefined}
                onClick={abrirSuporte}
                className={
                  link.href === URL_SUPORTE
                    ? 'bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-xs font-semibold rounded-lg transition-colors shadow-lg shadow-green-500/20'
                    : `text-sm transition-colors duration-200 relative py-1 ${
                        isActive ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-white'
                      } hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:transition-all`
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onScrollToSimulator}
            className="border border-blue-500 hover:bg-blue-500/10 text-blue-400 hover:text-blue-300 px-4 py-[7px] text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Simulador IA
          </button>
          <button
            onClick={onScrollToContact}
            className="text-xs font-medium text-slate-400 hover:text-white hidden xl:block transition-colors"
          >
            Falar com Consultor
          </button>
          <BotaoWhatsApp />
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onScrollToSimulator}
            className="border border-blue-500 text-blue-400 p-[7px] rounded-lg"
            title="Simulador IA"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <BotaoWhatsApp />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded hover:bg-slate-800/10 dark:hover:bg-slate-100/10"
            aria-label="Alternar menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100/10 bg-slate-900 text-white p-6 absolute top-16 left-0 w-full shadow-xl z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href === URL_SUPORTE ? '_blank' : undefined}
                rel={link.href === URL_SUPORTE ? 'noopener' : undefined}
                onClick={(e) => {
                  setIsOpen(false);
                  abrirSuporte(e);
                }}
                className={
                  link.href === URL_SUPORTE
                    ? 'text-lg py-2 px-4 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold text-center transition-colors'
                    : 'text-lg py-2 border-b border-slate-800 hover:text-blue-400 transition-colors'
                }
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToSimulator();
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Simular com IA
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onScrollToContact();
                }}
                className="w-full bg-slate-800 text-slate-200 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Especialista
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
