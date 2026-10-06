import { NextRequest, NextResponse } from 'next/server';

// Lead vai para o CRM Web (empresa 1 = BMsoft, a mesma do widget de suporte). CRM_URL troca o endereço (ex.: teste local)
const URL_LEADS = `${process.env.CRM_URL || 'https://crm.bmsoft.com.br'}/api/publico/leads/1`;

/** Formulário "Agendar Apresentação": repassa ao CRM, que abre o negócio no funil para o próximo vendedor */
export async function POST(req: NextRequest) {
  try {
    const b = await req.json();
    const r = await fetch(URL_LEADS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: b.nome,
        empresa: b.empresa,
        email: b.email,
        telefone: b.telefone,
        interesse: b.interesse,
        mensagem: b.mensagem,
        site: b.site,
      }),
    });
    const corpo = await r.json().catch(() => ({}));
    if (!r.ok) {
      // Só os avisos de preenchimento (400) chegam ao visitante; o resto vira mensagem genérica e vai para o log
      if (r.status === 400 && corpo.error) return NextResponse.json({ error: corpo.error }, { status: 400 });
      console.error(`Lead para o CRM: HTTP ${r.status} ${corpo.error ?? ''}`);
      return NextResponse.json({ error: 'Não foi possível enviar agora. Tente de novo em instantes.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Lead para o CRM:', error);
    return NextResponse.json({ error: 'Não foi possível enviar agora. Tente de novo em instantes.' }, { status: 502 });
  }
}
