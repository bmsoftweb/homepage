-- Registro do OrçamentoFácil na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM Orçamento Fácil', 'Orçamentos de Móveis Planejados',
 'Orçamento de móveis planejados direto do projeto do SketchUp: peças, chapas, ferragens, plano de corte e preço final.',
 'O BM Orçamento Fácil lê o projeto do arquiteto exportado do SketchUp e transforma o desenho em orçamento. As peças são reconhecidas e classificadas com apoio de um visualizador 3D, e o sistema calcula chapas, fitas, ferragens, insumos e serviços, monta o plano de corte otimizado e chega ao preço com markup, descontos, condição de pagamento e RT do arquiteto. O orçamento sai em PDF para o cliente e com a lista de corte para a produção.',
 'Importação do projeto do SketchUp (arquivo .dae) com visualizador 3D\nClassificação das peças com regras que o sistema aprende e reaproveita\nCálculo automático de chapas, fitas de borda, ferragens, insumos e serviços\nPlano de corte otimizado com desenho das chapas e lista de corte\nFormação de preço com markup, desconto, condição de pagamento, RT e margem real\nPDFs para o cliente, interno, de corte e relatório de RT\nControle de status, revisões e validade dos orçamentos, com painel de indicadores',
 'Marcenarias e fábricas de móveis planejados que orçam a partir de projetos de arquitetos',
 'Do desenho ao preço sem medir peça por peça: o projeto do SketchUp vira lista de materiais, plano de corte e orçamento.',
 'moveis', NULL, 15);
