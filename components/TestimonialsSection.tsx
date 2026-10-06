'use client';

import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';

export default function TestimonialsSection() {
  const stats = [
    {
      value: '+140%',
      label: 'Agilidade Fiscal',
      desc: 'No tempo médio de faturamento mensal e emissão de notas fiscais (NFe).',
    },
    {
      value: '-35%',
      label: 'Perdas de Estoque',
      desc: 'Em quebras, furos e divergências de inventário em até 90 dias.',
    },
    {
      value: '15h',
      label: 'Tempo Economizado',
      desc: 'Semanalmente por cada representante de vendas externo.',
    },
  ];

  const testimonials = [
    {
      quote: 'A migração para o BM ERP eliminou 100% de nossas planilhas de faturamento manuais. Hoje, faturamos notas fiscais de venda em segundos com conciliação bancária automática real.',
      author: 'Roberto Silveira',
      role: 'Diretor de Operações',
      company: 'Metalúrgica Vale do Sul',
      metric: '+48% eficiência no faturamento',
    },
    {
      quote: 'Nosso time de campo amou o app Força de Vendas. Eles vendem o dia inteiro offline e sincronizam centenas de pedidos em segundos assim que chegam. O ganho logístico foi espetacular.',
      author: 'Cláudia Ramos',
      role: 'Gerente Comercial',
      company: 'Distribuidora Aliança de Alimentos',
      metric: 'Economia de 12 horas semanais por vendedor',
    },
    {
      quote: 'O BM PDV é extremamente rápido e robusto. Mesmo nos dias em que a internet cai, a equipe consegue passar as compras perfeitamente. O suporte técnico é humano e resolve na hora.',
      author: 'Marcos Toledo',
      role: 'Proprietário',
      company: 'Supermercados Toledo',
      metric: 'Zero minutos de caixa parado',
    },
  ];

  return (
    <section id="resultados" className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(30,58,138,0.1),transparent_35%)]" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono tracking-wider text-blue-400 uppercase font-bold">Resultados Reais</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">O Impacto das Soluções BMsoft em Números</h2>
          </div>
          <p className="lg:col-span-5 text-slate-400 text-sm leading-relaxed">
            Colocamos dados exatos em primeiro lugar. Veja os ganhos de produtividade e redução de custos operacionais coletados nos nossos clientes ativos nos últimos 12 meses.
          </p>
        </div>

        {/* Quantitative Precision Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/40 border border-slate-800 p-6 rounded-xl relative group hover:border-blue-500/20 transition-all"
            >
              <TrendingUp className="w-5 h-5 text-blue-400 absolute top-6 right-6" />
              <p className="font-mono text-4xl lg:text-5xl font-extrabold text-blue-400 tabular-nums">{stat.value}</p>
              <h4 className="text-xs text-white font-bold uppercase mt-3 tracking-wider">{stat.label}</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Attributable Testimonials List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-slate-950/20 border border-slate-800/80 p-8 rounded-2xl flex flex-col justify-between group hover:border-blue-500/10 transition-all"
            >
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-blue-500/20" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  {`"${t.quote}"`}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col gap-2">
                <div>
                  <h5 className="text-xs font-bold text-white">{t.author}</h5>
                  {/* Clean unboxed metadata with separators - NO PILLS */}
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                    <span>{t.role}</span>
                    <span>·</span>
                    <span>{t.company}</span>
                  </div>
                </div>
                <span className="text-[10px] text-blue-400 font-mono mt-1 font-semibold">{t.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
