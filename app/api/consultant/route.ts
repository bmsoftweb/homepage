import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

// Initialize Gemini client using the environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(req: NextRequest) {
  try {
    const { businessType, size, challenge, currentSystem } = await req.json();

    if (!businessType) {
      return NextResponse.json({ error: "O tipo de negócio é obrigatório." }, { status: 400 });
    }

    const systemPrompt = `Você é o "Arquiteto de Sistemas AI" da BMsoft Sistemas (www.bmsoft.com.br).
A BMsoft Sistemas é uma empresa brasileira de tecnologia com mais de 20 anos de experiência, especializada em simplificar a gestão de micro, pequenas e médias empresas através de softwares robustos, práticos e modernos.

Nossos principais produtos são:
1. **BM ERP (Gestão Empresarial)**: Controle financeiro completo (contas a pagar/receber, fluxo de caixa, conciliação bancária), controle de estoque rigoroso com custo médio, compras, emissão de Notas Fiscais Eletrônicas (NF-e, NFS-e, MDF-e), relatórios gerenciais e integração contábil.
2. **BM Força de Vendas (Aplicativo Mobile)**: App para tablets e smartphones Android para representantes comerciais externos. Funciona 100% offline com sincronização inteligente. Possui catálogo de produtos digital, tabelas de preço flexíveis, rotas de atendimento, limites de crédito e histórico de compras dos clientes.
3. **BM PDV (Ponto de Venda Comercial)**: Sistema de frente de caixa ultra-rápido para o varejo (supermercados, lojas de departamento). Emite NFC-e e CF-e-SAT com agilidade. Suporta leitores de código de barras, balanças e funcionamento offline caso a internet caia.
4. **BM Service (Ordens de Serviço)**: Módulo especializado para prestadores de serviços, oficinas, assistências técnicas e instaladores. Gerencia contratos de manutenção, equipamentos por número de série, técnicos responsáveis, peças utilizadas e orçamentos rápidos.

Seu objetivo é analisar as informações do visitante e gerar uma consultoria personalizada em formato Markdown profissional e amigável.
Use uma linguagem de negócios empática, de alta conversão, entusiasmada, porém muito técnica e precisa (sem enrolações ou clichês vazios).

Informações sobre a empresa do visitante:
- Tipo de Negócio / Segmento: ${businessType}
- Porte / Tamanho (funcionários ou faturamento aproximado): ${size}
- Principal desafio enfrentado atualmente: ${challenge}
- Sistema que utiliza atualmente: ${currentSystem}

Estruture sua resposta estritamente nos seguintes tópicos em Markdown:

### 1. 🔍 Diagnóstico Estratégico
Analise com empatia os impactos reais que o desafio de "${challenge}" causa no dia a dia da operação deles, usando o sistema "${currentSystem}". Demonstre compreensão profunda sobre os gargalos do segmento de "${businessType}".

### 2. 💡 Arquitetura de Solução BMsoft Ideal
Indique explicitamente quais dos nossos produtos (BM ERP, BM Força de Vendas, BM PDV ou BM Service) são ideais para resolver os problemas deles. Explique detalhadamente *como* cada módulo sugerido se integrará na rotina operacional deles para automatizar os processos.

### 3. 🎯 Impacto Prático e Retorno de Investimento (ROI)
Forneça estimativas realistas de ganhos operacionais específicos em porcentagens ou horas (ex: "Redução de até 40% no tempo de faturamento de notas", "Economia de 12 horas semanais em reconciliação financeira", "Eliminação de 15% de perdas por quebra de estoque"). Explique por que essas melhorias ocorrem.

### 4. 📅 Cronograma de Transição sem Sobressaltos (30 dias)
Apresente uma trilha rápida de implantação em 4 semanas:
- **Semana 1**: Mapeamento de processos e importação de dados cadastrais (clientes, produtos, saldos de estoque).
- **Semana 2**: Treinamento prático personalizado das equipes chaves da empresa.
- **Semana 3**: Operação assistida (nossa equipe acompanha as primeiras emissões e rotinas em tempo real).
- **Semana 4**: Virada definitiva e início da análise de dashboards gerenciais.

### 5. 🚀 Próximo Passo Recomendado
Faça uma chamada para ação calorosa e profissional, incentivando-os a clicar no botão de contato direto do WhatsApp para agendar uma demonstração gratuita com um especialista humano BMsoft, mencionando este plano gerado pela inteligência artificial.

Mantenha a formatação limpa, sem usar blocos de código redundantes, emojis exagerados ou linguagem robótica.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: systemPrompt,
    });

    const replyText = response.text || "Desculpe, ocorreu um erro ao gerar a sua simulação. Por favor, tente novamente.";

    return NextResponse.json({ text: replyText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Erro interno no servidor de inteligência artificial." }, { status: 500 });
  }
}
