# Histórico de versões

Mais recente primeiro. PATCH a cada envio ao GitHub; MAJOR/MINOR só quando pedido.

## 0.1.7 — 2026-10-06

- Links do menu (Início, Aplicativos...): a seção para logo abaixo do menu fixo, sem ficar escondida atrás dele (antes, "Início" cortava o logo grande).

## 0.1.6 — 2026-10-06

- Contato: o painel de chat simulado da Eloisa virou um botão "Falar com a equipe agora", que abre o chat do widget de suporte (sem o widget, a página de suporte em nova aba).
- Suporte do menu e o botão novo usam `lib/suporte.ts`: só abrem o chat se estiver fechado (antes, com o chat aberto, o clique fechava).

## 0.1.5 — 2026-10-06

- "Agendar Apresentação" envia de verdade: rota `/api/lead` repassa ao CRM Web (crm.bmsoft.com.br, empresa 1), que cria o lead e o negócio no funil. Campo-isca contra robôs; erros internos do CRM viram mensagem genérica.
- "Sistema de Interesse" lista os aplicativos ativos da tabela `aplicativos`.
- Ícones novos para os aplicativos: impressora, integracao, pesquisa, moveis.
- SQL dos registros de PrintControl, BM API, Acerto de Estoque, EstoqueWEB, Carga e Orçamento Fácil em `sql/`.

## 0.1.4 — 2026-10-06

- Aplicativos vêm do MySQL (banco `homepage`, tabela `aplicativos`): rota `/api/aplicativos` (só ativos, na ordem; cache de 1 min no Vercel). Credenciais em `MYSQL_*` no ambiente. SQL da tabela e dos registros (ERP, Força de Vendas, PDV, Service, BI, CRM, B2B, Produção Lite) em `sql/`.
- Seção Aplicativos: menu em cards (ícone, nome, título e descrição curta), quebrando em quantas linhas precisar; ícone, imagem e link "Saiba mais" por aplicativo.
- Header: "Suporte" como botão verde, "Simulador IA" só com borda azul, WhatsApp com fundo cinza escuro.
- Cursor de mão em todos os botões.
- Simulador IA: sem "padarias" e título "Próximo Passo Recomendado".

## 0.1.3 — 2026-10-06

- Nossa História: subtítulo "de uma pequena software house para um parceiro regional"; fundação em Rio do Sul, SC; NF-e com "mercado catarinense".

## 0.1.2 — 2026-10-06

- Abertura: logo da BMsoft grande acima do texto, alinhado à esquerda, com entrada suave.
- Header: botão do WhatsApp (47) 99116-6107 depois de "Falar com Consultor" (também no celular, ao lado do Simulador).
- Botões de WhatsApp do Simulador IA e do Contato agora vão para (47) 99116-6107 (antes um número de exemplo).
- Removido o ícone "N" de depuração do Next em modo de desenvolvimento.

## 0.1.1 — 2026-10-06

- Primeiro envio ao GitHub.
- Header com o logo da BMsoft no lugar do texto; menu ganhou "Suporte" (abre o chat do widget; sem o widget, a página de suporte do CRM em nova aba).
- Widget de suporte do CRM Web (crm.bmsoft.com.br) em todas as páginas.
- Abertura: foto de notebook (Pexels) como fundo à direita, com transição suave para o texto e ícones "holográficos" animados; saiu o quadro "dashboard_bmsoft_erp.exe" e a imagem antiga.
- Site todo em Jost (inclusive números e rótulos que usavam font-sans/font-mono).
- Simulador AI: modelo Gemini trocado para gemini-3.8-flash (o 2.5-flash não está mais disponível para contas novas).
- Textos: público-alvo sem Padarias e Drogarias; marco de 2023 com nova descrição da nuvem; telefone/WhatsApp e sede de Rio do Sul/SC; atendente Eloisa; CNPJ 08.511.951/0001-37; rodapé sem Certificação e sem "Feito com orgulho nacional".
