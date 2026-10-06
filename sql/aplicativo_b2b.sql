-- Registro do Portal B2B na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM B2B', 'Portal de Pedidos Online',
 'Portal na internet para os seus clientes empresas fazerem pedidos sozinhos, com o preço e o crédito de cada um.',
 'O BM B2B abre um canal de vendas que funciona 24 horas: seus clientes entram com o CNPJ, consultam o catálogo com fotos e o preço da tabela deles, montam o carrinho e fecham o pedido dentro do limite de crédito. Depois acompanham o status, o rastreio da entrega e os títulos financeiros, sem precisar ligar para o vendedor.',
 'Catálogo com fotos, situação de estoque e desconto por volume\nPreço por cliente conforme a tabela de preço de cada um\nPedido rápido digitando o código do produto ou colando a planilha de compras\nBloqueio automático por limite de crédito e títulos vencidos\nAcompanhamento do pedido com rastreio e nota fiscal\nTítulos em aberto e vencidos na área do cliente, com acesso por filial',
 'Indústrias, distribuidoras e atacadistas que vendem para outras empresas',
 'Integrado ao ERP BMsoft: produtos, preços e títulos vêm do ERP, e os pedidos entram no ERP como orçamento com reserva de estoque.',
 'carrinho', NULL, 8);
