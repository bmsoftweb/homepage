'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, MessageSquare, Phone, Mail, Building, Shield } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [interest, setInterest] = useState('BM ERP (Gestão Empresarial)');
  const [message, setMessage] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock interactive chat state
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bmsoft', text: 'Olá! Sou a Eloisa da BMsoft Sistemas. Seja muito bem-vindo!' },
    { sender: 'bmsoft', text: 'Deseja ver uma apresentação do sistema ou tirar dúvidas técnicas hoje?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    // Simulated quick response from consultant bot
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { sender: 'bmsoft', text: 'Entendi! Vou transferir sua mensagem diretamente ao nosso especialista do seu segmento. Ele te chamará no WhatsApp em até 5 minutos.' }
      ]);
    }, 1200);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database write / form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleStartWhatsAppDirect = () => {
    const text = `Olá BMsoft! Gostaria de falar com um especialista sobre o sistema ${interest}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=5547991166107&text=${encoded}`, '_blank');
  };

  return (
    <section id="contato" className="bg-slate-950 text-white py-24 px-6 border-t border-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,58,138,0.1),transparent_40%)]" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info & interactive chat mockup (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold text-blue-400">Solicitar Atendimento</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Fale com Quem Entende de Gestão de Verdade</h2>
              <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                Não perca tempo com bots de autoatendimento irritantes. Na BMsoft Sistemas, seu negócio é atendido por engenheiros de software e analistas fiscais experientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Telefone / WhatsApp</h4>
                  <p className="text-xs text-slate-500">(47) 3521-7062 / 9116-6107</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">E-mail Comercial</h4>
                  <p className="text-xs text-slate-500">comercial@bmsoft.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-500">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Sede Própria</h4>
                  <p className="text-xs text-slate-500">Tv. Henrique Coninck, 40 - Jardim América, Rio do Sul, SC</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-blue-600/10 rounded-lg text-blue-500">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Segurança e Backup</h4>
                  <p className="text-xs text-slate-500">SLA 99.9% com auditoria fiscal constante</p>
                </div>
              </div>
            </div>

            {/* Interactive WhatsApp Mockup */}
            <div className="max-w-md bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl text-white font-sans hidden sm:block">
              <div className="bg-slate-950 p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm text-white">
                    EL
                  </div>
                  <div>
                    <h4 className="text-xs font-bold">Eloisa - BMsoft</h4>
                    <span className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Online agora
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleStartWhatsAppDirect}
                  className="bg-green-600 hover:bg-green-500 text-white p-1.5 rounded text-xs flex items-center gap-1 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Ir para Zap
                </button>
              </div>

              <div className="p-4 h-[180px] overflow-y-auto space-y-3 flex flex-col bg-slate-950/40">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${
                      msg.sender === 'bmsoft' 
                        ? 'bg-slate-800 text-slate-200 self-start rounded-tl-none' 
                        : 'bg-blue-600 text-white self-end rounded-tr-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  placeholder="Escreva uma mensagem..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-slate-900 border border-slate-800 text-white text-xs px-3 py-2 rounded focus:border-blue-500 outline-none transition-all"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded transition-all shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Leads capturing form (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-500/10 border border-green-500/20 p-8 rounded-xl text-center text-white space-y-4"
                >
                  <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-green-400">Dados Enviados com Sucesso!</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Olá {name}, obrigado pelo contato. Nossos analistas de sistema já receberam seus dados operacionais e de interesse na solução <strong>{interest}</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Nossa equipe te chamará no WhatsApp ({phone}) ou enviará proposta formalizada em seu e-mail ({email}) em menos de 15 minutos!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-400 hover:text-blue-300 underline font-semibold pt-4"
                  >
                    Enviar nova solicitação
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-900/50 border border-slate-800/80 p-8 rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden"
                >
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    Agendar Apresentação
                  </h3>

                  <form onSubmit={handleSubmitForm} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Seu Nome</label>
                        <input
                          type="text"
                          placeholder="Ex: Pedro"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Empresa / Razão Social</label>
                        <input
                          type="text"
                          placeholder="Ex: Comercial LTDA"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 uppercase font-bold">E-mail Corporativo</label>
                      <input
                        type="email"
                        placeholder="Ex: pedro@empresa.com.br"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 uppercase font-bold">WhatsApp de Contato</label>
                      <input
                        type="tel"
                        placeholder="Ex: (11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Sistema de Interesse</label>
                      <select
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      >
                        <option value="BM ERP (Gestão Empresarial)">BM ERP (Gestão Empresarial)</option>
                        <option value="BM Força de Vendas (Aplicativo)">BM Força de Vendas (Aplicativo)</option>
                        <option value="BM PDV (Frente de Caixa)">BM PDV (Frente de Caixa)</option>
                        <option value="BM Service (Ordens de Serviço)">BM Service (Ordens de Serviço)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Mensagem Adicional</label>
                      <textarea
                        placeholder="Quero agendar uma reunião comercial para meu negócio."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 text-white rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all min-h-[70px] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
                    >
                      {loading ? 'Processando envio...' : 'Solicitar Demonstração Gratuita'}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
