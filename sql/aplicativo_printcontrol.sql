-- Registro do PrintControl na tabela aplicativos (banco homepage). Rodar manualmente.
INSERT INTO aplicativos (nome, titulo_card, descricao_card, descricao_detalhada, recursos, publico_alvo, diferencial, icone, link_saiba_mais, ordem) VALUES
('BM PrintControl', 'Locação de Impressoras',
 'Gestão completa da locação de impressoras: contratos com franquia, leitura automática de contadores, faturamento e boletos.',
 'O BM PrintControl organiza o dia a dia de quem aluga impressoras e copiadoras. Os contratos definem franquia e valor do excedente, os contadores das máquinas são lidos automaticamente pela rede e o faturamento sai com nota de débito e boleto. A equipe técnica acompanha as ordens de serviço, e seus clientes enviam leituras, pedem suprimentos e abrem chamados pela Área do Cliente.',
 'Contratos de locação com franquia de páginas e cobrança de excedente\nLeitura automática dos contadores das impressoras pela rede (SNMP), preto e colorido\nFaturamento com nota de débito e boletos BB, Santander e Ailos com remessa e retorno CNAB\nContas a receber com baixas, retorno bancário e controle de atrasos\nOrdens de serviço com peças e atendimento técnico\nÁrea do Cliente para envio de leituras, pedidos de suprimento e chamados de reparo\nPainel com leituras atrasadas, notas a vencer e OS abertas',
 'Empresas de locação e outsourcing de impressão e assistências técnicas que alugam equipamentos',
 'Coletor que roda na rede do cliente e envia os contadores sozinho: o faturamento sai sem visita para anotar leitura.',
 'impressora', NULL, 10);
