'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, RefreshCw, Cpu, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';

interface AISimulatorProps {
  onScrollToContact: () => void;
}

export default function AISimulator({ onScrollToContact }: AISimulatorProps) {
  const [businessType, setBusinessType] = useState('');
  const [size, setSize] = useState('Pequena Empresa (10 a 49 funcionários)');
  const [challenge, setChallenge] = useState('');
  const [currentSystem, setCurrentSystem] = useState('Planilhas de Excel / Controle Manual');
  
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadingSteps = [
    'Analisando o comportamento do seu segmento no mercado nacional...',
    'Avaliando os gargalos tributários e fiscais relatados...',
    'Mapeando os módulos ideais do ecossistema BMsoft...',
    'Calculando projeções realistas de Retorno sobre Investimento (ROI)...',
    'Estruturando o seu plano de transição seguro de 30 dias...'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !challenge) {
      setError('Por favor, preencha todos os campos fundamentais para realizarmos a simulação.');
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);
    setLoadingStep(0);

    // Dynamic loading status messages interval
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < loadingSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    try {
      const response = await fetch('/api/consultant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessType,
          size,
          challenge,
          currentSystem,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.text);
      } else {
        setError(data.error || 'Ocorreu um erro na simulação. Por favor, tente novamente.');
      }
    } catch (err) {
      console.error(err);
      setError('Não foi possível conectar ao servidor de inteligência artificial da BMsoft.');
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleShareWhatsApp = () => {
    if (!result) return;
    const intro = `Olá BMsoft! Realizei a simulação AI de Sistemas de Gestão no site de vocês para meu negócio (${businessType}). Desejo agendar uma apresentação comercial gratuita com base no plano gerado.`;
    const encodedText = encodeURIComponent(intro);
    window.open(`https://api.whatsapp.com/send?phone=5547991166107&text=${encodedText}`, '_blank');
  };

  return (
    <section id="simulador" className="py-24 px-6 relative bg-slate-950 text-white border-t border-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_60%)]" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            Decisão guiada por Dados
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Simulador IA de Arquitetura de Sistemas
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Descubra em menos de um minuto quais softwares da BMsoft se aplicam à sua empresa, como integrá-los e qual o retorno estimado. Gerado por inteligência artificial em tempo real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Input Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/60 border border-slate-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                Dados Operacionais
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-widest">Qual o seu segmento de negócio?</label>
                  <input
                    type="text"
                    placeholder="Ex: Distribuidora de bebidas, Oficina mecânica, Varejo"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-widest">Porte aproximado da empresa</label>
                  <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="Microempresa (até 9 funcionários)">Microempresa (até 9 funcionários)</option>
                    <option value="Pequena Empresa (10 a 49 funcionários)">Pequena Empresa (10 a 49 funcionários)</option>
                    <option value="Média Empresa (50 a 249 funcionários)">Média Empresa (50 a 249 funcionários)</option>
                    <option value="Grande Corporação (250+ funcionários)">Grande Corporação (250+ funcionários)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-widest">Principal sistema ou controle atual</label>
                  <select
                    value={currentSystem}
                    onChange={(e) => setCurrentSystem(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  >
                    <option value="Planilhas de Excel / Controle Manual">Planilhas de Excel / Controle Manual</option>
                    <option value="Caderno / Anotações Físicas">Caderno / Anotações Físicas</option>
                    <option value="Sistema concorrente legado lento">Sistema concorrente legado lento</option>
                    <option value="Nenhum controle estabelecido">Nenhum controle estabelecido</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-mono uppercase tracking-widest">Principal dor ou desafio hoje</label>
                  <textarea
                    placeholder="Ex: Faturamento de notas fiscais é muito demorado, representantes de rua sem conexão, perco vendas por furos no estoque"
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all min-h-[90px] resize-y"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Analisando...
                    </>
                  ) : (
                    <>
                      Construir Diagnóstico Gratuito
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Result Zone (7 cols) */}
          <div className="lg:col-span-7 h-full min-h-[480px]">
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[480px] flex flex-col items-center justify-center p-8 border border-slate-800 bg-slate-950/40 rounded-2xl"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
                    <Sparkles className="w-6 h-6 text-blue-400 absolute inset-0 m-auto animate-pulse" />
                  </div>
                  <h4 className="text-base font-bold text-center text-white">
                    Nossa IA está trabalhando na sua arquitetura
                  </h4>
                  <p className="text-xs text-slate-500 text-center mt-2 max-w-sm">
                    {loadingSteps[loadingStep]}
                  </p>
                </motion.div>
              )}

              {!loading && !result && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[480px] flex flex-col items-center justify-center p-8 border border-dashed border-slate-800 bg-slate-950/20 rounded-2xl text-center"
                >
                  <div className="p-4 bg-blue-500/5 rounded-full mb-4">
                    <Sparkles className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Pronto para Simular
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mt-2 leading-relaxed">
                    Preencha o formulário ao lado e deixe nosso sistema de IA estruturar os melhores caminhos operacionais e de implantação sob medida para sua empresa.
                  </p>
                </motion.div>
              )}

              {!loading && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-6 md:p-8 border border-slate-800/80 bg-slate-950/60 text-slate-200 rounded-2xl flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-green-500/10 rounded text-green-400">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-green-400 uppercase tracking-widest">Diagnóstico Concluído</span>
                    </div>
                    <button
                      onClick={() => setResult(null)}
                      className="text-slate-500 hover:text-slate-300 text-xs flex items-center gap-1 transition-colors"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Novo teste
                    </button>
                  </div>

                  {/* Render simulated plan in rich markdown */}
                  <div className="markdown-body max-h-[450px] overflow-y-auto pr-2 mb-6 prose prose-invert prose-blue max-w-none prose-sm prose-p:leading-relaxed prose-headings:font-bold prose-headings:text-wrap-balance">
                    <Markdown>{result}</Markdown>
                  </div>

                  <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <button
                      onClick={handleShareWhatsApp}
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-500/20 whitespace-nowrap text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Falar com Especialista Humano
                    </button>
                    <button
                      onClick={onScrollToContact}
                      className="border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 py-3 px-6 rounded-lg text-sm font-semibold text-center transition-all"
                    >
                      Solicitar Orçamento Comercial
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
