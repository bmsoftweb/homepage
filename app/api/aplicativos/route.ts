import { NextResponse } from 'next/server';
import { pool } from '../../../lib/db';
import type { SoftwareApp } from '../../../components/types';

export const dynamic = 'force-dynamic';

/** Aplicativos ativos da tabela homepage.aplicativos, na ordem definida */
export async function GET() {
  try {
    const [linhas] = await pool.query<any[]>(
      `SELECT id, nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo,
              diferencial, icone, imagem_url, link_saiba_mais
         FROM aplicativos
        WHERE ativo = 1
        ORDER BY ordem, id`
    );
    const apps: SoftwareApp[] = linhas.map((l) => ({
      id: String(l.id),
      name: l.nome,
      badge: l.titulo_card,
      shortDescription: l.descricao_card || '',
      detailedDescription: l.descricao_detalhada,
      features: String(l.recursos || '').split(/\r?\n/).map((r) => r.trim()).filter(Boolean),
      targetAudience: l.publico_alvo || '',
      techHighlight: l.diferencial || '',
      icon: l.icone || '',
      imageUrl: l.imagem_url || '',
      moreUrl: l.link_saiba_mais || '',
    }));
    // CDN do Vercel guarda por 1 min: alteração no banco aparece no site em até 1 min
    return NextResponse.json(apps, { headers: { 'Cache-Control': 's-maxage=60, stale-while-revalidate=300' } });
  } catch (error: any) {
    console.error('Erro ao ler aplicativos:', error);
    return NextResponse.json({ error: 'Não foi possível carregar os aplicativos.' }, { status: 500 });
  }
}
