import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ESPECIAIS } from '../lib/especiais';

/** Seção "Aplicativos Especiais" da página inicial: um card por aplicativo, levando à página /especiais */
export default function EspeciaisSection() {
  return (
    <section id="especiais" className="bg-slate-950 text-white py-24 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs tracking-wider text-blue-400 uppercase font-bold">Aplicativos Especiais</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Sistemas feitos para segmentos específicos.</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Além da gestão empresarial, a BMsoft desenvolve sistemas completos para áreas com necessidades próprias.
            </p>
          </div>
          <Link
            href="/especiais"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
          >
            Conhecer os aplicativos especiais
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESPECIAIS.map(({ slug, nome, segmento, resumo, icone: Icone }) => (
            <Link
              key={slug}
              href={`/especiais#${slug}`}
              className="group p-6 rounded-2xl border border-slate-800/80 bg-slate-900/50 hover:border-blue-500/60 hover:bg-slate-900 transition-colors flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center shrink-0">
                  <Icone className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-white">{nome}</p>
                  <p className="text-xs text-blue-400/80">{segmento}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{resumo}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                Saiba mais
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
