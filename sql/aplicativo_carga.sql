-- Registro do CargaWEB na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM Carga', 'Montagem de Cargas e Entregas',
 'Monte as cargas dos caminhões, separe e pese os pedidos e feche o acerto da rota quando o motorista volta.',
 'O BM Carga organiza a expedição do começo ao fim. A equipe monta a carga de cada veículo com os pedidos do ERP, libera para a separação, acerta o peso real dos itens com controle de lotes, informa os volumes e imprime o relatório e as etiquetas. Na volta do motorista, o acerto da rota registra o que foi entregue e o que voltou, as despesas da viagem e mostra o custo da entrega.',
 'Montagem de cargas por veículo com os pedidos do ERP\nLiberação, fechamento, reabertura e transferência de cargas\nSeparação com acerto de peso real e controle de lotes\nVolumes, etiquetas e relatório da carga\nAcerto da rota: pedidos entregues e devolvidos, km rodados e despesas da viagem\nIndicadores de custo: percentual de despesa sobre o valor entregue, custo por km e por entrega\nAcesso separado para quem monta as cargas e para a equipe de separação',
 'Distribuidores e indústrias com frota própria e entregas por rota',
 'Trabalha sobre os pedidos do ERP BMsoft: peso, lotes e totais do pedido são acertados direto no sistema durante a separação.',
 'logistica', NULL, 14);
