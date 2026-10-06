-- Registro do Acerto de Estoque na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM Acerto de Estoque', 'Contagem pelo Celular',
 'Conte o estoque andando pelas prateleiras com o celular: leia o código de barras e acerte o saldo na hora no ERP.',
 'O BM Acerto de Estoque transforma o celular em coletor. O estoquista lê o código de barras com a câmera, vê o saldo que está no sistema, informa a quantidade contada e confirma: o acerto é gravado direto no ERP BMsoft como movimentação de estoque, mantendo o histórico para auditoria. Sem coletor dedicado e sem precisar voltar ao computador.',
 'Leitura do código de barras pela câmera do celular\nBusca do produto por código, referência ou código de barras\nSaldo atual do sistema ao lado da quantidade contada, com a diferença na hora\nBotões rápidos para somar, subtrair e zerar a contagem\nAcerto registrado no histórico de movimentação do ERP, sem apagar o passado\nEstoque por empresa ou filial e app instalável na tela do celular',
 'Lojas, autopeças, materiais de construção, agropecuárias e distribuidores com estoque físico',
 'Dispensa coletor de dados: qualquer celular com câmera faz a contagem, e o ajuste entra no ERP no mesmo instante.',
 'estoque', NULL, 12);
