'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, Smartphone, Monitor, Wrench, CheckCircle 
} from 'lucide-react';
import { SoftwareApp } from './types';

// Safely import mockups image
import appsMockupsImg from '../src/assets/images/apps_mockups_1791295877090.jpg';

export default function CapabilitiesSection() {
  const [selectedAppId, setSelectedAppId] = useState('bm-erp');

  const apps: SoftwareApp[] = [
    {
      id: 'bm-erp',
      name: 'BM ERP',
      badge: 'Gestão Completa',
      shortDescription: 'O coração administrativo da sua empresa. Controle finanças, estoque, compras e faturamento em um só lugar.',
      detailedDescription: 'O BM ERP é um sistema integrado desenvolvido para centralizar todas as informações de sua empresa, unindo o faturamento, controle financeiro, compras e logística em um fluxo dinâmico de trabalho que elimina erros manuais e retrabalho.',
      features: [
        'Controle de Contas a Pagar/Receber e Conciliação Bancária',
        'Controle de Estoque Rigoroso com Custo Médio e Inventário',
        'Emissão ágil de Notas Fiscais Eletrônicas (NF-e, NFS-e, MDF-e)',
        'Geração Automática de Livros Fiscais e SPED',
        'Relatórios Gerenciais e Dashboards de Faturamento e Margem'
      ],
      targetAudience: 'Distribuidores, Atacadistas, Indústrias e Prestadores de Serviços',
      techHighlight: 'Banco de dados centralizado e criptografado com backup em nuvem automática.'
    },
    {
      id: 'bm-vendas',
      name: 'BM Força de Vendas',
      badge: 'Vendas Externas',
      shortDescription: 'Aplicativo móvel para representantes comerciais em campo. Funciona offline com sincronização inteligente.',
      detailedDescription: 'O BM Força de Vendas capacita seus vendedores de rua com um catálogo digital completo no bolso. Faça pedidos de maneira ágil, verifique limites de crédito e consulte estoque em tempo real direto no smartphone ou tablet.',
      features: [
        'Funcionamento 100% offline com sincronização posterior rápida',
        'Catálogo de Produtos Digital com Fotos em Alta Resolução',
        'Tabelas de Preços Flexíveis e Promoções Segmentadas',
        'Roteirização Inteligente de Clientes por Geolocalização',
        'Histórico Completo de Compras e Limite de Crédito dos Clientes'
      ],
      targetAudience: 'Representantes Comerciais e Indústrias com Equipes Externas',
      techHighlight: 'Sincronização bidirecional ultrarápida consumindo pouquíssima banda móvel.'
    },
    {
      id: 'bm-pdv',
      name: 'BM PDV',
      badge: 'Frente de Caixa',
      shortDescription: 'Frente de caixa ultra-rápido para varejo. Emissão veloz de NFC-e e CF-e-SAT sem depender de internet constante.',
      detailedDescription: 'O BM PDV foi arquitetado para garantir que o seu checkout não pare nunca. Com robustez operacional inabalável, o sistema realiza vendas de forma veloz e emite todos os documentos fiscais exigidos pelo governo.',
      features: [
        'Vendas rápidas com atalhos de teclado e leitor de código de barras',
        'Emissão de NFC-e e CF-e-SAT em segundos com contingência física',
        'Integração nativa com Balanças, Gavetas de Dinheiro e Impressoras Térmicas',
        'Gestão de Caixa integrada (Abertura, Sangria, Suprimento, Fechamento)',
        'Interface limpa, fácil e rápida de treinar para novos caixas'
      ],
      targetAudience: 'Supermercados, Lojas de Material e Varejos',
      techHighlight: 'Arquitetura de contingência local que salva cupons na memória se a internet cair.'
    },
    {
      id: 'bm-service',
      name: 'BM Service',
      badge: 'Assistência e OS',
      shortDescription: 'Controle completo de Ordens de Serviço, contratos e equipes técnicas em campo ou na oficina.',
      detailedDescription: 'O BM Service organiza o caos operacional de prestadores de serviços. Monitore prazos, aloque os melhores técnicos de acordo com as competências, controle peças usadas no conserto e emita orçamentos aprovados de forma automática.',
      features: [
        'Abertura, Triagem e Status Customizáveis de Ordens de Serviço',
        'Controle de Equipamentos por Número de Série ou Placa',
        'Controle de Contratos de Manutenção Mensal Preventiva e Corretiva',
        'Consumo de Peças de Reposição integrado à Baixa de Estoque ERP',
        'Alocação de Equipes e Agendamento de Visitas Técnicas'
      ],
      targetAudience: 'Assistências Técnicas, Oficinas, Provedores de TI, Instaladores',
      techHighlight: 'Integrado ao módulo financeiro do ERP para faturamento imediato da OS.'
    }
  ];

  const currentApp = apps.find(a => a.id === selectedAppId) || apps[0];

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

        {/* Symmetrical interactive switcher tabs - NO PILLS, strictly segmented text buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-950/60 rounded-xl border border-slate-800/80 max-w-3xl">
          {apps.map((app) => (
            <button
              key={app.id}
              onClick={() => setSelectedAppId(app.id)}
              className={`flex-1 text-center py-3.5 px-4 text-xs font-semibold rounded-lg transition-all ${
                selectedAppId === app.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {app.name}
            </button>
          ))}
        </div>

        {/* App Detail Bento-inspired Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left large detail column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/50 rounded-2xl border border-slate-800/80 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-400 border border-blue-500/10">
                  {selectedAppId === 'bm-erp' && <Building2 className="w-6 h-6" />}
                  {selectedAppId === 'bm-vendas' && <Smartphone className="w-6 h-6" />}
                  {selectedAppId === 'bm-pdv' && <Monitor className="w-6 h-6" />}
                  {selectedAppId === 'bm-service' && <Wrench className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentApp.name}</h3>
                  <div className="text-xs text-blue-400/80 mt-0.5">{currentApp.badge}</div>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed font-light">
                {currentApp.detailedDescription}
              </p>

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
              <Image
                src={appsMockupsImg}
                alt="Demonstração Aplicativos BMsoft"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
