'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Cloud, Cpu, Database, FileText, Folder, Laptop, Server, ShieldCheck, Sparkles } from 'lucide-react';

// Import images safely
// Foto: Pexels (licença livre), https://www.pexels.com/photo/5496464/
import heroImg from '../src/assets/images/hero_notebook_pexels_5496464.jpg';
import logo from '../src/assets/images/bmsoft_logo.png';

// Ícones "holográficos" sobre a foto, posições em % do quadro
const iconesEsquerda = [Laptop, ShieldCheck, Cloud, Database, Server];
const yEsquerda = [20, 35, 50, 65, 80];
const yDireita = [28, 50, 72];
const brilho = 'text-sky-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.9)]';

interface HeroSectionProps {
  onScrollToSimulator: () => void;
  onScrollToApps: () => void;
}

export default function HeroSection({ onScrollToSimulator, onScrollToApps }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative min-h-[90vh] bg-slate-950 text-white pt-24 pb-16 px-6 overflow-hidden flex items-center">
      <FundoHero />
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-start -mt-10 md:-mt-16 mb-14"
      >
        <Image src={logo} alt="BMsoft Sistemas" className="h-16 md:h-24 w-auto drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]" priority />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            Gestão Empresarial de Próxima Geração
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none text-wrap-balance">
            Sua empresa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-300">conectada ao futuro</span> da gestão operacional.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Simplifique processos, automatize seu estoque e impulsione suas vendas com as soluções integradas da BMsoft Sistemas. Tecnologia nacional com mais de 20 anos de tradição.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={onScrollToSimulator}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/35 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              Simulador IA de Sistemas
            </button>
            <button
              onClick={onScrollToApps}
              className="border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Ver Aplicativos
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          <div className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-6">
            <div>
              <p className="font-mono text-2xl font-bold text-white tabular-nums">20+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Anos de Mercado</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-white tabular-nums">3.000+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Clientes</p>
            </div>
            <div>
              <p className="font-mono text-2xl font-bold text-white tabular-nums">4.9/5</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Nota dos Clientes</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/** Foto de fundo do hero, à direita, sumindo suavemente atrás do texto */
function FundoHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className="absolute inset-0 lg:left-[30%]"
    >
      <Image
        src={heroImg}
        alt=""
        fill
        sizes="(min-width: 1024px) 70vw, 100vw"
        className="object-cover object-[center_60%] opacity-70 lg:opacity-90"
        priority
      />
      {/* Transição para o fundo: forte à esquerda (texto), some à direita; topo e pé também esmaecem */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      <div className="absolute inset-0 bg-slate-950/50 lg:hidden" />

      {/* Ícones "holográficos", só no desktop para não brigar com o texto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="hidden lg:block absolute right-[4%] top-1/2 -translate-y-1/2 w-[62%] aspect-[16/10]"
      >
        {/* Linhas ligando os ícones ao documento central */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <g stroke="rgba(125,211,252,0.6)" strokeWidth="1">
            <path d="M22 20 H30 V80 H22" vectorEffect="non-scaling-stroke" />
            {yEsquerda.map(y => <path key={y} d={`M22 ${y} H30`} vectorEffect="non-scaling-stroke" />)}
            <path d="M30 50 H42" vectorEffect="non-scaling-stroke" />
            <path d="M58 50 H66 M66 28 V72" vectorEffect="non-scaling-stroke" />
            {yDireita.map(y => <path key={y} d={`M66 ${y} H72 M78 ${y} H84`} vectorEffect="non-scaling-stroke" />)}
          </g>
        </svg>

        {iconesEsquerda.map((Icone, i) => (
          <Icone key={i} className={`absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 ${brilho}`} style={{ left: '18%', top: `${yEsquerda[i]}%` }} />
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-sky-300/80 bg-sky-400/10 shadow-[0_0_30px_rgba(56,189,248,0.7)] flex items-center justify-center animate-pulse">
          <FileText className={`w-9 h-9 ${brilho}`} />
        </div>

        {yDireita.map(y => (
          <React.Fragment key={y}>
            <Folder className={`absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 ${brilho}`} style={{ left: '75%', top: `${y}%` }} />
            <FileText className={`absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 ${brilho}`} style={{ left: '88%', top: `${y}%` }} />
          </React.Fragment>
        ))}
      </motion.div>
    </motion.div>
  );
}
