import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle } from 'lucide-react';
import logo from '../../src/assets/images/bmsoft_logo.png';
// Foto: Pexels (licença livre), https://www.pexels.com/photo/5496464/ (a mesma da página inicial)
import heroImg from '../../src/assets/images/hero_notebook_pexels_5496464.jpg';
import { ESPECIAIS } from '../../lib/especiais';

export const metadata: Metadata = {
  title: 'Aplicativos Especiais | BMsoft Sistemas',
  description: 'MeuConsultorioWeb, OdontoSys e PrintControl: sistemas da BMsoft para clínicas médicas, clínicas odontológicas e locação de impressoras.',
};

/** Página dos aplicativos especiais (seção "Aplicativos Especiais" da página inicial) */
export default function Especiais() {
  return (
    // overflow-x-clip (e não hidden): corta o fundo sem impedir o cabeçalho de ficar fixo no topo
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-clip">
      {/* Fundo como o da página inicial: foto do notebook esmaecendo para o fundo, brilho azul e grade */}
      <div className="absolute inset-x-0 top-0 h-[640px] lg:left-[30%]">
        <Image src={heroImg} alt="" fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover object-[center_60%] opacity-70 lg:opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
        <div className="absolute inset-0 bg-slate-950/50 lg:hidden" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/10">
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

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div>
          <span className="text-xs tracking-wider text-blue-400 uppercase font-bold">Aplicativos Especiais</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">Sistemas feitos para segmentos específicos</h1>
          <p className="text-slate-400 mt-3 max-w-2xl leading-relaxed">
            Soluções completas da BMsoft para clínicas médicas, clínicas odontológicas e empresas de locação de impressoras.
          </p>
          {/* Atalhos para cada aplicativo da página */}
          <nav className="flex flex-wrap gap-2 mt-8">
            {ESPECIAIS.map(({ slug, nome, icone: Icone }) => (
              <a
                key={slug}
                href={`#${slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/70 backdrop-blur-sm text-sm font-semibold hover:border-blue-500/60 transition-colors"
              >
                <Icone className="w-4 h-4 text-blue-400" />
                {nome}
              </a>
            ))}
          </nav>
        </div>

        {ESPECIAIS.map(({ slug, nome, segmento, descricao, recursos, publico, icone: Icone, playlist }) => (
          <section
            key={slug}
            id={slug}
            className="scroll-mt-24 rounded-2xl border border-slate-800/80 bg-slate-900/70 backdrop-blur-sm p-8 space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center shrink-0">
                <Icone className="w-6 h-6" />
              </span>
              <div>
                <h2 className="text-2xl font-bold">{nome}</h2>
                <p className="text-sm text-blue-400/80">{segmento}</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed font-light">{descricao}</p>

            {playlist && (
              <div className="space-y-2">
                <div className="aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}`}
                    title={`Vídeos do ${nome}`}
                    className="w-full h-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <a
                  href={`https://www.youtube.com/playlist?list=${playlist}`}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver todos os vídeos no YouTube
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest text-slate-500">Recursos de Destaque</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                {recursos.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Para quem é</p>
              <p className="text-sm text-slate-300 mt-1">{publico}</p>
            </div>
          </section>
        ))}

        <div className="text-center space-y-4">
          <p className="text-slate-400">Quer ver algum deles funcionando na sua empresa?</p>
          <Link
            href="/#contato"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/25"
          >
            Agendar uma apresentação
          </Link>
        </div>
      </main>
    </div>
  );
}
