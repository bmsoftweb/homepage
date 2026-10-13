import { Printer, Smile, Stethoscope, type LucideIcon } from 'lucide-react';

/** Aplicativos especiais (para segmentos específicos): seção da página inicial e página /especiais */
export interface AppEspecial {
  /** Âncora na página /especiais (#slug) */
  slug: string;
  nome: string;
  segmento: string;
  resumo: string;
  descricao: string;
  recursos: string[];
  publico: string;
  icone: LucideIcon;
  /** Id da playlist do YouTube (o "list=" do endereço): mostra os vídeos na página */
  playlist?: string;
}

export const ESPECIAIS: AppEspecial[] = [
  {
    slug: 'meuconsultorioweb',
    nome: 'MeuConsultorioWeb',
    segmento: 'Clínicas e Consultórios Médicos',
    resumo: 'Agenda, prontuário eletrônico com IA, teleconsulta e financeiro da clínica em um só sistema, no computador e no celular.',
    descricao:
      'O MeuConsultorioWeb organiza a clínica da recepção ao consultório. A agenda mostra cada médico e sala em tempo real, o prontuário eletrônico reúne anamnese, evolução, receitas, atestados e exames, e a inteligência artificial ouve a consulta e preenche a anamnese para o médico. Pacientes confirmam a consulta pelo WhatsApp e podem ser atendidos por vídeo, e o financeiro cuida de particular e convênios.',
    recursos: [
      'Agenda por médico e unidade, atualizada em tempo real em todas as telas',
      'Prontuário eletrônico com anamnese, evolução SOAP com CID-10, receitas, atestados e exames anexados',
      'Anamnese com IA: o sistema ouve a consulta e preenche os campos sozinho',
      'Prontuários por especialidade: oftalmologia, pediatria (curvas da OMS e vacinas), fonoaudiologia e ortopedia com modelo 3D',
      'Teleconsulta por vídeo com link para o paciente entrar sem cadastro',
      'Confirmação de consultas pelo WhatsApp: o paciente responde e a agenda se atualiza',
      'Financeiro com contas, fluxo de caixa, faturamento de convênios e repasse aos médicos',
      'Estoque com lotes e validades, permissões por perfil e auditoria em conformidade com a LGPD',
    ],
    publico: 'Consultórios e clínicas médicas, de um profissional a redes com várias unidades',
    icone: Stethoscope,
    playlist: 'PLEr7sF4L32eo',
  },
  {
    slug: 'odontosys',
    nome: 'OdontoSys',
    segmento: 'Clínicas Odontológicas',
    resumo: 'Gestão da clínica odontológica: agenda por dentista, odontograma 3D, planos de tratamento, financeiro e estoque.',
    descricao:
      'O OdontoSys reúne tudo o que a clínica odontológica usa no dia a dia. A agenda separa os dentistas por cor e remarca arrastando a consulta, o atendimento registra anamnese, procedimentos, radiografias e evolução, e o odontograma 3D mostra a condição de cada face do dente. Os planos de tratamento saem impressos com o logo da clínica, e o financeiro acompanha o que cada paciente deve.',
    recursos: [
      'Agenda por dentista com visão de semana, mês ou lista, bloqueios de horário e remarcação arrastando',
      'Atendimento com anamnese, procedimentos, fotos, radiografias e evolução clínica impressa',
      'Odontograma 3D com numeração FDI e condição marcada por face do dente',
      'Planos de tratamento com valores, aprovação e impressão com o logo da clínica',
      'Prontuário com alertas, saldo, extrato e histórico do paciente em todas as clínicas da rede',
      'Financeiro com contas a pagar e a receber, parcelas, recorrências e saldo devedor dos pacientes',
      'Estoque de materiais com aviso de estoque baixo no painel',
      'Perguntas sobre os dados da clínica em português, respondidas por inteligência artificial',
    ],
    publico: 'Consultórios e clínicas odontológicas, inclusive redes com várias unidades',
    icone: Smile,
  },
  {
    slug: 'printcontrol',
    nome: 'PrintControl',
    segmento: 'Locação de Impressoras',
    resumo: 'Contratos de locação com franquia, leitura automática de contadores pela rede, faturamento e boletos.',
    descricao:
      'O PrintControl organiza o dia a dia de quem aluga impressoras e copiadoras. Os contratos definem franquia e valor do excedente, os contadores das máquinas são lidos automaticamente pela rede e o faturamento sai com nota de débito e boleto. A equipe técnica acompanha as ordens de serviço, e os clientes enviam leituras, pedem suprimentos e abrem chamados pela Área do Cliente.',
    recursos: [
      'Contratos de locação com franquia de páginas e cobrança de excedente',
      'Leitura automática dos contadores das impressoras pela rede (SNMP), preto e colorido',
      'Faturamento com nota de débito e boletos BB, Santander e Ailos, com remessa e retorno CNAB',
      'Contas a receber com baixas, retorno bancário e controle de atrasos',
      'Ordens de serviço com peças e atendimento técnico',
      'Área do Cliente para envio de leituras, pedidos de suprimento e chamados de reparo',
      'Painel com leituras atrasadas, notas a vencer e ordens de serviço abertas',
    ],
    publico: 'Empresas de locação e outsourcing de impressão e assistências técnicas que alugam equipamentos',
    icone: Printer,
  },
];
