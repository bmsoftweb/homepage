'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Building2, Smartphone, Monitor, Wrench, CheckCircle, Cloud, BarChart3, Package, Truck, Factory, Users,
  FileText, ShoppingCart, Printer, Plug, PackageSearch, Armchair, ArrowRight, type LucideIcon
} from 'lucide-react';
import { SoftwareApp } from './types';

// Safely import mockups image
import appsMockupsImg from '../src/assets/images/apps_mockups_1791295877090.jpg';

// Valores aceitos no campo "icone" da tabela aplicativos
const ICONES: Record<string, LucideIcon> = {
  erp: Building2, vendas: Smartphone, pdv: Monitor, servico: Wrench, nuvem: Cloud, relatorio: BarChart3,
  estoque: Package, logistica: Truck, industria: Factory, equipe: Users, documento: FileText, carrinho: ShoppingCart, impressora: Printer, integracao: Plug, pesquisa: PackageSearch, moveis: Armchair,
};

export default function CapabilitiesSection() {
  const [apps, setApps] = useState<SoftwareApp[] | null>(null);
  const [erro, setErro] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState('');
  const detalheRef = useRef<HTMLDivElement>(null);

  // Aplicativos vêm do banco (tabela homepage.aplicativos)
  useEffect(() => {
    fetch('/api/aplicativos')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((lista: SoftwareApp[]) => {
        setApps(lista);
        if (lista.length) setSelectedAppId(lista[0].id);
      })
      .catch(() => setErro(true));
  }, []);

  const currentApp = apps?.find(a => a.id === selectedAppId) || apps?.[0];
  const Icone = ICONES[currentApp?.icon || ''] || Building2;

  return (
    <section id="aplicativos" className="bg-slate-900 text-white py-24 px-6 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase font-bold">Nossa Suite Tecnológica</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white text-wrap-balance">
              Aplicativos projetados para impulsionar sua produtividade empresarial.
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-sm leading-relaxed shrink-0">
            Sistemas nativos integrados em uma plataforma robusta, preparados para expandir seu negócio sem gargalos técnicos.
          </p>
        </div>

        {!currentApp ? (
          <p className="text-sm text-slate-500">
            {erro ? 'Não foi possível carregar os aplicativos agora.' : apps ? 'Nenhum aplicativo cadastrado.' : 'Carregando aplicativos...'}
          </p>
        ) : (
        <>
        {/* Um card por aplicativo; a grade quebra em quantas linhas precisar */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {apps!.map((app) => {
            const IconeCard = ICONES[app.icon] || Building2;
            const ativo = selectedAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => {
                  setSelectedAppId(app.id);
                  // No celular o detalhe fica abaixo da grade: leva até ele
                  detalheRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
                aria-pressed={ativo}
                className={`text-left p-5 rounded-xl border transition-all flex flex-col gap-3 ${
                  ativo
                    ? 'bg-blue-600/10 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-600 hover:bg-slate-950/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${ativo ? 'bg-blue-600 text-white border-blue-500' : 'bg-blue-600/10 text-blue-400 border-blue-500/10'}`}>
                    <IconeCard className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm truncate">{app.name}</p>
                    <p className="text-[11px] text-blue-400/80 truncate">{app.badge}</p>
                  </div>
                </div>
                {app.shortDescription && (
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{app.shortDescription}</p>
                )}
              </button>
            );
          })}
        </div>

        {/* App Detail Bento-inspired Layout */}
        <div ref={detalheRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch scroll-mt-24">
          {/* Left large detail column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/50 rounded-2xl border border-slate-800/80 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-400 border border-blue-500/10">
                  <Icone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentApp.name}</h3>
                  <div className="text-xs text-blue-400/80 mt-0.5">{currentApp.badge}</div>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {currentApp.detailedDescription}
              </p>

              {currentApp.features.length > 0 && (
              <div className="space-y-3.5 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500">Recursos de Destaque</h4>
                <ul className="space-y-2.5">
                  {currentApp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              )}

              {currentApp.moreUrl && (
                <a
                  href={currentApp.moreUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Saiba mais sobre o {currentApp.name}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="pt-8 mt-8 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Público-Alvo Recomendado</p>
                <p className="text-xs text-slate-300 mt-1 font-medium">{currentApp.targetAudience}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Diferencial Tecnológico</p>
                <p className="text-xs text-slate-300 mt-1 font-medium">{currentApp.techHighlight}</p>
              </div>
            </div>
          </div>

          {/* Right mockup column (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-800/80 p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-4">
              <span className="text-[10px] text-blue-400 font-mono tracking-wider uppercase font-bold">Preview de Operação</span>
              <h4 className="text-lg font-bold text-white">Sistemas Integrados em Tempo Real</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trabalhe localmente com segurança máxima de rede ou acesse dados gerenciais consolidados de qualquer lugar do planeta.
              </p>
            </div>

            {/* Styled Mockup Container with fallback */}
            <div className="aspect-[4/3] relative rounded-lg border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl mt-6">
              {currentApp.imageUrl ? (
                // Imagem do cadastro pode vir de qualquer endereço: <img> comum, sem a otimização do next/image
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={currentApp.imageUrl}
                  alt={`Tela do ${currentApp.name}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              ) : (
                <Image
                  src={appsMockupsImg}
                  alt="Demonstração Aplicativos BMsoft"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  referrerPolicy="no-referrer"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
        </>
        )}
      </div>
    </section>
  );
}
