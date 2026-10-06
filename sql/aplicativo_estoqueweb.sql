-- Registro do EstoqueWEB na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM EstoqueWEB', 'Consulta de Estoque e Pré-Pedido',
 'Consulta de estoque pela internet para a equipe de vendas, com reserva dos itens e pedido que vira orçamento no ERP.',
 'O BM EstoqueWEB coloca o estoque de todas as lojas na mão da equipe de vendas, de qualquer lugar. O vendedor pesquisa por classe, aplicação ou código, vê o disponível já descontando as reservas, consulta similares e fotos e monta o pré-pedido reservando os itens. O gerente fecha o pedido com conferência de crédito, plano de pagamento e estoque, e ele entra no ERP como orçamento, acompanhando depois o faturamento.',
 'Pesquisa de estoque por classe, aplicação, código e produtos similares\nEstoque disponível descontando as reservas, por loja\nPré-pedido com reserva automática dos itens\nFechamento do pedido com conferência de limite de crédito, plano de pagamento e estoque negativo\nPedido gerado no ERP como orçamento, com acompanhamento do faturamento e impressão\nFotos dos produtos direto do cadastro do ERP\nNíveis de acesso: administrador, gerente, supervisor, vendedor e consulta',
 'Distribuidores, atacados e lojas com várias filiais e equipe de vendas interna ou externa',
 'Usa a mesma base do ERP BMsoft em tempo de consulta: reservas e pedidos aparecem no ERP sem integração manual.',
 'pesquisa', NULL, 13);
