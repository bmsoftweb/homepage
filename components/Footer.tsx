'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900 text-xs font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-800/20 pb-8 mb-8">
        <div className="md:col-span-4 space-y-4">
          <span className="text-white font-bold text-sm">BMsoft Sistemas</span>
          <p className="max-w-xs leading-relaxed text-[11px] text-slate-500">
            Mais de 20 anos desenvolvendo o futuro da gestão de empresas no Brasil. Faturamento ágil, controle de estoque robusto e vendas de alto desempenho.
          </p>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Produtos</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#aplicativos" className="hover:text-blue-400 transition-colors">BM ERP Corporativo</a></li>
            <li><a href="#aplicativos" className="hover:text-blue-400 transition-colors">BM Força de Vendas</a></li>
            <li><a href="#aplicativos" className="hover:text-blue-400 transition-colors">BM PDV Varejo</a></li>
            <li><a href="#aplicativos" className="hover:text-blue-400 transition-colors">BM Service (OS)</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
            <li><a href="#historia" className="hover:text-blue-400 transition-colors">História</a></li>
            <li><a href="#resultados" className="hover:text-blue-400 transition-colors">Resultados</a></li>
            <li><a href="#simulador" className="hover:text-blue-400 transition-colors">Simulador IA</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} BMsoft Sistemas LTDA. CNPJ 08.511.951/0001-37. Todos os direitos reservados.
        </div>      </div>
    </footer>
  );
}
