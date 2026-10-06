'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Award, Globe, Users, Trophy } from 'lucide-react';

export default function HistorySection() {
  const timeline = [
    {
      year: '2005',
      title: 'Fundação da BMsoft',
      description: 'Nascemos em Rio do Sul, SC, com a missão de criar sistemas de faturamento confiáveis em servidores locais. Nosso primeiro software ajudou pequenos lojistas a controlarem estoques com segurança digital.',
      icon: Calendar,
      stat: '1º Cliente local'
    },
    {
      year: '2011',
      title: 'A Revolução Fiscal (NFe)',
      description: 'Com a chegada da Nota Fiscal Eletrônica obrigatória no Brasil, a BMsoft desenvolveu um dos emissores mais rápidos e estáveis do mercado catarinense, garantindo conformidade fiscal absoluta.',
      icon: Award,
      stat: '1M+ XMLs emitidos'
    },
    {
      year: '2016',
      title: 'Expansão Mobile & Força de Vendas',
      description: 'Lançamos o app Força de Vendas integrado 100% offline, permitindo que dezenas de representantes de atacados fechassem vendas complexas no campo sem depender de conexões instáveis.',
      icon: Globe,
      stat: '20+ representantes ativos por cliente'
    },
    {
      year: '2023',
      title: 'Nuvem Híbrida & Alta Disponibilidade',
      description: 'Oferecemos a opção de uma arquitetura em nuvem, sua operação fica mais robusta, e a empresa tem um sistema totalmente funcional e seguro.',
      icon: Users,
      stat: '450+ CNPJs ativos'
    },
    {
      year: '2026',
      title: 'Tradição e Inteligência Artificial',
      description: 'Com mais de 20 anos de mercado ininterruptos, integramos soluções avançadas de simulação operacional baseadas em Inteligência Artificial para guiar nossos clientes rumo ao crescimento sustentável.',
      icon: Trophy,
      stat: '20 Anos de Confiança'
    }
  ];

  return (
    <section id="historia" className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden border-t border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.15),transparent_40%)]" />
      
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono tracking-wider text-blue-400 uppercase font-bold">Nossa Trajetória</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Mais de Duas Décadas Desenvolvendo Confiança</h2>
          <p className="text-slate-400 text-sm">
            Conheça a história da BMsoft: como fomos de uma pequena software house para um parceiro regional, presente em centenas de empresas.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Icon className="w-3 h-3 text-blue-400" />
                </div>

                {/* Desktop Year Float */}
                <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                  <span className="font-mono text-xl font-bold text-blue-400">{item.year}</span>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mt-1">{item.stat}</p>
                </div>

                <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-xl hover:border-blue-500/30 transition-all">
                  <span className="inline-block md:hidden font-mono text-sm font-bold text-blue-400 mb-1">
                    {item.year} · {item.stat}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
