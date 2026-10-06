'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X, Sparkles, MessageSquare } from 'lucide-react';
import logo from '../src/assets/images/bmsoft_logo.png';

const URL_SUPORTE = 'https://crm.bmsoft.com.br/suporte?e=1';

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
                className={`text-sm transition-colors duration-200 relative py-1 ${
                  isActive ? 'text-blue-400 font-medium' : 'text-slate-300 hover:text-white'
                } hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-400 after:absolute after:bottom-0 after:left-0 after:transition-all`}
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
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-lg shadow-blue-500/20 whitespace-nowrap shrink-0"
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
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onScrollToSimulator}
            className="bg-blue-600 text-white p-2 rounded-lg"
            title="Simulador IA"
          >
            <Sparkles className="w-4 h-4" />
          </button>
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
                className="text-lg py-2 border-b border-slate-800 hover:text-blue-400 transition-colors"
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
