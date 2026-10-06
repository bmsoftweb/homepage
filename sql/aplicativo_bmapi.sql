-- Registro da bmAPI na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM API', 'Integração com o ERP',
 'A ponte entre o ERP BMsoft e os sistemas web: acesso seguro aos dados do ERP por API, sem trocar de banco.',
 'A BM API é instalada no servidor da sua empresa e dá acesso aos dados do ERP BMsoft pela rede, em formato JSON. É ela que permite usar os módulos web da BMsoft, como CRM, estoque, produção e portal B2B, sobre a mesma base do ERP, sem migração nem cópia de dados. Também abre caminho para integrações com parceiros e outros sistemas.',
 'Consultas e gravações no ERP em formato JSON, com parâmetros\nAcesso protegido por chave, uma para cada base de dados\nVárias bases atendidas por uma única instalação\nModo somente leitura e limite de registros por base\nLeitura de imagens dos produtos gravadas no ERP\nDocumentação Swagger embutida para desenvolvedores',
 'Empresas que usam o ERP BMsoft e querem os módulos web ou integrar o ERP a outros sistemas',
 'Liga o ERP aos sistemas web sem migrar o banco: o ERP continua o mesmo e os dados ficam sempre na sua empresa.',
 'integracao', NULL, 11);
