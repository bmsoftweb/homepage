import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Bug, MessagesSquare, MonitorSmartphone } from 'lucide-react';
import logo from '../../src/assets/images/bmsoft_logo.png';
// Foto: Pexels (licença livre), https://www.pexels.com/photo/5496464/ (a mesma da página inicial)
import heroImg from '../../src/assets/images/hero_notebook_pexels_5496464.jpg';

export const metadata: Metadata = {
  title: 'Área das Revendas | BMsoft Sistemas',
};

/** Atalhos das revendas (link "Área das Revendas" do menu) */
const LINKS = [
  { titulo: 'Interativo', href: 'http://bmsoft.ddns.net:7579/', icone: MonitorSmartphone },
  { titulo: 'Mantis', href: 'http://bmsoft.ddns.net:8088/mantis/login_page.php', icone: Bug },
  { titulo: 'Fórum', href: 'http://bmsoft.ddns.net:8088/forum/', icone: MessagesSquare },
];

export default function Revendas() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Fundo como o da página inicial (HeroSection): foto do notebook esmaecendo para o fundo, brilho azul e grade */}
      <div className="absolute inset-0 lg:left-[30%]">
        <Image src={heroImg} alt="" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover object-[center_60%] opacity-70 lg:opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/50 lg:hidden" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <header className="relative z-10 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="BMsoft Sistemas - início">
            <Image src={logo} alt="BMsoft Sistemas" className="h-8 w-auto" priority />
          </Link>
          <Link href="/" className="text-xs font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold">Área das Revendas</h1>
        <p className="text-slate-400 mt-2">Acesso rápido às ferramentas das revendas BMsoft.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          {LINKS.map(({ titulo, href, icone: Icone }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener"
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-blue-500/60 hover:bg-slate-900 transition-colors"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center">
                <Icone className="w-5 h-5" />
              </span>
              <span className="text-lg font-semibold flex items-center justify-between">
                {titulo}
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </span>
              <span className="text-xs text-slate-500 break-all">{href.replace(/^https?:\/\//, '')}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
